import React, { createContext, useContext, useEffect, useState } from 'react';

const PRODUCTS_KEY = 'products';

const defaultProducts = [
  {
    id: 1,
    image: 'https://example.com/sofa1.jpg',
    name: 'Modern Comfort Sofa',
    price: 15999,
    category: 'Sofa',
    brand: 'Furniture Hub'
  },
  {
    id: 2,
    image: 'https://example.com/dining1.jpg',
    name: 'Royal Dining Table Set',
    price: 24999,
    category: 'Dining table',
    brand: 'Braddy Hub'
  },
  {
    id: 3,
    image: 'https://example.com/mattress1.jpg',
    name: 'Soft Premium Mattress',
    price: 10999,
    category: 'Mattress',
    brand: 'Mate'
  },
  {
    id: 4,
    image: 'https://example.com/wardrobe1.jpg',
    name: 'Classic Wooden Wardrobe',
    price: 18999,
    category: 'Wardrobe',
    brand: 'Familia'
  }
];

const ProductsContext = createContext({ products: [], setProducts: () => {} });

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(() => {
    try {
      const raw = localStorage.getItem(PRODUCTS_KEY);
      return raw ? JSON.parse(raw) : defaultProducts;
    } catch (err) {
      return defaultProducts;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
    } catch (err) {
      // ignore
    }
  }, [products]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}

export default ProductsProvider;
