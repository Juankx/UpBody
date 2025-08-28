import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import ProductGallery from '../components/ProductGallery';
import { getProductById, products } from '../data/products';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  Star, 
  Truck, 
  Shield, 
  RotateCcw, 
  CheckCircle,
  ShoppingBag,
  MessageCircle
} from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  useEffect(() => {
    const foundProduct = getProductById(id);
    if (foundProduct) {
      setProduct(foundProduct);
      // Establecer color por defecto si está disponible
      if (foundProduct.features.some(f => f.includes('Colores'))) {
        const colorFeature = foundProduct.features.find(f => f.includes('Colores'));
        if (colorFeature) {
          const colors = colorFeature.split(': ')[1];
          setSelectedColor(colors.split(', ')[0]);
        }
      }
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Cargando producto...</p>
        </div>
      </div>
    );
  }

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  const handleConsultAvailability = () => {
    // Aquí se implementaría la lógica para consultar disponibilidad
    alert('Función de consulta de disponibilidad próximamente disponible');
  };

  // Obtener productos relacionados
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumb */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container-custom py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link to="/" className="hover:text-primary-500 transition-colors duration-200">
              Inicio
            </Link>
            <span>/</span>
            <Link to="/catalogo" className="hover:text-primary-500 transition-colors duration-200">
              Catálogo
            </Link>
            <span>/</span>
            <Link to={`/catalogo?categoria=${product.category}`} className="hover:text-primary-500 transition-colors duration-200">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ProductGallery images={product.images} productName={product.name} />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Back Button */}
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Volver</span>
              </button>

              {/* Category and Tag */}
              <div className="flex items-center space-x-3">
                <span className="text-sm text-primary-500 font-medium bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                {product.tag && (
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    product.tag === 'Bestseller' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' :
                    product.tag === 'Nuevo' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' :
                    product.tag === 'Popular' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300' :
                    'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                  }`}>
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Product Name */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-400">(4.0 - 128 reseñas)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                {product.tag === 'Bestseller' && (
                  <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                    ${(product.price * 1.2).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Características
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Size Selection */}
              {product.features.some(f => f.includes('Tallas')) && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Talla
                    </h3>
                    <button
                      onClick={() => setShowSizeGuide(!showSizeGuide)}
                      className="text-sm text-primary-500 hover:text-primary-600 underline"
                    >
                      Guía de tallas
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {product.features
                      .find(f => f.includes('Tallas'))
                      ?.split(': ')[1]
                      .split(', ')
                      .map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`py-2 px-4 border rounded-lg text-center transition-all duration-200 ${
                            selectedSize === size
                              ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                              : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {product.features.some(f => f.includes('Colores')) && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Color
                  </h3>
                  <div className="flex space-x-3">
                    {product.features
                      .find(f => f.includes('Colores'))
                      ?.split(': ')[1]
                      .split(', ')
                      .map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                            selectedColor === color
                              ? 'border-primary-500 ring-2 ring-primary-200 dark:ring-primary-800'
                              : 'border-gray-300 dark:border-gray-600'
                          }`}
                          style={{
                            backgroundColor: color === 'Negro' ? '#000' :
                                          color === 'Blanco' ? '#fff' :
                                          color === 'Gris' ? '#6b7280' :
                                          color === 'Azul' ? '#3b82f6' :
                                          color === 'Rosa' ? '#ec4899' :
                                          color === 'Verde' ? '#10b981' :
                                          color === 'Azul Marino' ? '#1e3a8a' : '#6b7280'
                          }}
                          title={color}
                        />
                      ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Cantidad
                </h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-200 dark:border-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    -
                  </button>
                  <span className="w-16 text-center text-lg font-medium text-gray-900 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-200 dark:border-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleConsultAvailability}
                  className="btn-primary flex-1 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Consultar disponibilidad</span>
                </button>
                
                <button
                  onClick={handleAddToWishlist}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    isWishlisted
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                  aria-label="Agregar a favoritos"
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                
                <button
                  onClick={handleShare}
                  className="p-4 rounded-lg border-2 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-200"
                  aria-label="Compartir"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>

              {/* Shipping Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                  <Truck className="h-5 w-5 text-primary-500" />
                  <span>Envío gratis</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                  <Shield className="h-5 w-5 text-primary-500" />
                  <span>30 días garantía</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                  <RotateCcw className="h-5 w-5 text-primary-500" />
                  <span>Devolución fácil</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-white dark:bg-gray-800">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Productos Relacionados
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Descubre más productos de la misma categoría
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <Link to={`/producto/${relatedProduct.id}`}>
                      <img
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    <div className="p-4">
                      <span className="text-sm text-primary-500 font-medium">
                        {relatedProduct.category}
                      </span>
                      <Link to={`/producto/${relatedProduct.id}`}>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1 hover:text-primary-500 transition-colors duration-200">
                          {relatedProduct.name}
                        </h3>
                      </Link>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                          ${relatedProduct.price}
                        </span>
                        <button className="btn-primary text-sm py-2 px-4">
                          Ver producto
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Size Guide Modal */}
      <AnimatePresence>
        {showSizeGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setShowSizeGuide(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Guía de Tallas
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Para encontrar tu talla perfecta, mide tu cintura y caderas.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2">Talla</th>
                        <th className="text-left py-2">Cintura (cm)</th>
                        <th className="text-left py-2">Caderas (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { size: 'XS', waist: '60-65', hips: '85-90' },
                        { size: 'S', waist: '66-71', hips: '91-96' },
                        { size: 'M', waist: '72-77', hips: '97-102' },
                        { size: 'L', waist: '78-83', hips: '103-108' },
                        { size: 'XL', waist: '84-89', hips: '109-114' }
                      ].map((row) => (
                        <tr key={row.size} className="border-b border-gray-100 dark:border-gray-700">
                          <td className="py-2 font-medium">{row.size}</td>
                          <td className="py-2">{row.waist}</td>
                          <td className="py-2">{row.hips}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <button
                onClick={() => setShowSizeGuide(false)}
                className="w-full mt-6 btn-primary"
              >
                Entendido
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetail;
