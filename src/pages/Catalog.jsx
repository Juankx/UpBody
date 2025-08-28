import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';
import { products, getProductsByCategory } from '../data/products';
import { Filter, Grid3X3, List, ShoppingBag } from 'lucide-react';

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-low', 'price-high', 'name'

  // Obtener parámetros de URL al cargar la página
  useEffect(() => {
    const category = searchParams.get('categoria');
    const search = searchParams.get('buscar');
    
    if (category) setSelectedCategory(category);
    if (search) setSearchQuery(search);
  }, [searchParams]);

  // Filtrar y ordenar productos
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filtrar por categoría
    if (selectedCategory !== 'Todos') {
      filtered = getProductsByCategory(selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Ordenar productos
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        // Mantener orden original (destacados primero)
        filtered = [...filtered].sort((a, b) => {
          const priority = { 'Bestseller': 3, 'Nuevo': 2, 'Popular': 1 };
          return (priority[b.tag] || 0) - (priority[a.tag] || 0);
        });
        break;
    }

    return filtered;
  }, [selectedCategory, searchQuery, sortBy]);

  // Actualizar URL cuando cambien los filtros
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory !== 'Todos') params.set('categoria', selectedCategory);
    if (searchQuery) params.set('buscar', searchQuery);
    
    setSearchParams(params, { replace: true });
  }, [selectedCategory, searchQuery, setSearchParams]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
  };

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
              <ShoppingBag className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Catálogo de Productos
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Descubre nuestra colección completa de ropa deportiva femenina. 
              Calidad, estilo y funcionalidad en cada prenda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="section-padding">
        <div className="container-custom">
          <ProductFilters
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />

          {/* View Controls and Sort */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            {/* Results Count */}
            <div className="text-gray-600 dark:text-gray-400">
              {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
            </div>

            {/* View Mode and Sort Controls */}
            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  aria-label="Vista de cuadrícula"
                >
                  <Grid3X3 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  aria-label="Vista de lista"
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="appearance-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2 pr-8 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="featured">Destacados</option>
                  <option value="price-low">Precio: Menor a Mayor</option>
                  <option value="price-high">Precio: Mayor a Menor</option>
                  <option value="name">Nombre A-Z</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <Filter className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <motion.div
                key={`${viewMode}-${selectedCategory}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
                    : 'space-y-6'
                }
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={viewMode === 'list' ? 'bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6' : ''}
                  >
                    {viewMode === 'list' ? (
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                        </div>
                        <div className="md:w-2/3 space-y-4">
                          <div>
                            <span className="text-sm text-primary-500 font-medium">
                              {product.category}
                            </span>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">
                              {product.name}
                            </h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400">
                            {product.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">
                              ${product.price}
                            </span>
                            <button className="btn-primary">
                              Consultar disponibilidad
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <ProductCard product={product} />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
                  <Filter className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Intenta ajustar los filtros o la búsqueda para encontrar lo que buscas.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('Todos');
                    setSearchQuery('');
                  }}
                  className="btn-primary"
                >
                  Limpiar filtros
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
