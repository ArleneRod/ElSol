import { Link } from 'react-router-dom'
import './ServiceDetail.css'

function ColoracionService() {
  const tintesCompletos = [
    { nombre: 'Tinte de Raíces', descripcion: 'Retoque de crecimiento', precio: '$35' },
    { nombre: 'Tinte Completo', descripcion: 'Color uniforme en todo el cabello', precio: '$55' },
    { nombre: 'Tinte Premium', descripcion: 'Marcas de alta gama', precio: '$70' },
    { nombre: 'Baño de Color', descripcion: 'Tonalización suave y temporal', precio: '$40' }
  ]

  const mecanicas = [
    { nombre: 'Mechas Californianas', descripcion: 'Iluminación natural degradada', precio: '$80' },
    { nombre: 'Mechas Tradicionales', descripcion: 'Con gorro o papel aluminio', precio: '$65' },
    { nombre: 'Balayage', descripcion: 'Técnica de pincelado a mano', precio: '$95' },
    { nombre: 'Babylights', descripcion: 'Mechas finas y sutiles', precio: '$85' },
    { nombre: 'Ombré', descripcion: 'Degradado de color progresivo', precio: '$90' }
  ]

  const tratamientos = [
    { nombre: 'Decoloración', descripcion: 'Preparación para colores claros', precio: '$60' },
    { nombre: 'Corrección de Color', descripcion: 'Arreglo de coloraciones previas', precio: '$100+' },
    { nombre: 'Tonalización', descripcion: 'Matización de tonos no deseados', precio: '$35' },
    { nombre: 'Tratamiento Post-Color', descripcion: 'Hidratación profunda', precio: '+$20' }
  ]

  return (
    <div className="service-detail">
      <div className="service-hero">
        <div className="container">
          <Link to="/#servicios" className="back-link">← Volver a Servicios</Link>
          <h1>Coloración</h1>
          <p className="subtitle">Técnicas profesionales con productos premium</p>
        </div>
      </div>

      <div className="container">
        <section className="service-section">
          <h2>Tintes Completos</h2>
          <div className="services-grid">
            {tintesCompletos.map((servicio, index) => (
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
          <h2>Mechas y Técnicas Especiales</h2>
          <div className="services-grid">
            {mecanicas.map((servicio, index) => (
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
          <h2>Tratamientos de Color</h2>
          <div className="services-grid">
            {tratamientos.map((servicio, index) => (
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

        <div className="service-note">
          <p><strong>Nota:</strong> Los precios pueden variar según el largo y grosor del cabello. Consulta con nuestros estilistas para una cotización personalizada.</p>
        </div>
      </div>
    </div>
  )
}

export default ColoracionService
