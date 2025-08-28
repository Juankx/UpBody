import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Instagram, Facebook, Twitter, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    productos: [
      { name: 'Leggings', href: '/catalogo?categoria=Leggings' },
      { name: 'Tops', href: '/catalogo?categoria=Tops' },
      { name: 'Chalecos', href: '/catalogo?categoria=Chalecos' },
      { name: 'Shorts', href: '/catalogo?categoria=Shorts' },
      { name: 'Pantalones', href: '/catalogo?categoria=Pantalones' },
      { name: 'Faldas', href: '/catalogo?categoria=Faldas' }
    ],
    empresa: [
      { name: 'Sobre nosotros', href: '/sobre-nosotros' },
      { name: 'Nuestra historia', href: '/historia' },
      { name: 'Valores', href: '/valores' },
      { name: 'Equipo', href: '/equipo' }
    ],
    soporte: [
      { name: 'Centro de ayuda', href: '/ayuda' },
      { name: 'Guía de tallas', href: '/guia-tallas' },
      { name: 'Política de devoluciones', href: '/devoluciones' },
      { name: 'Contacto', href: '/contacto' }
    ],
    legal: [
      { name: 'Términos y condiciones', href: '/terminos' },
      { name: 'Política de privacidad', href: '/privacidad' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'Aviso legal', href: '/aviso-legal' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:info@upbody.com', label: 'Email', color: 'hover:text-red-500' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@upbody.com', label: 'Email' },
    { icon: Phone, text: '+1 (555) 123-4567', label: 'Teléfono' },
    { icon: MapPin, text: 'Calle Deportiva 123, Ciudad', label: 'Dirección' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Link to="/" className="inline-flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold">UpBody</span>
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Ropa deportiva premium diseñada para mujeres que inspiran. 
              Calidad, estilo y funcionalidad en cada prenda.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <item.icon className="h-4 w-4 text-primary-500" />
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Productos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Productos</h3>
            <ul className="space-y-2">
              {footerLinks.productos.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Empresa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Soporte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Soporte</h3>
            <ul className="space-y-2">
              {footerLinks.soporte.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Únete a nuestra comunidad</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Recibe las últimas novedades, ofertas exclusivas y consejos de entrenamiento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
              <button className="btn-primary whitespace-nowrap">
                Suscribirse
              </button>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className={`p-3 bg-gray-800 rounded-lg text-gray-400 transition-all duration-200 ${social.color} hover:bg-gray-700`}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; 2024 UpBody. Todos los derechos reservados.</span>
              <div className="hidden md:flex space-x-4">
                {footerLinks.legal.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-primary-500 hover:bg-primary-600 rounded-full text-white transition-colors duration-200"
              aria-label="Volver arriba"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
