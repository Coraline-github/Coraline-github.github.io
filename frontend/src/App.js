import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    empresa: '',
    contacto: '',
    email: '',
    telefono: '',
    producto: '',
    dimensiones: '',
    cantidad: '',
    impresion: '',
    logoColors: '',
    mensaje: ''
  });

  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Cotización solicitada:', formData);
    alert('¡Gracias! Nos pondremos en contacto contigo en las próximas 24 horas.');
    // Reset form
    setFormData({
      empresa: '',
      contacto: '',
      email: '',
      telefono: '',
      producto: '',
      dimensiones: '',
      cantidad: '',
      impresion: '',
      logoColors: '',
      mensaje: ''
    });
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-brown-800">Deo SA</h1>
              <span className="ml-2 text-sm text-brown-600">Cajas de Cartón</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#servicios" className="text-brown-700 hover:text-brown-900 transition-colors">Servicios</a>
              <a href="#proceso" className="text-brown-700 hover:text-brown-900 transition-colors">Proceso</a>
              <a href="#cotizacion" className="text-brown-700 hover:text-brown-900 transition-colors">Cotización</a>
              <a href="#contacto" className="text-brown-700 hover:text-brown-900 transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/6169057/pexels-photo-6169057.jpeg')`,
          }}
        >
          <div className="absolute inset-0 bg-brown-900/60"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Cajas de Cartón
            <span className="block text-beige-200">Personalizadas</span>
            <span className="block text-3xl md:text-4xl font-normal mt-2">para Tu Empresa</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-beige-100 max-w-2xl mx-auto leading-relaxed">
            Desde muestras gratuitas hasta producciones de 1000+ unidades con impresión de logo. 
            Fabricamos la caja exacta que necesitas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#cotizacion" 
              className="bg-beige-500 hover:bg-beige-600 text-brown-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Solicitar Cotización Gratuita
            </a>
            <a 
              href="#servicios" 
              className="border-2 border-white text-white hover:bg-white hover:text-brown-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-brown-600 max-w-2xl mx-auto">
              Especializados en cajas de cartón personalizadas para empresas manufactureras
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700" 
                 id="service-1"
                 style={isVisible['service-1'] ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <div className="bg-cream p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-brown-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-brown-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brown-800 mb-4">Cajas Personalizadas</h3>
                <p className="text-brown-600">
                  Diseñamos y fabricamos cajas exactas para tus productos. Medidas, resistencia y forma perfectas para cada necesidad.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700" 
                 id="service-2"
                 style={isVisible['service-2'] ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <div className="bg-cream p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-brown-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-brown-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brown-800 mb-4">Muestras Gratuitas</h3>
                <p className="text-brown-600">
                  Creamos prototipos y muestras físicas para que apruebes el diseño antes de la producción masiva.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700" 
                 id="service-3"
                 style={isVisible['service-3'] ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <div className="bg-cream p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-brown-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-brown-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10M5 4h14l-1 15H6L5 4zm5 5v6m4-6v6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brown-800 mb-4">Impresión de Logo</h3>
                <p className="text-brown-600">
                  Imprimimos tu logo en hasta 2 colores. Fortalece tu marca en cada envío con cajas personalizadas.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700" 
                 id="service-4"
                 style={isVisible['service-4'] ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <div className="bg-cream p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-brown-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-brown-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brown-800 mb-4">Producción en Volumen</h3>
                <p className="text-brown-600">
                  Mínimo 1000 unidades. Precios competitivos para grandes volúmenes con calidad garantizada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-xl text-brown-600 max-w-2xl mx-auto">
              Desde la consulta inicial hasta la entrega, te acompañamos en cada paso
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="animate-on-scroll opacity-0 transform translate-x-8 transition-all duration-700" 
                   id="process-1"
                   style={isVisible['process-1'] ? {opacity: 1, transform: 'translateX(0)'} : {}}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brown-700 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-brown-800 mb-2">Consulta y Medidas</h3>
                    <p className="text-brown-600">
                      Analizamos tus productos y necesidades. Tomamos medidas exactas y definimos especificaciones técnicas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll opacity-0 transform translate-x-8 transition-all duration-700" 
                   id="process-2"
                   style={isVisible['process-2'] ? {opacity: 1, transform: 'translateX(0)'} : {}}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brown-700 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-brown-800 mb-2">Muestra Personalizada</h3>
                    <p className="text-brown-600">
                      Fabricamos una muestra física para que puedas probar el ajuste perfecto antes de la producción.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll opacity-0 transform translate-x-8 transition-all duration-700" 
                   id="process-3"
                   style={isVisible['process-3'] ? {opacity: 1, transform: 'translateX(0)'} : {}}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brown-700 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-brown-800 mb-2">Aprobación y Producción</h3>
                    <p className="text-brown-600">
                      Una vez aprobada la muestra, iniciamos la producción masiva con los más altos estándares de calidad.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll opacity-0 transform translate-x-8 transition-all duration-700" 
                   id="process-4"
                   style={isVisible['process-4'] ? {opacity: 1, transform: 'translateX(0)'} : {}}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brown-700 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-brown-800 mb-2">Entrega</h3>
                    <p className="text-brown-600">
                      Entregamos tu pedido completo en los tiempos acordados, listo para usar en tu operación.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 transform translate-x-8 transition-all duration-700" 
                 id="process-image"
                 style={isVisible['process-image'] ? {opacity: 1, transform: 'translateX(0)'} : {}}>
              <img 
                src="https://images.unsplash.com/photo-1600725935160-f67ee4f6084a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxjYXJkYm9hcmQlMjBwcm9kdWN0aW9ufGVufDB8fHx8MTc0ODQ5MDg1N3ww&ixlib=rb-4.1.0&q=85"
                alt="Proceso de fabricación de cajas"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section id="cotizacion" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">
              Solicitar Cotización
            </h2>
            <p className="text-xl text-brown-600">
              Completa el formulario y recibe tu cotización personalizada en 24 horas
            </p>
          </div>

          <div className="bg-cream rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-brown-800 font-semibold mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brown-300 focus:border-brown-500 focus:ring-2 focus:ring-brown-200 transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label className="block text-brown-800 font-semibold mb-2">
                    Persona de Contacto *
                  </label>
                  <input
                    type="text"
                    name="contacto"
                    value={formData.contacto}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brown-300 focus:border-brown-500 focus:ring-2 focus:ring-brown-200 transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-brown-800 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brown-300 focus:border-brown-500 focus:ring-2 focus:ring-brown-200 transition-all"
                    placeholder="tu@empresa.com"
                  />
                </div>
                <div>
                  <label className="block text-brown-800 font-semibold mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-brown-300 focus:border-brown-500 focus:ring-2 focus:ring-brown-200 transition-all"
                    placeholder="+54 11 xxxx-xxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-brown-800 font-semibold mb-2">
                  Producto a Embalar *
                </label>
                <input
                  type="text"
                  name="producto"
                  value={formData.producto}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-brown-300 focus:border-brown-500 focus:ring-2 focus:ring-brown-200 transition-all"
                  placeholder="Ej: Autopartes, productos electrónicos, etc."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-brown-800 font-semibold mb-2">
                    Dimensiones del Producto *
                  </label>
                  <input
                    type="text"
                    name="dimensiones"
                    value={formData.dimensiones}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brown-300 focus:border-brown-500 focus:ring-2 focus:ring-brown-200 transition-all"
                    placeholder="Largo x Ancho x Alto (cm)"
                  />
                </div>
                <div>
                  <label className="block text-brown-800 font-semibold mb-2">
                    Cantidad Requerida *
                  </label>
                  <select
                    name="cantidad"
                    value={formData.cantidad}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brown-300 focus:border-brown-500 focus:ring-2 focus:ring-brown-200 transition-all"
                  >
                    <option value="">Seleccionar cantidad</option>
                    <option value="1000-2499">1,000 - 2,499 unidades</option>
                    <option value="2500-4999">2,500 - 4,999 unidades</option>
                    <option value="5000-9999">5,000 - 9,999 unidades</option>
                    <option value="10000+">10,000+ unidades</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-brown-800 font-semibold mb-2">
                    ¿Requiere Impresión de Logo?
                  </label>
                  <select
                    name="impresion"
                    value={formData.impresion}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-brown-300 focus:border-brown-500 focus:ring-2 focus:ring-brown-200 transition-all"
                  >
                    <option value="">Seleccionar opción</option>
                    <option value="si">Sí, requiero impresión</option>
                    <option value="no">No requiero impresión</option>
                    <option value="consultar">Necesito asesoramiento</option>
                  </select>
                </div>
                <div>
                  <label className="block text-brown-800 font-semibold mb-2">
                    Colores del Logo
                  </label>
                  <input
                    type="text"
                    name="logoColors"
                    value={formData.logoColors}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-brown-300 focus:border-brown-500 focus:ring-2 focus:ring-brown-200 transition-all"
                    placeholder="Ej: Negro y azul (máximo 2 colores)"
                  />
                </div>
              </div>

              <div>
                <label className="block text-brown-800 font-semibold mb-2">
                  Información Adicional
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-brown-300 focus:border-brown-500 focus:ring-2 focus:ring-brown-200 transition-all"
                  placeholder="Cualquier detalle adicional sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brown-700 hover:bg-brown-800 text-white py-4 px-8 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Enviar Solicitud de Cotización
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-brown-600">
              Empresas que confían en nuestras soluciones de packaging
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-brown-600 mb-6 italic">
                "Las cajas personalizadas de Deo SA han mejorado significativamente la presentación de nuestros productos. La calidad es excepcional y el servicio muy profesional."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-brown-800">María González</p>
                  <p className="text-brown-600 text-sm">Directora de Operaciones, TechnoPartes SA</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-brown-600 mb-6 italic">
                "Trabajamos con Deo SA desde hace 3 años. Siempre cumplen con los tiempos de entrega y la calidad es consistente. Muy recomendables para grandes volúmenes."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-brown-800">Carlos Rodríguez</p>
                  <p className="text-brown-600 text-sm">Gerente de Logística, IndustrialMax</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-brown-600 mb-6 italic">
                "El servicio de muestras gratuitas nos permitió probar antes de hacer el pedido grande. Las cajas con nuestro logo quedaron perfectas."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-brown-800">Ana Martínez</p>
                  <p className="text-brown-600 text-sm">Fundadora, ElectroComponentes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-brown-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Deo SA</h3>
              <p className="text-beige-200 mb-6 max-w-md">
                Especializados en la fabricación de cajas de cartón personalizadas para empresas. 
                Calidad garantizada, entregas puntuales y el mejor servicio en Argentina.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-beige-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-beige-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-beige-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-beige-200">
                <li><a href="#servicios" className="hover:text-white transition-colors">Cajas Personalizadas</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Muestras Gratuitas</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Impresión de Logo</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Producción en Volumen</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-beige-200">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +54 11 xxxx-xxxx
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@deosa.com.ar
                </p>
                <p className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Buenos Aires, Argentina
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-brown-700 mt-12 pt-8 text-center">
            <p className="text-beige-200">
              © 2024 Deo SA. Todos los derechos reservados. | Fabricación de cajas de cartón personalizadas en Argentina
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;