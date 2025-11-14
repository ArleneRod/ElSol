import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Header único con navegación a la izquierda */}
      <header className={`header-modern ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* Navegación a la izquierda */}
          <nav className="nav-modern">
            <Link
              to="/"
              className={`nav-button ${location.pathname === '/' ? 'active' : ''}`}
            >
              <span className="nav-icon">🏠</span>
              <span className="nav-text">Inicio</span>
              <div className="nav-indicator"></div>
            </Link>

            <a
              href="/#servicios"
              className="nav-button"
            >
              <span className="nav-icon">✂</span>
              <span className="nav-text">Servicios</span>
              <div className="nav-indicator"></div>
            </a>

            <Link
              to="/reservas"
              className={`nav-button ${location.pathname === '/reservas' ? 'active' : ''}`}
            >
              <span className="nav-icon">📅</span>
              <span className="nav-text">Reservas</span>
              <div className="nav-indicator"></div>
            </Link>

            <a
              href="/#contacto"
              className="nav-button"
            >
              <span className="nav-icon">📍</span>
              <span className="nav-text">Contacto</span>
              <div className="nav-indicator"></div>
            </a>
          </nav>

          {/* Logo centrado */}
          <Link to="/" className="logo-modern">
            <div className="logo-icon">☀</div>
            <div className="logo-name">El Sol</div>
          </Link>

          {/* CTA a la derecha */}
          <div className="header-cta">
            <Link to="/reservas" className="btn-cta-modern">
              Agendar
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-ornament">✤ ✦ ✤</div>
        <div className="container">
          <p>El Sol Peluquería & Spa</p>
          <p className="footer-year">Desde 1975</p>
        </div>
        <div className="footer-ornament">✤ ✦ ✤</div>
      </footer>
    </div>
  )
}

export default App
