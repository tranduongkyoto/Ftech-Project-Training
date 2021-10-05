import { createContext, useState } from 'react';
import React from 'react';
const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState(
    sessionStorage.getItem('products')
      ? JSON.parse(sessionStorage.getItem('products'))
      : []
  );
  const state = { products, setProducts };
  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
}
export { ProductContext, ProductProvider };
