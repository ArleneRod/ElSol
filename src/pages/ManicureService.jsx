import { Link } from 'react-router-dom'
import { useState } from 'react'
import './ServiceDetail.css'

function ManicureService() {
  const [selectedPackage, setSelectedPackage] = useState(null)

  const serviciosManos = [
    { nombre: 'Manicure Básico', descripcion: 'Limado, cutícula y esmaltado', precio: '$20', duracion: '30min' },
    { nombre: 'Manicure Spa', descripcion: 'Incluye exfoliación e hidratación', precio: '$30', duracion: '45min' },
    { nombre: 'Manicure Gel', descripcion: 'Esmaltado de larga duración', precio: '$35', duracion: '50min' },
    { nombre: 'Uñas Acrílicas', descripcion: 'Set completo de acrílico', precio: '$45', duracion: '60min' },
    { nombre: 'Diseño de Uñas', descripcion: 'Arte en uñas personalizado', precio: '+$10', duracion: '15min' }
  ]

  const serviciosPies = [
    { nombre: 'Pedicure Básico', descripcion: 'Limado, cutícula y esmaltado', precio: '$25', duracion: '35min' },
    { nombre: 'Pedicure Spa', descripcion: 'Con masaje y exfoliación', precio: '$35', duracion: '50min' },
    { nombre: 'Pedicure Gel', descripcion: 'Esmaltado de larga duración', precio: '$40', duracion: '55min' },
    { nombre: 'Tratamiento de Callos', descripcion: 'Eliminación profesional', precio: '+$15', duracion: '20min' }
  ]

  const paquetes = [
    {
      id: 1,
      nombre: 'Combo Clásico',
      descripcion: 'Manicure + Pedicure básico',
      precio: '$40',
      ahorro: '$5',
      servicios: ['Manicure Básico', 'Pedicure Básico'],
      popular: false
    },
    {
      id: 2,
      nombre: 'Combo Gel Premium',
      descripcion: 'Gel completo en manos y pies',
      precio: '$65',
      ahorro: '$10',
      servicios: ['Manicure Gel', 'Pedicure Gel'],
      popular: true
    },
    {
      id: 3,
      nombre: 'Experiencia Spa',
      descripcion: 'Tratamiento completo de lujo',
      precio: '$55',
      ahorro: '$10',
      servicios: ['Manicure Spa', 'Pedicure Spa'],
      popular: false
    }
  ]

  return (
    <div className="service-detail-modern">
      <div className="service-hero-modern">
        <div className="container">
          <Link to="/#servicios" className="back-link-modern">
            <span>←</span> Volver
          </Link>
          <h1>Manicure & Pedicure</h1>
          <p className="subtitle">Cuidado profesional para manos y pies impecables</p>
        </div>
      </div>

      <div className="service-layout">
        {/* Paquetes Interactivos a la Izquierda */}
        <aside className="packages-sidebar">
          <div className="sidebar-sticky">
            <h3>Paquetes Especiales</h3>
            <p className="sidebar-subtitle">Ahorra con nuestros combos</p>

            <div className="packages-interactive">
              {paquetes.map((paquete) => (
                <div
                  key={paquete.id}
                  className={`package-card-interactive ${
                    selectedPackage === paquete.id ? 'selected' : ''
                  } ${paquete.popular ? 'popular' : ''}`}
                  onClick={() => setSelectedPackage(
                    selectedPackage === paquete.id ? null : paquete.id
                  )}
                >
                  {paquete.popular && (
                    <div className="popular-badge">Más Popular</div>
                  )}

                  <div className="package-header">
                    <h4>{paquete.nombre}</h4>
                    <div className="package-price">
                      {paquete.precio}
                      <span className="save-badge">Ahorra {paquete.ahorro}</span>
                    </div>
                  </div>

                  <p className="package-desc">{paquete.descripcion}</p>

                  <div className={`package-details ${
                    selectedPackage === paquete.id ? 'expanded' : ''
                  }`}>
                    <ul>
                      {paquete.servicios.map((servicio, i) => (
                        <li key={i}>✓ {servicio}</li>
                      ))}
                    </ul>
                    <Link to="/reservas" className="btn-package-reserve">
                      Reservar Paquete
                    </Link>
                  </div>

                  <div className="expand-indicator">
                    {selectedPackage === paquete.id ? '−' : '+'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Servicios a la Derecha */}
        <div className="services-main-content">
          <section className="service-section-modern">
            <h2>Servicios de Manicure</h2>
            <div className="services-grid-modern">
              {serviciosManos.map((servicio, index) => (
                <div key={index} className="service-item-modern">
                  <div className="service-item-header">
                    <h3>{servicio.nombre}</h3>
                    <span className="service-duration">{servicio.duracion}</span>
                  </div>
                  <p className="service-desc">{servicio.descripcion}</p>
                  <div className="service-footer">
                    <span className="service-price">{servicio.precio}</span>
                    <Link to="/reservas" className="btn-reserve-modern">
                      Reservar →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="service-section-modern">
            <h2>Servicios de Pedicure</h2>
            <div className="services-grid-modern">
              {serviciosPies.map((servicio, index) => (
                <div key={index} className="service-item-modern">
                  <div className="service-item-header">
                    <h3>{servicio.nombre}</h3>
                    <span className="service-duration">{servicio.duracion}</span>
                  </div>
                  <p className="service-desc">{servicio.descripcion}</p>
                  <div className="service-footer">
                    <span className="service-price">{servicio.precio}</span>
                    <Link to="/reservas" className="btn-reserve-modern">
                      Reservar →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ManicureService
