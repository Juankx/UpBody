# UpBody - Tienda de Ropa Deportiva Femenina

Una tienda web moderna y profesional para ropa deportiva femenina, construida con React, Vite, TailwindCSS y Framer Motion.

## 🚀 Características

- **Diseño Mobile-First**: Totalmente responsivo para todos los dispositivos
- **Modo Oscuro/Claro**: Toggle automático con persistencia en localStorage
- **Animaciones Suaves**: Implementadas con Framer Motion
- **Catálogo Completo**: Con filtros por categoría y búsqueda
- **Páginas de Producto**: Detalles completos con galería de imágenes
- **Formulario de Contacto**: Con validación y envío simulado
- **Navegación Intuitiva**: Con breadcrumbs y enlaces contextuales
- **SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción rápida
- **TailwindCSS 3** - Framework de CSS utility-first
- **Framer Motion** - Biblioteca de animaciones
- **React Router** - Enrutamiento de la aplicación
- **Lucide React** - Iconos modernos y consistentes

## 📱 Páginas Implementadas

1. **Inicio** (`/`) - Hero section, productos destacados y características
2. **Catálogo** (`/catalogo`) - Lista de productos con filtros y búsqueda
3. **Detalle de Producto** (`/producto/:id`) - Información completa del producto
4. **Contacto** (`/contacto`) - Formulario de contacto y información de la empresa

## 🎨 Paleta de Colores

- **Primario**: Rosa/Fucsia (#ec4899)
- **Acento**: Azul (#0ea5e9)
- **Neutros**: Blanco, grises y negro
- **Soporte**: Verde, amarillo, rojo para estados y feedback

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd upbody-store
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la construcción
- `npm run lint` - Ejecutar linter (si está configurado)

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.jsx      # Navegación principal
│   ├── Hero.jsx        # Sección hero de la página de inicio
│   ├── ProductCard.jsx # Tarjeta de producto
│   ├── ProductFilters.jsx # Filtros del catálogo
│   ├── ProductGallery.jsx # Galería de imágenes del producto
│   ├── ContactForm.jsx # Formulario de contacto
│   └── Footer.jsx      # Pie de página
├── pages/              # Páginas de la aplicación
│   ├── Home.jsx        # Página de inicio
│   ├── Catalog.jsx     # Página del catálogo
│   ├── ProductDetail.jsx # Página de detalle del producto
│   └── Contact.jsx     # Página de contacto
├── contexts/           # Contextos de React
│   └── ThemeContext.jsx # Contexto del tema (claro/oscuro)
├── data/               # Datos estáticos
│   └── products.js     # Información de productos
├── App.jsx             # Componente principal
├── main.jsx            # Punto de entrada
└── index.css           # Estilos globales y Tailwind
```

## 🎯 Funcionalidades Principales

### Sistema de Temas
- Toggle automático entre modo claro y oscuro
- Persistencia de preferencia del usuario
- Detección automática de preferencia del sistema

### Catálogo de Productos
- Grid responsivo (2-4 columnas según dispositivo)
- Filtros por categoría
- Búsqueda por texto
- Ordenamiento por precio, nombre y destacados
- Vista de cuadrícula y lista

### Páginas de Producto
- Galería de imágenes con zoom y navegación
- Selección de tallas y colores
- Guía de tallas interactiva
- Productos relacionados
- Botones de acción (favoritos, compartir)

### Formulario de Contacto
- Validación en tiempo real
- Campos: nombre, email, asunto, mensaje
- Simulación de envío
- Información de contacto y redes sociales

## 🔧 Personalización

### Colores
Los colores se pueden personalizar editando `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#ec4899', // Color principal
    // ... otros tonos
  },
  accent: {
    500: '#0ea5e9', // Color de acento
    // ... otros tonos
  }
}
```

### Productos
Los productos se pueden modificar en `src/data/products.js`:

```javascript
export const products = [
  {
    id: 1,
    name: "Nombre del Producto",
    price: 89.99,
    category: "Categoría",
    description: "Descripción del producto",
    features: ["Característica 1", "Característica 2"],
    images: ["url-imagen-1", "url-imagen-2"],
    tag: "Bestseller"
  }
  // ... más productos
];
```

## 📱 Responsividad

La aplicación está diseñada con un enfoque mobile-first:

- **Móvil**: 1 columna de productos, navegación colapsable
- **Tablet**: 2-3 columnas de productos
- **Desktop**: 4 columnas de productos, navegación completa

## 🌐 Navegación

- **React Router** para enrutamiento del lado del cliente
- **Breadcrumbs** para navegación contextual
- **Enlaces SEO-friendly** con parámetros de URL
- **Navegación con teclado** accesible

## 🎨 Animaciones

- **Framer Motion** para transiciones suaves
- **Animaciones de entrada** para componentes
- **Hover effects** en tarjetas y botones
- **Transiciones de página** fluidas

## 🔮 Próximas Funcionalidades

- [ ] Carrito de compras
- [ ] Sistema de usuarios y autenticación
- [ ] Wishlist persistente
- [ ] Filtros avanzados (precio, talla, color)
- [ ] Sistema de reseñas y calificaciones
- [ ] Integración con pasarela de pagos
- [ ] Panel de administración
- [ ] Sistema de notificaciones push

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o preguntas sobre el proyecto:

- Email: info@upbody.com
- GitHub Issues: [Crear un issue](https://github.com/tu-usuario/upbody-store/issues)

## 🙏 Agradecimientos

- [Unsplash](https://unsplash.com/) por las imágenes de productos
- [Lucide](https://lucide.dev/) por los iconos
- [TailwindCSS](https://tailwindcss.com/) por el framework de CSS
- [Framer Motion](https://www.framer.com/motion/) por las animaciones

---

**UpBody** - Ropa deportiva para mujeres que inspiran 💪✨
