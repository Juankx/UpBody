import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Star, Truck, Shield, Heart, Zap, Users } from 'lucide-react';

const Home = () => {
  // Obtener productos destacados (con tags especiales)
  const featuredProducts = products.filter(product => 
    ['Bestseller', 'Nuevo', 'Popular'].includes(product.tag)
  ).slice(0, 4);

  const features = [
    {
      icon: Truck,
      title: 'Envío Gratis',
      description: 'Envío gratuito en pedidos superiores a $50',
      color: 'text-blue-500'
    },
    {
      icon: Shield,
      title: 'Garantía de Calidad',
      description: '30 días de garantía en todos nuestros productos',
      color: 'text-green-500'
    },
    {
      icon: Heart,
      title: 'Hecho con Amor',
      description: 'Cada prenda está diseñada pensando en ti',
      color: 'text-pink-500'
    },
    {
      icon: Zap,
      title: 'Entrega Rápida',
      description: 'Recibe tu pedido en 2-3 días hábiles',
      color: 'text-yellow-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Clientes satisfechas', icon: Users },
    { number: '50+', label: 'Productos únicos', icon: Heart },
    { number: '24/7', label: 'Soporte personalizado', icon: Shield },
    { number: '100%', label: 'Calidad garantizada', icon: Star }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Por qué elegir UpBody?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Nuestras prendas están diseñadas para empoderar a las mujeres deportistas 
              con la mejor calidad y estilo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 ${feature.color}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Productos Destacados
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Descubre nuestras prendas más populares y novedades de la temporada.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/catalogo"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Ver catálogo completo</span>
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-accent-500">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Lista para transformar tu entrenamiento?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Únete a miles de mujeres que ya han elegido UpBody para su ropa deportiva.
              Descubre la diferencia que hace la calidad y el diseño.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/catalogo"
                className="btn-primary bg-white text-gray-900 hover:bg-gray-100"
              >
                Comenzar a comprar
              </Link>
              <Link
                to="/contacto"
                className="btn-secondary bg-transparent text-white border-white/30 hover:bg-white/10"
              >
                Contactar con nosotros
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
