# 📦 Deo SA - Sitio Web de Cajas de Cartón Personalizadas

![Deo SA Website](https://images.pexels.com/photos/6169057/pexels-photo-6169057.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)

## 🚀 Descripción del Proyecto

**Deo SA** es un sitio web profesional B2B diseñado para una empresa argentina especializada en la fabricación de cajas de cartón personalizadas. El sitio está optimizado para generar leads de empresas manufactureras que necesitan packaging personalizado.

### ✨ Características Principales

- 🎨 **Diseño Profesional B2B** con paleta de colores marrones/beiges/blancos
- 📱 **Totalmente Responsivo** - funciona en móvil, tablet y desktop
- 🇦🇷 **Contenido en Español Argentino** optimizado para el mercado local
- 📋 **Formulario de Cotización** integrado para captura de leads
- ⚡ **Animaciones Suaves** y micro-interacciones profesionales
- 🏭 **Enfoque Industrial** dirigido a empresas manufactureras
- 📦 **Servicios Destacados**: Cajas personalizadas, muestras gratuitas, impresión de logos

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 19.0.0 | Framework frontend principal |
| **TailwindCSS** | 3.4.17 | Framework de estilos |
| **React Router** | 7.0.2 | Navegación SPA |
| **Axios** | 1.7.9 | Cliente HTTP |
| **Node.js** | 18+ | Entorno de ejecución |
| **Yarn** | Latest | Gestor de paquetes |

---

## 📁 Estructura del Proyecto

```
/app/
├── frontend/                    # 🎨 Aplicación React
│   ├── public/                  # 📁 Archivos estáticos
│   │   ├── index.html          # 📄 HTML principal
│   │   └── favicon.ico         # 🖼️ Icono del sitio
│   ├── src/                    # 💻 Código fuente
│   │   ├── App.js              # 🏠 Componente principal (PÁGINA COMPLETA)
│   │   ├── App.css             # 🎨 Estilos personalizados
│   │   ├── index.js            # ⚡ Punto de entrada React
│   │   └── index.css           # 🎨 Estilos globales + TailwindCSS
│   ├── package.json            # 📦 Dependencias y scripts
│   ├── tailwind.config.js      # ⚙️ Configuración TailwindCSS
│   ├── postcss.config.js       # ⚙️ Configuración PostCSS
│   └── .env                    # 🔐 Variables de entorno
├── backend/                    # 🔧 API Backend (opcional)
├── tests/                      # 🧪 Pruebas automatizadas
└── README.md                   # 📖 Este archivo
```

---

## 🚀 Instalación y Ejecución

### Opción 1: Ejecutar Localmente

#### Prerrequisitos
- **Node.js 18+** ([Descargar aquí](https://nodejs.org/))
- **Yarn** (`npm install -g yarn`)
- **Git** ([Descargar aquí](https://git-scm.com/))

#### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/deo-sa-website.git
   cd deo-sa-website
   ```

2. **Instalar dependencias**
   ```bash
   cd frontend
   yarn install
   ```

3. **Configurar variables de entorno**
   ```bash
   # El archivo .env ya está configurado, pero puedes verificar:
   cat .env
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   yarn start
   ```

5. **Abrir en el navegador**
   - Visita: `http://localhost:3000`

#### Scripts Disponibles

```bash
yarn start          # 🚀 Ejecutar en modo desarrollo
yarn build          # 📦 Construir para producción
yarn test           # 🧪 Ejecutar pruebas
yarn eject          # ⚠️ Exponer configuración (irreversible)
```

### Opción 2: Desplegar en GitHub Pages

1. **Fork este repositorio** en tu cuenta de GitHub

2. **Configurar GitHub Pages**
   - Ve a Settings → Pages
   - Selecciona "GitHub Actions" como fuente

3. **Crear workflow de deploy** (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             
         - name: Install dependencies
           run: |
             cd frontend
             yarn install
             
         - name: Build
           run: |
             cd frontend
             yarn build
             
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./frontend/build
   ```

---

## 🎨 Personalización del Sitio Web

### 📝 Cambiar Información de la Empresa

**Archivo:** `/app/frontend/src/App.js`

#### 1. Datos de la Empresa (Líneas 300-350)
```javascript
// Buscar esta sección en App.js:
<h1 className="text-2xl font-bold text-brown-800">Deo SA</h1>
<span className="ml-2 text-sm text-brown-600">Cajas de Cartón</span>

// Cambiar por:
<h1 className="text-2xl font-bold text-brown-800">TU EMPRESA</h1>
<span className="ml-2 text-sm text-brown-600">Tu Descripción</span>
```

#### 2. Información de Contacto (Líneas 800-850)
```javascript
// Buscar en el footer:
<p className="flex items-center">
  <svg>...</svg>
  +54 11 xxxx-xxxx    // ← Cambiar teléfono
</p>
<p className="flex items-center">
  <svg>...</svg>
  info@deosa.com.ar   // ← Cambiar email
</p>
<p className="flex items-start">
  <svg>...</svg>
  Buenos Aires, Argentina  // ← Cambiar dirección
</p>
```

#### 3. Textos Principales (Líneas 100-200)
```javascript
// Hero Section - Cambiar título principal:
<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
  Cajas de Cartón           // ← Cambiar título
  <span className="block text-beige-200">Personalizadas</span>
  <span className="block text-3xl md:text-4xl font-normal mt-2">para Tu Empresa</span>
</h1>

// Cambiar descripción:
<p className="text-xl md:text-2xl mb-8 text-beige-100 max-w-2xl mx-auto leading-relaxed">
  Desde muestras gratuitas hasta producciones de 1000+ unidades...  // ← Cambiar descripción
</p>
```

### 🖼️ Cambiar Imágenes

**Archivo:** `/app/frontend/src/App.js`

#### Imágenes Actuales y Cómo Cambiarlas

1. **Imagen Hero (Fondo Principal)**
   ```javascript
   // Línea ~90 - Buscar:
   backgroundImage: `url('https://images.pexels.com/photos/6169057/pexels-photo-6169057.jpeg')`
   
   // Cambiar por tu imagen:
   backgroundImage: `url('TU_NUEVA_IMAGEN_URL')`
   ```

2. **Imagen del Proceso**
   ```javascript
   // Línea ~520 - Buscar:
   src="https://images.unsplash.com/photo-1600725935160-f67ee4f6084a..."
   
   // Cambiar por:
   src="TU_NUEVA_IMAGEN_URL"
   ```

#### 📌 **Dónde Conseguir Imágenes Gratuitas:**
- [Unsplash](https://unsplash.com/) - Fotos profesionales gratuitas
- [Pexels](https://pexels.com/) - Stock de fotos de alta calidad
- [Freepik](https://freepik.com/) - Ilustraciones y fotos

#### 🎯 **Recomendaciones para Imágenes:**
- **Hero:** 1920x1080px mínimo
- **Secciones:** 800x600px mínimo
- **Formato:** JPG o WebP para mejor rendimiento
- **Peso:** Máximo 500KB por imagen

### 🎨 Cambiar Colores

**Archivo:** `/app/frontend/src/App.css`

#### Paleta de Colores Actual (Líneas 3-20)
```css
:root {
  --brown-700: #6b5d2f;     /* Color principal */
  --brown-800: #4a3728;     /* Color secundario */
  --beige-500: #d4a574;     /* Color de botones */
  --cream: #faf8f3;         /* Color de fondo */
}
```

#### Para Cambiar la Paleta Completa:
1. Genera nuevos colores en [Coolors.co](https://coolors.co/)
2. Reemplaza las variables CSS
3. Mantén la misma estructura de nombres

### 📧 Configurar Formulario de Contacto

**Archivo:** `/app/frontend/src/App.js` (Líneas 20-40)

#### Conectar con un Servicio de Email:

1. **EmailJS** (Recomendado para principiantes)
   ```bash
   # Instalar EmailJS
   cd frontend
   yarn add @emailjs/browser
   ```

2. **Modificar función handleSubmit:**
   ```javascript
   import emailjs from '@emailjs/browser';
   
   const handleSubmit = (e) => {
     e.preventDefault();
     
     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
       .then(() => {
         alert('¡Cotización enviada exitosamente!');
         // Reset form...
       })
       .catch(() => {
         alert('Error al enviar. Intenta nuevamente.');
       });
   };
   ```

---

## ⚙️ Configuraciones Técnicas

### Variables de Entorno

**Archivo:** `/app/frontend/.env`

```bash
WDS_SOCKET_PORT=443                                    # Puerto WebSocket
REACT_APP_BACKEND_URL=https://tu-backend-url.com      # URL del backend (opcional)
```

### Configuración de TailwindCSS

**Archivo:** `/app/frontend/tailwind.config.js`

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Archivos a procesar
  ],
  theme: {
    extend: {
      // Personalizaciones adicionales aquí
    },
  },
  plugins: [],
}
```

---

## 🔧 Guía para Principiantes

### 1. Primeros Pasos (Sin Experiencia Previa)

#### ¿Qué necesitas instalar?
1. **Visual Studio Code** (Editor de código) - [Descargar](https://code.visualstudio.com/)
2. **Node.js** (Motor JavaScript) - [Descargar](https://nodejs.org/)
3. **Git** (Control de versiones) - [Descargar](https://git-scm.com/)

#### Pasos Simples:
1. Descarga e instala los programas de arriba
2. Abre la terminal/cmd
3. Ejecuta: `git clone [URL-DEL-REPOSITORIO]`
4. Ejecuta: `cd deo-sa-website/frontend`
5. Ejecuta: `npm install` (instala dependencias)
6. Ejecuta: `npm start` (inicia el sitio web)
7. Abre tu navegador en `http://localhost:3000`

### 2. Cambios Rápidos (Para No Programadores)

#### Cambiar Textos:
- Abre el archivo `/frontend/src/App.js`
- Busca el texto que quieres cambiar (Ctrl+F)
- Cámbialo por tu nuevo texto
- Guarda el archivo (Ctrl+S)

#### Cambiar Imágenes:
- Encuentra las URLs de imágenes en `App.js`
- Reemplázalas por nuevas URLs de imágenes
- Asegúrate de que las nuevas imágenes sean públicas

#### Cambiar Colores:
- Abre `/frontend/src/App.css`
- Modifica las variables de color al inicio del archivo
- Los cambios se aplicarán automáticamente

---

## 🚨 Solución de Problemas Comunes

### Error: "Module not found"
```bash
# Solución:
cd frontend
rm -rf node_modules package-lock.json
yarn install
```

### Error: "Port 3000 is already in use"
```bash
# Solución:
# Cambiar puerto en package.json:
"start": "PORT=3001 react-scripts start"
```

### Las imágenes no cargan
- Verifica que las URLs sean válidas
- Comprueba que las imágenes sean públicas
- Usa URLs HTTPS (no HTTP)

### El formulario no envía emails
- Configura EmailJS siguiendo la guía anterior
- Verifica las credenciales del servicio de email
- Revisa la consola del navegador para errores

---

## 📊 Métricas y Rendimiento

### Optimizaciones Implementadas:
- ✅ **Lazy Loading** de imágenes
- ✅ **Compresión automática** de CSS y JS
- ✅ **Responsive Images** para diferentes dispositivos
- ✅ **Minificación** de código en producción
- ✅ **Caching** de assets estáticos

### Herramientas de Análisis:
- **Google Lighthouse** - Auditoría de rendimiento
- **Google Analytics** - Estadísticas de usuarios
- **Hotjar** - Mapas de calor y grabaciones

---

## 🤝 Contribuir al Proyecto

### Para Desarrolladores:

1. **Fork** del repositorio
2. **Crear branch**: `git checkout -b feature/nueva-funcionalidad`
3. **Commit**: `git commit -m 'Agregar nueva funcionalidad'`
4. **Push**: `git push origin feature/nueva-funcionalidad`
5. **Pull Request** con descripción detallada

### Estándares de Código:
- Usar **camelCase** para variables JavaScript
- Usar **kebab-case** para clases CSS
- Comentar código complejo
- Mantener componentes pequeños y reutilizables

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

---

## 📞 Soporte y Contacto

### 🆘 ¿Necesitas Ayuda?

1. **Revisa la sección de problemas comunes** arriba
2. **Busca en Issues** del repositorio de GitHub
3. **Crea un nuevo Issue** con descripción detallada del problema

### 📧 Contacto Directo:
- **Email**: soporte@deosa.com.ar
- **GitHub**: [@tu-usuario](https://github.com/tu-usuario)
- **LinkedIn**: [Tu Perfil](https://linkedin.com/in/tu-perfil)

---

## 🎯 Próximas Funcionalidades

- [ ] 🌐 Modo multiidioma (Inglés/Español)
- [ ] 📱 App móvil con React Native
- [ ] 🛒 Sistema de e-commerce integrado
- [ ] 📊 Dashboard de administración
- [ ] 🔐 Sistema de autenticación
- [ ] 💳 Integración con pasarelas de pago
- [ ] 📈 Analytics avanzados
- [ ] 🤖 Chatbot de soporte

---

**¡Gracias por usar Deo SA Website! 🚀**

> **Tip**: ⭐ Si este proyecto te resultó útil, considera darle una estrella en GitHub
