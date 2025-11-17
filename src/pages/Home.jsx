import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    // Efecto 3D Tilt en cards
    const cards = document.querySelectorAll('[data-tilt]')

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = (y - centerY) / 10
        const rotateY = (centerX - x) / 10

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`

        // Glow effect tracking
        const glow = card.querySelector('.card-glow')
        if (glow) {
          glow.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`)
          glow.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`)
        }
      })

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)'
      })
    })

    // Parallax sutil en scroll
    const handleScroll = () => {
      const scrolled = window.scrollY
      const blobs = document.querySelectorAll('.blob')
      blobs.forEach((blob, index) => {
        const speed = 0.5 + (index * 0.2)
        blob.style.transform = `translate(${scrolled * speed * 0.1}px, ${scrolled * speed * 0.1}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)

    // Animación de reveal en scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('[data-reveal]')
    revealElements.forEach(el => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cards.forEach(card => {
        card.removeEventListener('mousemove', () => {})
        card.removeEventListener('mouseleave', () => {})
      })
    }
  }, [])

  return (
    <>
      {/* Hero Section - Glassmorphism con gradiente animado */}
      <section id="inicio" className="hero-modern">
        <div className="animated-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>

        <div className="hero-glass">
          <div className="hero-content-modern">
            <span className="hero-badge">Desde 1975</span>
            <h1 className="hero-title-modern">
              El Sol
              <span className="title-accent">Peluquería & Spa</span>
            </h1>
            <p className="hero-description">Donde tu belleza encuentra su mejor versión</p>

            <div className="hero-cta-group">
              <Link to="/reservas" className="btn-glass primary">
                <span>Reservar Cita</span>
                <div className="btn-shine"></div>
              </Link>
              <a href="#servicios" className="btn-glass secondary">
                Ver Servicios
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Servicios Section - Showcase Editorial */}
      <section id="servicios" className="servicios-showcase">
        <div className="showcase-header">
          <span className="showcase-label">Servicios</span>
          <h2 className="showcase-title">Lo que hacemos</h2>
        </div>

        <div className="showcase-list">
          <Link to="/servicios/corte" className="showcase-item">
            <span className="showcase-number">01</span>
            <div className="showcase-content">
              <h3 className="showcase-name">Corte de Cabello</h3>
              <p className="showcase-desc">Estilos únicos para cada personalidad</p>
            </div>
            <div className="showcase-arrow">
              <span className="arrow-line"></span>
            </div>
          </Link>

          <Link to="/servicios/spa" className="showcase-item">
            <span className="showcase-number">02</span>
            <div className="showcase-content">
              <h3 className="showcase-name">Tratamientos Spa</h3>
              <p className="showcase-desc">Relajación y renovación profunda</p>
            </div>
            <div className="showcase-arrow">
              <span className="arrow-line"></span>
            </div>
          </Link>

          <Link to="/servicios/manicure" className="showcase-item">
            <span className="showcase-number">03</span>
            <div className="showcase-content">
              <h3 className="showcase-name">Manicure & Pedicure</h3>
              <p className="showcase-desc">Manos y pies perfectos</p>
            </div>
            <div className="showcase-arrow">
              <span className="arrow-line"></span>
            </div>
          </Link>

          <Link to="/servicios/coloracion" className="showcase-item">
            <span className="showcase-number">04</span>
            <div className="showcase-content">
              <h3 className="showcase-name">Coloración</h3>
              <p className="showcase-desc">Arte y color en tu cabello</p>
            </div>
            <div className="showcase-arrow">
              <span className="arrow-line"></span>
            </div>
          </Link>
        </div>
      </section>

      {/* Contacto Section - Diseño fluido */}
      <section id="contacto" className="contacto-modern">
        <div className="container-modern">
          <div className="contacto-wrapper">
            <div className="contacto-header">
              <h2>Visítanos</h2>
              <p>Estamos aquí para ti</p>
            </div>

            <div className="contacto-cards">
              <div className="contact-card" data-reveal>
                <div className="contact-icon">📍</div>
                <h3>Ubicación</h3>
                <p>Dirección por definir</p>
              </div>

              <div className="contact-card" data-reveal>
                <div className="contact-icon">📱</div>
                <h3>Teléfono</h3>
                <p>Por definir</p>
              </div>

              <div className="contact-card" data-reveal>
                <div className="contact-icon">⏰</div>
                <h3>Horario</h3>
                <p>Lun-Sáb: 10am - 5pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
