// Datos de productos reales basados en las imágenes disponibles
export const products = [
  // CONJUNTOS
  {
    id: 1,
    name: "Conjunto Falda Flores",
    price: 89.99,
    category: "Conjuntos",
    description: "Hermoso conjunto con falda estampada de flores, perfecto para el verano",
    images: [
      "/images/products/conjuntoFaldaFlores.jpeg",
      "/images/products/conjuntoFaldaFlores2.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Floral", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Floral"],
    inStock: true,
    featured: true,
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Conjunto Falda Flores Blanco",
    price: 92.99,
    category: "Conjuntos",
    description: "Elegante conjunto con falda de flores sobre fondo blanco",
    images: [
      "/images/products/conjuntoFaldaFloresBlanco.jpeg",
      "/images/products/conjuntoFaldaFloresBlanco2.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Blanco con flores", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Blanco con flores"],
    inStock: true,
    featured: true,
    tag: "Nuevo"
  },
  {
    id: 3,
    name: "Conjunto Falda Negro",
    price: 85.99,
    category: "Conjuntos",
    description: "Conjunto clásico con falda negra, ideal para cualquier ocasión",
    images: [
      "/images/products/conjuntoFaldaNegro.jpeg",
      "/images/products/conjuntoFaldaNegro2.jpeg",
      "/images/products/conjuntoFaldaNegro3.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Negro"],
    inStock: true,
    featured: false,
    tag: "Popular"
  },
  {
    id: 4,
    name: "Conjunto Falda Blanca Francesa Negra",
    price: 95.99,
    category: "Conjuntos",
    description: "Conjunto elegante con falda blanca y detalles franceses en negro",
    images: [
      "/images/products/conjuntoFaldaBlancaFrancesaNegra.jpeg",
      "/images/products/cunjuntoFaldaBlancaFrancesaNegra2.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Blanco y negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Blanco y negro"],
    inStock: true,
    featured: true,
    tag: "Elegante"
  },
  {
    id: 5,
    name: "Conjunto Morado",
    price: 88.99,
    category: "Conjuntos",
    description: "Conjunto en color morado vibrante, perfecto para destacar",
    images: [
      "/images/products/conjuntoMorado.jpeg",
      "/images/products/conjuntoMorado2.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Morado", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Morado"],
    inStock: true,
    featured: false,
    tag: "Vibrante"
  },
  {
    id: 6,
    name: "Conjunto Turqueza",
    price: 91.99,
    category: "Conjuntos",
    description: "Conjunto en color turqueza, ideal para el verano",
    images: [
      "/images/products/conjuntoTurqueza.jpeg",
      "/images/products/conjuntoTurqueza2.jpeg",
      "/images/products/conjuntoTurqueza3.jpeg",
      "/images/products/conjuntoTurqueza4.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Turqueza", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Turqueza"],
    inStock: true,
    featured: true,
    tag: "Verano"
  },
  {
    id: 7,
    name: "Conjunto Verde",
    price: 87.99,
    category: "Conjuntos",
    description: "Conjunto en color verde, perfecto para la naturaleza",
    images: [
      "/images/products/conjuntoVerde.jpeg",
      "/images/products/conjuntoVerde2.jpeg",
      "/images/products/conjuntoVerde3.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Verde", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Verde"],
    inStock: true,
    featured: false,
    tag: "Natural"
  },
  {
    id: 8,
    name: "Conjunto Vino",
    price: 93.99,
    category: "Conjuntos",
    description: "Conjunto elegante en color vino, perfecto para ocasiones especiales",
    images: [
      "/images/products/conjuntoVino.jpeg",
      "/images/products/conjuntoVino2.jpeg",
      "/images/products/conjuntoVino3.jpeg",
      "/images/products/conjuntoVino4.jpeg",
      "/images/products/conjuntoVino5.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Vino", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Vino"],
    inStock: true,
    featured: true,
    tag: "Elegante"
  },
  {
    id: 9,
    name: "Conjunto Negro Pantalón Largo",
    price: 89.99,
    category: "Conjuntos",
    description: "Conjunto elegante con pantalón largo en color negro",
    images: [
      "/images/products/conjuntoNegroPantalonLargoMangaLarga.jpeg",
      "/images/products/conjuntoNegroPantalonLargoMangaLarga2.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Negro"],
    inStock: true,
    featured: false,
    tag: "Clásico"
  },
  {
    id: 10,
    name: "Conjunto Short Negro Blusa",
    price: 82.99,
    category: "Conjuntos",
    description: "Conjunto casual con short negro y blusa",
    images: [
      "/images/products/conjuntoNegroShortBlusa.jpeg",
      "/images/products/conjuntoNegroShortBlusa2.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Negro"],
    inStock: true,
    featured: false,
    tag: "Casual"
  },
  {
    id: 11,
    name: "Conjunto Short Blanco",
    price: 85.99,
    category: "Conjuntos",
    description: "Conjunto fresco con short blanco, ideal para el verano",
    images: [
      "/images/products/conjuntoShortBlanco.jpeg",
      "/images/products/conjuntoShortBlanco2.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Blanco", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Blanco"],
    inStock: true,
    featured: false,
    tag: "Verano"
  },
  {
    id: 12,
    name: "Conjunto Short Negro",
    price: 83.99,
    category: "Conjuntos",
    description: "Conjunto casual con short negro",
    images: [
      "/images/products/conjuntoShortNegro.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Negro"],
    inStock: true,
    featured: false,
    tag: "Básico"
  },
  {
    id: 13,
    name: "Conjunto Top Negro Pantalón Largo",
    price: 91.99,
    category: "Conjuntos",
    description: "Conjunto elegante con top negro y pantalón largo",
    images: [
      "/images/products/conjuntoTopNegroPantalonLargo.jpeg",
      "/images/products/conjuntoTopNegroPantalonLargo2.jpeg",
      "/images/products/conjuntoTopNegroPantalonLargo3.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Negro"],
    inStock: true,
    featured: false,
    tag: "Elegante"
  },
  {
    id: 14,
    name: "Conjunto Top Tiritas Pantalón Largo Negro",
    price: 88.99,
    category: "Conjuntos",
    description: "Conjunto con top de tiritas y pantalón largo negro",
    images: [
      "/images/products/conjuntoTopTiritasPantalonLargoNegro.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Negro"],
    inStock: true,
    featured: false,
    tag: "Moderno"
  },
  {
    id: 15,
    name: "Conjunto Café Pantalón Largo",
    price: 90.99,
    category: "Conjuntos",
    description: "Conjunto elegante en color café con pantalón largo",
    images: [
      "/images/products/conjuntoCafePantalonLargo.jpeg",
      "/images/products/conjuntoCafePantalonLargo2.jpeg",
      "/images/products/conjuntoCafePantalonLargo3.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Café", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Café"],
    inStock: true,
    featured: false,
    tag: "Otoño"
  },
  {
    id: 16,
    name: "Conjunto Mostaza Pantalón Largo",
    price: 87.99,
    category: "Conjuntos",
    description: "Conjunto en color mostaza con pantalón largo",
    images: [
      "/images/products/conjuntoMostazaPantalonLargo.jpeg",
      "/images/products/conjuntoMostazaPantalonLargo2.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Mostaza", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Mostaza"],
    inStock: true,
    featured: false,
    tag: "Otoño"
  },
  {
    id: 17,
    name: "Conjunto Oliva Pantalón Largo",
    price: 89.99,
    category: "Conjuntos",
    description: "Conjunto en color oliva con pantalón largo",
    images: [
      "/images/products/conjuntoOlivaPantalonLargo.jpeg",
      "/images/products/conjuntoOlivaPantalonLargo2.jpeg",
      "/images/products/conjuntoOlivaPantalonLargo3.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Oliva", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Oliva"],
    inStock: true,
    featured: false,
    tag: "Militar"
  },
  {
    id: 18,
    name: "Conjunto Plomo Pantalón Largo",
    price: 88.99,
    category: "Conjuntos",
    description: "Conjunto en color plomo con pantalón largo",
    images: [
      "/images/products/conjuntoPlomoPantalonLargo.jpeg",
      "/images/products/conjuntoPlomoPantalonLargo2.jpeg",
      "/images/products/conjuntoPlomoPantalonLargo3.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Plomo", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Plomo"],
    inStock: true,
    featured: false,
    tag: "Neutro"
  },
  {
    id: 19,
    name: "Conjunto Verde Pantalón Largo",
    price: 86.99,
    category: "Conjuntos",
    description: "Conjunto en color verde con pantalón largo",
    images: [
      "/images/products/conjuntoVerdePantalonLargo.jpeg",
      "/images/products/conjuntoVerdePantalonLargo2.jpeg",
      "/images/products/conjuntoVerdePantalonLargo3.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Verde", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Verde"],
    inStock: true,
    featured: false,
    tag: "Natural"
  },
  {
    id: 20,
    name: "Conjunto Vino Pantalón Largo",
    price: 92.99,
    category: "Conjuntos",
    description: "Conjunto elegante en color vino con pantalón largo",
    images: [
      "/images/products/conjuntoVinoPantalonLargo.jpeg",
      "/images/products/conjuntoVinoPantalonLargo2.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Vino", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Vino"],
    inStock: true,
    featured: false,
    tag: "Elegante"
  },
  {
    id: 21,
    name: "Conjunto Negro Pantalón Verde",
    price: 88.99,
    category: "Conjuntos",
    description: "Conjunto con blusa negra y pantalón verde",
    images: [
      "/images/products/blusaNegraPantalonVerde.jpeg",
      "/images/products/blusaNegraPantalonVerde2.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Negro y verde", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Negro y verde"],
    inStock: true,
    featured: false,
    tag: "Contraste"
  },
  {
    id: 22,
    name: "Blusa Calentador Vino",
    price: 45.99,
    category: "Tops",
    description: "Blusa calentador en color vino, perfecta para el invierno",
    images: [
      "/images/products/blusaCalentadorVino.jpeg",
      "/images/products/blusaCalentadorVino2.jpeg",
      "/images/products/blusaCalentadorVino3.jpeg"
    ],
    features: ["Material: Algodón", "Tallas: S, M, L", "Colores: Vino", "Cuidado: Lavar a máquina"],
    sizes: ["S", "M", "L"],
    colors: ["Vino"],
    inStock: true,
    featured: false,
    tag: "Invierno"
  },
  {
    id: 23,
    name: "Franelilla Naranja",
    price: 42.99,
    category: "Tops",
    description: "Franelilla cómoda en color naranja",
    images: [
      "/images/products/franelillaNaranja.jpeg"
    ],
    features: ["Material: Algodón", "Tallas: S, M, L", "Colores: Naranja", "Cuidado: Lavar a máquina"],
    sizes: ["S", "M", "L"],
    colors: ["Naranja"],
    inStock: true,
    featured: false,
    tag: "Casual"
  },
  {
    id: 24,
    name: "Top Blanco Short Negro",
    price: 48.99,
    category: "Tops",
    description: "Top blanco con short negro, conjunto casual",
    images: [
      "/images/products/topBlancoShortNegro.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Blanco y negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Blanco y negro"],
    inStock: true,
    featured: false,
    tag: "Contraste"
  },
  {
    id: 25,
    name: "Top Calentador",
    price: 44.99,
    category: "Tops",
    description: "Top calentador cómodo y abrigado",
    images: [
      "/images/products/topCalentador.jpeg"
    ],
    features: ["Material: Algodón", "Tallas: S, M, L", "Colores: Varios", "Cuidado: Lavar a máquina"],
    sizes: ["S", "M", "L"],
    colors: ["Varios"],
    inStock: true,
    featured: false,
    tag: "Básico"
  },
  {
    id: 26,
    name: "Top Celeste Short Negro",
    price: 46.99,
    category: "Tops",
    description: "Top celeste con short negro",
    images: [
      "/images/products/topCelesteShortNegro.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Celeste y negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Celeste y negro"],
    inStock: true,
    featured: false,
    tag: "Verano"
  },
  {
    id: 27,
    name: "Top Fucsia",
    price: 47.99,
    category: "Tops",
    description: "Top en color fucsia vibrante",
    images: [
      "/images/products/topFucsia.jpeg",
      "/images/products/topFucsia2.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Fucsia", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Fucsia"],
    inStock: true,
    featured: false,
    tag: "Vibrante"
  },
  {
    id: 28,
    name: "Top Fucsia Pantalón Degradado",
    price: 52.99,
    category: "Tops",
    description: "Top fucsia con pantalón degradado",
    images: [
      "/images/products/topFucsiaPantalonDegradado.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Fucsia y degradado", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Fucsia y degradado"],
    inStock: true,
    featured: false,
    tag: "Moderno"
  },
  {
    id: 29,
    name: "Top Fucsia Short Negro",
    price: 48.99,
    category: "Tops",
    description: "Top fucsia con short negro",
    images: [
      "/images/products/topFucsiaShortNegro.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Fucsia y negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Fucsia y negro"],
    inStock: true,
    featured: false,
    tag: "Contraste"
  },
  {
    id: 30,
    name: "Top Magenta Short Negro",
    price: 47.99,
    category: "Tops",
    description: "Top magenta con short negro",
    images: [
      "/images/products/topMagentaShortNegro.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Magenta y negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Magenta y negro"],
    inStock: true,
    featured: false,
    tag: "Vibrante"
  },
  {
    id: 31,
    name: "Top Negro Short Naranja",
    price: 46.99,
    category: "Tops",
    description: "Top negro con short naranja",
    images: [
      "/images/products/topNegroShortNaranja.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Negro y naranja", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Negro y naranja"],
    inStock: true,
    featured: false,
    tag: "Contraste"
  },
  {
    id: 32,
    name: "Top Rojo Short Negro",
    price: 47.99,
    category: "Tops",
    description: "Top rojo con short negro",
    images: [
      "/images/products/topRojoShortNegro.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Rojo y negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Rojo y negro"],
    inStock: true,
    featured: false,
    tag: "Pasión"
  },
  {
    id: 33,
    name: "Top Rosado Short Negro",
    price: 46.99,
    category: "Tops",
    description: "Top rosado con short negro",
    images: [
      "/images/products/topRosadoShortNegro.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Rosado y negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Rosado y negro"],
    inStock: true,
    featured: false,
    tag: "Femenino"
  },
  {
    id: 34,
    name: "Top Salmón Short Negro",
    price: 47.99,
    category: "Tops",
    description: "Top salmón con short negro",
    images: [
      "/images/products/topSalmonShortNegro.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Salmón y negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Salmón y negro"],
    inStock: true,
    featured: false,
    tag: "Suave"
  },
  {
    id: 35,
    name: "Top Short Azul Marino",
    price: 49.99,
    category: "Tops",
    description: "Top con short azul marino",
    images: [
      "/images/products/topShortAzulMarino.jpeg",
      "/images/products/topShortAzulMarino2.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Azul marino", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Azul marino"],
    inStock: true,
    featured: false,
    tag: "Marino"
  },
  {
    id: 36,
    name: "Top Short Celeste",
    price: 45.99,
    category: "Tops",
    description: "Top con short celeste",
    images: [
      "/images/products/topShortCeleste.jpeg",
      "/images/products/topShortCeleste2.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Celeste", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Celeste"],
    inStock: true,
    featured: false,
    tag: "Verano"
  },
  {
    id: 37,
    name: "Top Short Negro",
    price: 44.99,
    category: "Tops",
    description: "Top con short negro",
    images: [
      "/images/products/topShortNegro.jpeg",
      "/images/products/topShortNegro2.jpeg",
      "/images/products/topShortNegro3.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Negro"],
    inStock: true,
    featured: false,
    tag: "Básico"
  },
  {
    id: 38,
    name: "Top Short Negro Cortos",
    price: 46.99,
    category: "Tops",
    description: "Top con short negro corto",
    images: [
      "/images/products/topShortNegroCortos.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Negro"],
    inStock: true,
    featured: false,
    tag: "Corto"
  },
  {
    id: 39,
    name: "Top Tiritas Short Negro",
    price: 45.99,
    category: "Tops",
    description: "Top de tiritas con short negro",
    images: [
      "/images/products/topTiritasShortNegro.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Negro"],
    inStock: true,
    featured: false,
    tag: "Moderno"
  },
  {
    id: 40,
    name: "Short Salmón",
    price: 38.99,
    category: "Shorts",
    description: "Short en color salmón",
    images: [
      "/images/products/shortSalmon.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Salmón", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Salmón"],
    inStock: true,
    featured: false,
    tag: "Verano"
  },
  {
    id: 41,
    name: "Enterizo Beige",
    price: 75.99,
    category: "Enterizos",
    description: "Enterizo elegante en color beige",
    images: [
      "/images/products/enterizoBeige.jpeg",
      "/images/products/enterizoBeige2.jpeg",
      "/images/products/enterizoBeige3.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Beige", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Beige"],
    inStock: true,
    featured: false,
    tag: "Elegante"
  },
  {
    id: 42,
    name: "Enterizo Negro",
    price: 78.99,
    category: "Enterizos",
    description: "Enterizo elegante en color negro",
    images: [
      "/images/products/enterizoNegro.jpeg",
      "/images/products/enterizoNegro2.jpeg"
    ],
    features: ["Material: Poliéster", "Tallas: S, M, L", "Colores: Negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Negro"],
    inStock: true,
    featured: false,
    tag: "Clásico"
  },
  {
    id: 43,
    name: "Traje de Baño Bikini Negro Flores",
    price: 65.99,
    category: "Trajes de Baño",
    description: "Bikini elegante en negro con estampado de flores",
    images: [
      "/images/products/trajeBanoBikiniNegroFlores.jpeg",
      "/images/products/trajeBanoBikiniNegroFlores2.jpeg"
    ],
    features: ["Material: Lycra", "Tallas: S, M, L", "Colores: Negro con flores", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Negro con flores"],
    inStock: true,
    featured: false,
    tag: "Floral"
  },
  {
    id: 44,
    name: "Traje de Baño Flores",
    price: 68.99,
    category: "Trajes de Baño",
    description: "Traje de baño con estampado de flores",
    images: [
      "/images/products/trajeBanoFlores.jpeg",
      "/images/products/trajeBanoFlores2.jpeg",
      "/images/products/trajeBanoFlores3.jpeg"
    ],
    features: ["Material: Lycra", "Tallas: S, M, L", "Colores: Floral", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Floral"],
    inStock: true,
    featured: false,
    tag: "Verano"
  },
  {
    id: 45,
    name: "Traje de Baño Negro Elegante",
    price: 72.99,
    category: "Trajes de Baño",
    description: "Traje de baño negro elegante",
    images: [
      "/images/products/trajeBanoNegroElegante.jpeg",
      "/images/products/trajeBanoNegroElegante2.jpeg"
    ],
    features: ["Material: Lycra", "Tallas: S, M, L", "Colores: Negro", "Cuidado: Lavar a mano"],
    sizes: ["S", "M", "L"],
    colors: ["Negro"],
    inStock: true,
    featured: false,
    tag: "Elegante"
  },
  {
    id: 46,
    name: "Zapatos Negros",
    price: 55.99,
    category: "Calzado",
    description: "Zapatos negros elegantes",
    images: [
      "/images/products/zapatosNegros.jpeg"
    ],
    features: ["Material: Cuero sintético", "Tallas: 35-40", "Colores: Negro", "Cuidado: Limpiar con paño húmedo"],
    sizes: ["35", "36", "37", "38", "39", "40"],
    colors: ["Negro"],
    inStock: true,
    featured: false,
    tag: "Básico"
  }
];

// Categorías de productos
export const categories = [
  "Todos",
  "Conjuntos",
  "Tops",
  "Shorts",
  "Enterizos",
  "Trajes de Baño",
  "Calzado"
];

// Función para obtener un producto por ID
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

// Función para obtener productos por categoría
export const getProductsByCategory = (category) => {
  if (category === "Todos") {
    return products;
  }
  return products.filter(product => product.category === category);
};

// Función para obtener productos destacados
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

// Función para buscar productos
export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};
