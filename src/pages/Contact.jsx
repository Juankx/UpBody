import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, Award, Heart } from 'lucide-react';

const Contact = () => {
  const companyInfo = [
    {
      icon: MapPin,
      title: 'Nuestra Ubicación',
      description: 'Calle Deportiva 123, Ciudad Deportiva, CP 12345',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      description: '+1 (555) 123-4567',
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'info@upbody.com',
      color: 'text-purple-500'
    },
    {
      icon: Clock,
      title: 'Horarios',
      description: 'Lun-Vie: 9AM-6PM, Sáb: 10AM-4PM',
      color: 'text-orange-500'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Pasión por el Deporte',
      description: 'Cada prenda está diseñada con amor y dedicación para empoderar a las mujeres deportistas.',
      color: 'text-pink-500'
    },
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Utilizamos solo los mejores materiales para garantizar durabilidad y comodidad.',
      color: 'text-yellow-500'
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Construimos una comunidad de mujeres que se apoyan mutuamente en su viaje fitness.',
      color: 'text-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-500 to-accent-500 text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <MessageCircle className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contáctanos
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              ¿Tienes alguna pregunta o necesitas ayuda? Estamos aquí para ti.
              Nuestro equipo está listo para ayudarte a encontrar la ropa deportiva perfecta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {companyInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 ${info.color}`}>
                  <info.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Envíanos un mensaje
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Completa el formulario a continuación y nos pondremos en contacto contigo 
              lo antes posible. Tu satisfacción es nuestra prioridad.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>

      {/* Company Values */}
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
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Estos son los principios que guían todo lo que hacemos en UpBody.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex p-6 rounded-full bg-white dark:bg-gray-800 shadow-lg mb-6 ${value.color}`}>
                  <value.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestros productos y servicios.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: '¿Cuánto tiempo tarda el envío?',
                answer: 'Nuestros envíos estándar tardan entre 2-3 días hábiles. Para envíos express, el tiempo es de 1-2 días hábiles.'
              },
              {
                question: '¿Puedo devolver un producto si no me queda bien?',
                answer: 'Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra, siempre que el producto esté en su estado original.'
              },
              {
                question: '¿Cómo puedo saber qué talla me queda mejor?',
                answer: 'Proporcionamos una guía de tallas detallada en cada producto. También puedes contactarnos para recibir asesoramiento personalizado.'
              },
              {
                question: '¿Los productos tienen garantía?',
                answer: 'Todos nuestros productos tienen una garantía de 30 días contra defectos de fabricación.'
              },
              {
                question: '¿Ofrecen envío internacional?',
                answer: 'Actualmente solo enviamos dentro del país, pero estamos trabajando para expandir nuestros servicios internacionalmente.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
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
              <a
                href="/catalogo"
                className="btn-primary bg-white text-gray-900 hover:bg-gray-100"
              >
                Ver catálogo
              </a>
              <a
                href="mailto:info@upbody.com"
                className="btn-secondary bg-transparent text-white border-white/30 hover:bg-white/10"
              >
                Enviar email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
