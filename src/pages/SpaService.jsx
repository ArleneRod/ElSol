import { Link } from 'react-router-dom'
import './ServiceDetail.css'

function SpaService() {
  const tratamientosFaciales = [
    { nombre: 'Limpieza Facial Básica', descripcion: 'Limpieza profunda e hidratación', precio: '$35' },
    { nombre: 'Facial Antiedad', descripcion: 'Tratamiento con colágeno y vitaminas', precio: '$50' },
    { nombre: 'Facial Hidratante', descripcion: 'Hidratación profunda para piel seca', precio: '$40' },
    { nombre: 'Peeling Suave', descripcion: 'Exfoliación química ligera', precio: '$45' }
  ]

  const tratamientosCorporales = [
    { nombre: 'Masaje Relajante', descripcion: '60 minutos de relajación total', precio: '$60' },
    { nombre: 'Masaje Terapéutico', descripcion: 'Alivio de tensiones musculares', precio: '$65' },
    { nombre: 'Exfoliación Corporal', descripcion: 'Renovación de la piel del cuerpo', precio: '$40' },
    { nombre: 'Envoltura Corporal', descripcion: 'Tratamiento desintoxicante', precio: '$55' }
  ]

  const paquetes = [
    { nombre: 'Día de Spa Básico', descripcion: 'Facial + Masaje 30min', precio: '$70' },
    { nombre: 'Spa Completo', descripcion: 'Facial + Masaje + Exfoliación', precio: '$110' },
    { nombre: 'Relajación Total', descripcion: 'Masaje 90min + Facial', precio: '$95' }
  ]

  return (
    <div className="service-detail">
      <div className="service-hero">
        <div className="container">
          <Link to="/#servicios" className="back-link">← Volver a Servicios</Link>
          <h1>Tratamientos Spa</h1>
          <p className="subtitle">Experiencias de relajación y renovación</p>
        </div>
      </div>

      <div className="container">
        <section className="service-section">
          <h2>Tratamientos Faciales</h2>
          <div className="services-grid">
            {tratamientosFaciales.map((servicio, index) => (
              <div key={index} className="service-item">
                <div className="service-item-header">
                  <h3>{servicio.nombre}</h3>
                  <span className="price">{servicio.precio}</span>
                </div>
                <p>{servicio.descripcion}</p>
                <Link to="/reservas" className="btn-reserve">Reservar</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="service-section">
          <h2>Tratamientos Corporales</h2>
          <div className="services-grid">
            {tratamientosCorporales.map((servicio, index) => (
              <div key={index} className="service-item">
                <div className="service-item-header">
                  <h3>{servicio.nombre}</h3>
                  <span className="price">{servicio.precio}</span>
                </div>
                <p>{servicio.descripcion}</p>
                <Link to="/reservas" className="btn-reserve">Reservar</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="service-section packages">
          <h2>Paquetes Especiales</h2>
          <div className="packages-grid">
            {paquetes.map((paquete, index) => (
              <div key={index} className="package-item">
                <h3>{paquete.nombre}</h3>
                <p>{paquete.descripcion}</p>
                <span className="price-large">{paquete.precio}</span>
                <Link to="/reservas" className="btn-reserve">Reservar</Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default SpaService
