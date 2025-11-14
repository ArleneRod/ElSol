import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import BookingPage from './pages/BookingPage.jsx'
import CorteService from './pages/CorteService.jsx'
import SpaService from './pages/SpaService.jsx'
import ManicureService from './pages/ManicureService.jsx'
import ColoracionService from './pages/ColoracionService.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="reservas" element={<BookingPage />} />
          <Route path="servicios/corte" element={<CorteService />} />
          <Route path="servicios/spa" element={<SpaService />} />
          <Route path="servicios/manicure" element={<ManicureService />} />
          <Route path="servicios/coloracion" element={<ColoracionService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
