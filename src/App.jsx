import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Decorative Border Top */}
      <div className="vintage-border-top"></div>

      {/* Header/Navbar */}
      <header className="header">
        <div className="container">
          <div className="logo-section">
            <div className="sun-decoration">
              <div className="sun-rays"></div>
              <div className="sun-circle">☀</div>
            </div>
            <div className="logo-text">
              <h1>El Sol</h1>
              <div className="ornament">✦ ✦ ✦</div>
              <p className="tagline">Peluquería & Spa</p>
            </div>
          </div>
          <nav className="nav">
            <a href="#inicio">Inicio</a>
            <span className="nav-dot">•</span>
            <a href="#servicios">Servicios</a>
            <span className="nav-dot">•</span>
            <a href="#contacto">Contacto</a>
            <a href="#citas" className="btn-cita">Reservar</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-frame">
          <div className="corner-ornament top-left">✤</div>
          <div className="corner-ornament top-right">✤</div>
          <div className="hero-content">
            <h2 className="hero-title">Bienvenidos</h2>
            <div className="title-underline"></div>
            <p className="hero-subtitle">Donde tu belleza florece desde 1975</p>
            <p className="hero-text">Tradición, elegancia y el arte de realzar tu belleza natural</p>
            <button className="btn-primary">
              <span>Agenda tu Cita</span>
              <div className="btn-border"></div>
            </button>
          </div>
          <div className="corner-ornament bottom-left">✤</div>
          <div className="corner-ornament bottom-right">✤</div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="servicios">
        <div className="container">
          <div className="section-header">
            <div className="header-decoration left">────</div>
            <h2>Nuestros Servicios</h2>
            <div className="header-decoration right">────</div>
          </div>

          <div className="servicios-vintage">
            <div className="servicio-card vintage-card-1">
              <div className="card-border"></div>
              <div className="servicio-icon">✂</div>
              <h3>Corte de Cabello</h3>
              <div className="divider">⁕</div>
              <p>Cortes clásicos y contemporáneos adaptados a tu personalidad</p>
              <div className="card-corner tl"></div>
              <div className="card-corner tr"></div>
              <div className="card-corner bl"></div>
              <div className="card-corner br"></div>
            </div>

            <div className="servicio-card vintage-card-2">
              <div className="card-border"></div>
              <div className="servicio-icon">✾</div>
              <h3>Tratamientos Spa</h3>
              <div className="divider">⁕</div>
              <p>Experiencias relajantes que renuevan cuerpo y mente</p>
              <div className="card-corner tl"></div>
              <div className="card-corner tr"></div>
              <div className="card-corner bl"></div>
              <div className="card-corner br"></div>
            </div>

            <div className="servicio-card vintage-card-3">
              <div className="card-border"></div>
              <div className="servicio-icon">✿</div>
              <h3>Manicure & Pedicure</h3>
              <div className="divider">⁕</div>
              <p>Cuidado refinado para manos y pies impecables</p>
              <div className="card-corner tl"></div>
              <div className="card-corner tr"></div>
              <div className="card-corner bl"></div>
              <div className="card-corner br"></div>
            </div>

            <div className="servicio-card vintage-card-4">
              <div className="card-border"></div>
              <div className="servicio-icon">❋</div>
              <h3>Coloración</h3>
              <div className="divider">⁕</div>
              <p>Técnicas artísticas con productos premium de salón</p>
              <div className="card-corner tl"></div>
              <div className="card-corner tr"></div>
              <div className="card-corner bl"></div>
              <div className="card-corner br"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="contacto">
        <div className="container">
          <div className="contacto-frame">
            <h2>Visítanos</h2>
            <div className="frame-line"></div>
            <div className="contacto-info">
              <div className="info-box">
                <div className="info-icon">✦</div>
                <h3>Ubicación</h3>
                <p>Dirección por definir</p>
              </div>
              <div className="info-box">
                <div className="info-icon">✦</div>
                <h3>Teléfono</h3>
                <p>Por definir</p>
              </div>
              <div className="info-box">
                <div className="info-icon">✦</div>
                <h3>Horario</h3>
                <p>Por definir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-ornament">✤ ✦ ✤</div>
        <div className="container">
          <p>El Sol Peluquería & Spa</p>
          <p className="footer-year">Desde 1975</p>
        </div>
        <div className="footer-ornament">✤ ✦ ✤</div>
      </footer>

      {/* Decorative Border Bottom */}
      <div className="vintage-border-bottom"></div>
    </div>
  )
}

export default App