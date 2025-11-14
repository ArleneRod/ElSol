# El Sol - Peluquería & Spa

## Descripción del Proyecto
Página web para la peluquería y spa "El Sol" con sistema de reserva de citas online.

## Tecnologías
- **Frontend**: React 18
- **Build Tool**: Vite
- **Lenguaje**: JavaScript (JSX)
- **Estilos**: CSS puro

## Estructura del Proyecto
```
ElSol/
├── src/
│   ├── main.jsx          # Punto de entrada de React
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos del componente principal
│   └── index.css         # Estilos globales
├── index.html            # HTML base
├── vite.config.js        # Configuración de Vite
└── package.json          # Dependencias del proyecto
```

## Comandos Disponibles

### Instalar dependencias
```bash
npm install
```

### Modo desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en `http://localhost:5173`

### Build para producción
```bash
npm run build
```
Genera los archivos optimizados en la carpeta `dist/`

### Preview del build
```bash
npm run preview
```
Previsualiza la versión de producción

## Acceso desde la Web

### Opción 1: Desarrollo Local
1. Ejecuta `npm run dev`
2. Accede a `http://localhost:5173` desde tu navegador

### Opción 2: Red Local
1. Ejecuta `npm run dev`
2. Busca la URL que muestra "Network: http://192.168.x.x:5173"
3. Accede desde cualquier dispositivo en la misma red

### Opción 3: Deploy en Producción (Futuro)
Opciones recomendadas:
- **Vercel**: Gratis para proyectos personales
- **Netlify**: Gratis con CI/CD automático
- **GitHub Pages**: Gratis para repos públicos

## Secciones Actuales

### 1. Header/Navegación
- Logo "El Sol"
- Menú de navegación (Inicio, Servicios, Galería, Contacto)
- Botón destacado para reservar cita

### 2. Hero Section
- Banner principal con llamada a la acción
- Botón para agendar cita

### 3. Servicios
Grid con 4 servicios básicos:
- ✂️ Corte de Cabello
- 💆 Tratamientos Spa
- 💅 Manicure & Pedicure
- 🎨 Coloración

### 4. Contacto
Información de contacto (por completar con datos reales):
- Dirección
- Teléfono
- Horario

### 5. Footer
- Copyright y derechos reservados

## Próximas Funcionalidades

### Sistema de Citas (Próximamente)
- Formulario de reserva
- Calendario interactivo
- Selección de servicios
- Confirmación por email/SMS

### Mejoras Planificadas
- [ ] Galería de imágenes
- [ ] Testimonios de clientes
- [ ] Precios de servicios
- [ ] Integración con redes sociales
- [ ] Sistema de autenticación
- [ ] Panel de administración
- [ ] Base de datos para citas

## Paleta de Colores
- **Primario**: #f39c12 (Naranja/Dorado)
- **Secundario**: #e67e22 (Naranja oscuro)
- **Oscuro**: #2c3e50 (Azul oscuro)
- **Claro**: #ecf0f1 (Gris claro)
- **Blanco**: #ffffff

## Responsive Design
La página está optimizada para:
- 📱 Móviles (< 768px)
- 💻 Tablets y Desktop (> 768px)

## Notas de Desarrollo
- El proyecto está configurado para aceptar conexiones desde cualquier dispositivo en la red local
- Los estilos están separados en `index.css` (global) y `App.css` (componente)
- Se usa scroll suave para la navegación entre secciones
- Diseño mobile-first con media queries

## Contacto del Desarrollo
Para trabajar en este proyecto desde Claude Web, simplemente comparte esta carpeta y podrás editar todos los archivos.

---

**Última actualización**: Noviembre 2024
**Estado**: En desarrollo - Versión básica completada