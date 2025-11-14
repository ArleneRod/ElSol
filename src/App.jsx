import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header/Navbar */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>☀️ El Sol</h1>
            <p className="tagline">Peluquería & Spa</p>
          </div>
          <nav className="nav">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#galeria">Galería</a>
            <a href="#contacto">Contacto</a>
            <a href="#citas" className="btn-cita">Reservar Cita</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h2>Bienvenidos a El Sol</h2>
          <p>Tu belleza es nuestro arte</p>
          <button className="btn-primary">Agenda tu Cita</button>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="servicios">
        <div className="container">
          <h2>Nuestros Servicios</h2>
          <div className="servicios-grid">
            <div className="servicio-card">
              <div className="servicio-icon">✂️</div>
              <h3>Corte de Cabello</h3>
              <p>Cortes modernos y clásicos para todos los estilos</p>
            </div>
            <div className="servicio-card">
              <div className="servicio-icon">💆</div>
              <h3>Tratamientos Spa</h3>
              <p>Tratamientos faciales y corporales relajantes</p>
            </div>
            <div className="servicio-card">
              <div className="servicio-icon">💅</div>
              <h3>Manicure & Pedicure</h3>
              <p>Cuidado profesional de manos y pies</p>
            </div>
            <div className="servicio-card">
              <div className="servicio-icon">🎨</div>
              <h3>Coloración</h3>
              <p>Tintes y mechas con productos de calidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="contacto">
        <div className="container">
          <h2>Contáctanos</h2>
          <div className="contacto-info">
            <div className="info-item">
              <span className="icon">📍</span>
              <p>Dirección por definir</p>
            </div>
            <div className="info-item">
              <span className="icon">📞</span>
              <p>Teléfono por definir</p>
            </div>
            <div className="info-item">
              <span className="icon">⏰</span>
              <p>Horario por definir</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 El Sol Peluquería & Spa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App