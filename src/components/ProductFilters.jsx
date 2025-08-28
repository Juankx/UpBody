import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

const ProductFilters = ({ selectedCategory, onCategoryChange, searchQuery, onSearchChange }) => {
  const categories = [
    "Todos",
    "Leggings",
    "Tops",
    "Chalecos",
    "Shorts",
    "Pantalones",
    "Faldas"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8"
    >
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Filter className="h-4 w-4" />
            <span>Filtrar por:</span>
          </div>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filters Display */}
      {(selectedCategory !== "Todos" || searchQuery) && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Filtros activos:</span>
            
            {selectedCategory !== "Todos" && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300">
                {selectedCategory}
                <button
                  onClick={() => onCategoryChange("Todos")}
                  className="ml-2 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  ×
                </button>
              </span>
            )}
            
            {searchQuery && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent-100 dark:bg-accent-900/20 text-accent-800 dark:text-accent-300">
                "{searchQuery}"
                <button
                  onClick={() => onSearchChange("")}
                  className="ml-2 hover:text-accent-600 dark:hover:text-accent-400"
                >
                  ×
                </button>
              </span>
            )}
            
            {(selectedCategory !== "Todos" || searchQuery) && (
              <button
                onClick={() => {
                  onCategoryChange("Todos");
                  onSearchChange("");
                }}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline"
              >
                Limpiar todos
              </button>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProductFilters;
