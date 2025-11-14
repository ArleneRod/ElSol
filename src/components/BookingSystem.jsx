import { useState, useEffect } from 'react'
import './BookingSystem.css'

function BookingSystem() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedService, setSelectedService] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const [bookings, setBookings] = useState([])
  const [showAdmin, setShowAdmin] = useState(false)

  // Servicios disponibles
  const services = [
    { id: 'corte', name: 'Corte de Cabello', duration: 30 },
    { id: 'spa', name: 'Tratamiento Spa', duration: 60 },
    { id: 'manicure', name: 'Manicure & Pedicure', duration: 60 },
    { id: 'color', name: 'Coloración', duration: 90 }
  ]

  // Horarios por día
  const getSchedule = (date) => {
    const day = date.getDay()
    // 0 = Domingo, 1 = Lunes, 2 = Martes, etc.

    if (day === 1) { // Lunes cerrado
      return []
    } else if (day === 0 || day === 6) { // Sábado y Domingo
      return generateTimeSlots('12:00', '17:00')
    } else { // Martes a Viernes
      return generateTimeSlots('10:00', '17:00')
    }
  }

  // Generar slots de 30 minutos
  const generateTimeSlots = (start, end) => {
    const slots = []
    const [startHour, startMin] = start.split(':').map(Number)
    const [endHour, endMin] = end.split(':').map(Number)

    let currentHour = startHour
    let currentMin = startMin

    while (currentHour < endHour || (currentHour === endHour && currentMin < endMin)) {
      const timeString = `${String(currentHour).padStart(2, '0')}:${String(currentMin).padStart(2, '0')}`
      slots.push(timeString)

      currentMin += 30
      if (currentMin >= 60) {
        currentMin = 0
        currentHour++
      }
    }

    return slots
  }

  // Obtener próximos 14 días (excluyendo lunes)
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    for (let i = 0; i < 21; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      if (date.getDay() !== 1) { // Excluir lunes
        dates.push(date)
      }

      if (dates.length >= 14) break
    }

    return dates
  }

  // Cargar reservas del localStorage
  useEffect(() => {
    const savedBookings = localStorage.getItem('elsol_bookings')
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings))
    }
  }, [])

  // Guardar reservas en localStorage
  const saveBookings = (newBookings) => {
    localStorage.setItem('elsol_bookings', JSON.stringify(newBookings))
    setBookings(newBookings)
  }

  // Verificar si un slot está ocupado
  const isSlotBooked = (date, time) => {
    const dateString = date.toISOString().split('T')[0]
    return bookings.some(
      booking => booking.date === dateString && booking.time === time
    )
  }

  // Manejar selección de fecha
  const handleDateSelect = (date) => {
    setSelectedDate(date)
    setSelectedTime(null)
    setShowForm(false)
  }

  // Manejar selección de hora
  const handleTimeSelect = (time) => {
    if (!isSlotBooked(selectedDate, time)) {
      setSelectedTime(time)
      setShowForm(true)
    }
  }

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Confirmar reserva
  const handleBookingSubmit = (e) => {
    e.preventDefault()

    if (!selectedDate || !selectedTime || !selectedService || !formData.name || !formData.phone) {
      alert('Por favor completa todos los campos requeridos')
      return
    }

    const newBooking = {
      id: Date.now(),
      date: selectedDate.toISOString().split('T')[0],
      time: selectedTime,
      service: selectedService,
      serviceName: services.find(s => s.id === selectedService).name,
      name: formData.name,
      phone: formData.phone,
      email: formData.email
    }

    const newBookings = [...bookings, newBooking]
    saveBookings(newBookings)

    // Reset
    setSelectedDate(null)
    setSelectedTime(null)
    setSelectedService('')
    setFormData({ name: '', phone: '', email: '' })
    setShowForm(false)

    alert('¡Reserva confirmada! Te esperamos 🌟')
  }

  // Cancelar reserva (admin)
  const handleCancelBooking = (bookingId) => {
    if (confirm('¿Estás seguro de cancelar esta reserva?')) {
      const newBookings = bookings.filter(b => b.id !== bookingId)
      saveBookings(newBookings)
    }
  }

  // Formatear fecha para mostrar
  const formatDate = (date) => {
    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`
  }

  const availableDates = getAvailableDates()

  return (
    <section id="citas" className="booking-system">
      <div className="container">
        <div className="booking-header">
          <div className="header-decoration left">────</div>
          <h2>Reserva tu Cita</h2>
          <div className="header-decoration right">────</div>
        </div>

        {/* Botón Admin */}
        <button
          className="admin-toggle"
          onClick={() => setShowAdmin(!showAdmin)}
        >
          {showAdmin ? '📅 Ver Calendario' : '⚙️ Admin'}
        </button>

        {showAdmin ? (
          /* Vista de Administrador */
          <div className="admin-panel">
            <h3>Reservas Agendadas ({bookings.length})</h3>
            {bookings.length === 0 ? (
              <p className="no-bookings">No hay reservas aún</p>
            ) : (
              <div className="bookings-list">
                {bookings
                  .sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time))
                  .map(booking => (
                    <div key={booking.id} className="booking-item">
                      <div className="booking-info">
                        <div className="booking-date-time">
                          <span className="date">{booking.date}</span>
                          <span className="time">{booking.time}</span>
                        </div>
                        <div className="booking-details">
                          <h4>{booking.name}</h4>
                          <p>📞 {booking.phone}</p>
                          {booking.email && <p>✉️ {booking.email}</p>}
                          <p className="service-tag">✂ {booking.serviceName}</p>
                        </div>
                      </div>
                      <button
                        className="btn-cancel"
                        onClick={() => handleCancelBooking(booking.id)}
                      >
                        Cancelar
                      </button>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ) : (
          /* Vista de Cliente - Calendario */
          <div className="booking-container">
            {/* Selector de Fecha */}
            <div className="date-selector">
              <h3>1. Selecciona el día</h3>
              <div className="dates-grid">
                {availableDates.map((date, index) => {
                  const isSelected = selectedDate &&
                    date.toISOString().split('T')[0] === selectedDate.toISOString().split('T')[0]

                  return (
                    <button
                      key={index}
                      className={`date-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleDateSelect(date)}
                    >
                      <div className="day-name">{formatDate(date).split(' ')[0]}</div>
                      <div className="day-number">{date.getDate()}</div>
                      <div className="month-name">{formatDate(date).split(' ')[2]}</div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Selector de Hora */}
            {selectedDate && (
              <div className="time-selector">
                <h3>2. Selecciona la hora</h3>
                <div className="times-grid">
                  {getSchedule(selectedDate).map((time, index) => {
                    const isBooked = isSlotBooked(selectedDate, time)
                    const isSelected = selectedTime === time

                    return (
                      <button
                        key={index}
                        className={`time-slot ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleTimeSelect(time)}
                        disabled={isBooked}
                      >
                        {time}
                        {isBooked && <span className="booked-label">Ocupado</span>}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Formulario de Reserva */}
            {showForm && (
              <div className="booking-form">
                <h3>3. Completa tus datos</h3>
                <form onSubmit={handleBookingSubmit}>
                  <div className="form-group">
                    <label htmlFor="service">Servicio *</label>
                    <select
                      id="service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      required
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map(service => (
                        <option key={service.id} value={service.id}>
                          {service.name} ({service.duration} min)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Nombre completo *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Teléfono *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email (opcional)</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="booking-summary">
                    <h4>Resumen de tu reserva:</h4>
                    <p>📅 {formatDate(selectedDate)}</p>
                    <p>🕐 {selectedTime}</p>
                    {selectedService && (
                      <p>✂ {services.find(s => s.id === selectedService)?.name}</p>
                    )}
                  </div>

                  <button type="submit" className="btn-confirm">
                    <span>Confirmar Reserva</span>
                    <div className="btn-border"></div>
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

        <div className="booking-note">
          <p>💡 <strong>Horarios:</strong> Mar-Vie 10am-5pm | Sáb-Dom 12pm-5pm | Lunes cerrado</p>
        </div>
      </div>
    </section>
  )
}

export default BookingSystem
