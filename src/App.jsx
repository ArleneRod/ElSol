import { Outlet, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Decorative Border Top */}
      <div className="vintage-border-top"></div>

      {/* Header/Navbar */}
      <header className="header">
        <div className="container">
          <Link to="/" className="logo-section-link">
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
          </Link>
          <nav className="nav">
            <Link to="/">Inicio</Link>
            <span className="nav-dot">•</span>
            <a href="/#servicios">Servicios</a>
            <span className="nav-dot">•</span>
            <a href="/#contacto">Contacto</a>
            <Link to="/reservas" className="btn-cita">Reservar</Link>
          </nav>
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

      {/* Decorative Border Bottom */}
      <div className="vintage-border-bottom"></div>
    </div>
  )
}

export default App
