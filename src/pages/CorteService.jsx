import { Link } from 'react-router-dom'
import './ServiceDetail.css'

function CorteService() {
  const serviciosMujeres = [
    { nombre: 'Corte Recto', descripcion: 'Corte clásico con líneas rectas', precio: '$25' },
    { nombre: 'Corte en Capas', descripcion: 'Estilo con volumen y movimiento', precio: '$30' },
    { nombre: 'Corte Bob', descripcion: 'Corte a la altura del mentón', precio: '$30' },
    { nombre: 'Corte Pixie', descripcion: 'Corte corto y moderno', precio: '$28' },
    { nombre: 'Corte Mariposa', descripcion: 'Capas suaves con volumen en los extremos', precio: '$35' },
    { nombre: 'Corte Desvanecido', descripcion: 'Degradado suave y natural', precio: '$32' }
  ]

  const serviciosHombres = [
    { nombre: 'Corte Clásico', descripcion: 'Estilo tradicional y limpio', precio: '$18' },
    { nombre: 'Fade', descripcion: 'Degradado bajo, medio o alto', precio: '$20' },
    { nombre: 'Undercut', descripcion: 'Corte moderno con contraste', precio: '$22' },
    { nombre: 'Corte a Tijera', descripcion: 'Técnica clásica profesional', precio: '$20' },
    { nombre: 'Rapado', descripcion: 'Corte completo al ras', precio: '$15' },
    { nombre: 'Arreglo de Barba', descripcion: 'Perfilado y recorte', precio: '$12' }
  ]

  const paquetes = [
    { nombre: 'Corte + Lavado', precio: '+$8' },
    { nombre: 'Corte + Barba', precio: '+$10' },
    { nombre: 'Tratamiento Capilar', precio: '+$15' }
  ]

  return (
    <div className="service-detail">
      <div className="service-hero">
        <div className="container">
          <Link to="/#servicios" className="back-link">← Volver a Servicios</Link>
          <h1>Corte de Cabello</h1>
          <p className="subtitle">Cortes profesionales adaptados a tu estilo personal</p>
        </div>
      </div>

      <div className="container">
        <section className="service-section">
          <h2>Servicios para Mujeres</h2>
          <div className="services-grid">
            {serviciosMujeres.map((servicio, index) => (
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
          <h2>Servicios para Hombres</h2>
          <div className="services-grid">
            {serviciosHombres.map((servicio, index) => (
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
          <h2>Servicios Adicionales</h2>
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

export default CorteService
