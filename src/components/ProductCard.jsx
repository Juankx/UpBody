import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { id, name, price, category, images, tag } = product;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <Link to={`/producto/${id}`}>
          <motion.img
            src={images[0]}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            whileHover={{ scale: 1.05 }}
          />
        </Link>
        
        {/* Tag */}
        {tag && (
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              tag === 'Bestseller' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' :
              tag === 'Nuevo' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' :
              tag === 'Popular' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300' :
              tag === 'Eco-friendly' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300' :
              'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
            }`}>
              {tag}
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-gray-700">
          <Heart className="h-4 w-4 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200" />
        </button>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            to={`/producto/${id}`}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            Ver producto
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <div className="text-sm text-primary-500 font-medium mb-2">
          {category}
        </div>

        {/* Product Name */}
        <Link to={`/producto/${id}`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-primary-500 transition-colors duration-200">
            {name}
          </h3>
        </Link>

        {/* Price and Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            {tag === 'Bestseller' && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                ${(price * 1.2).toFixed(2)}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
              (4.0)
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Consultar disponibilidad
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
