import { Link } from 'react-router-dom'
import './ServiceDetail.css'

function ManicureService() {
  const serviciosManos = [
    { nombre: 'Manicure Básico', descripcion: 'Limado, cutícula y esmaltado', precio: '$20' },
    { nombre: 'Manicure Spa', descripcion: 'Incluye exfoliación e hidratación', precio: '$30' },
    { nombre: 'Manicure Gel', descripcion: 'Esmaltado de larga duración', precio: '$35' },
    { nombre: 'Uñas Acrílicas', descripcion: 'Set completo de acrílico', precio: '$45' },
    { nombre: 'Diseño de Uñas', descripcion: 'Arte en uñas personalizado', precio: '+$10' }
  ]

  const serviciosPies = [
    { nombre: 'Pedicure Básico', descripcion: 'Limado, cutícula y esmaltado', precio: '$25' },
    { nombre: 'Pedicure Spa', descripcion: 'Con masaje y exfoliación', precio: '$35' },
    { nombre: 'Pedicure Gel', descripcion: 'Esmaltado de larga duración', precio: '$40' },
    { nombre: 'Tratamiento de Callos', descripcion: 'Eliminación profesional', precio: '+$15' }
  ]

  const paquetes = [
    { nombre: 'Combo Manicure + Pedicure', precio: '$40' },
    { nombre: 'Combo Gel Completo', precio: '$65' },
    { nombre: 'Spa Manos y Pies', precio: '$55' }
  ]

  return (
    <div className="service-detail">
      <div className="service-hero">
        <div className="container">
          <Link to="/#servicios" className="back-link">← Volver a Servicios</Link>
          <h1>Manicure & Pedicure</h1>
          <p className="subtitle">Cuidado profesional para manos y pies</p>
        </div>
      </div>

      <div className="container">
        <section className="service-section">
          <h2>Servicios de Manicure</h2>
          <div className="services-grid">
            {serviciosManos.map((servicio, index) => (
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
          <h2>Servicios de Pedicure</h2>
          <div className="services-grid">
            {serviciosPies.map((servicio, index) => (
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

        <section className="service-section extras">
          <h2>Paquetes Combinados</h2>
          <div className="extras-list">
            {paquetes.map((paquete, index) => (
              <div key={index} className="extra-item">
                <span className="extra-name">{paquete.nombre}</span>
                <span className="extra-price">{paquete.precio}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ManicureService
