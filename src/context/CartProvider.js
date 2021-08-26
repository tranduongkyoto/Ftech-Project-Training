import { createContext, useState } from 'react';
import React from 'react';
import { editCart, removeAllCart } from '../services.js/cart_services';
const CartContext = createContext();
function CartProvider({ children }) {
  const [cart, setCart] = useState(
    sessionStorage.getItem('cart')
      ? JSON.parse(sessionStorage.getItem('cart'))
      : []
  );
  const removeFromCart = (productId) => {
    let newCart = [...cart];
    newCart = newCart.filter((item) => item._id !== productId);
    setCart(newCart);
    editCart(newCart);
    return newCart;
  };
  const addToCart = (product) => {
    let inCart = false;
    let newCart = [...cart];
    newCart.forEach((item) => {
      if (item._id === product._id) {
        inCart = true;
        item.count++;
      }
    });
    if (!inCart) {
      newCart.push({ ...product, count: 1 });
    }
    setCart(newCart);
    editCart(newCart);
    return newCart;
  };
  const subToCart = (product) => {
    console.log(product);
    if (product.count === 1) {
      return removeFromCart(product._id);
    } else {
      var newCart = [...cart];
      const newProduct = { ...product, count: product.count - 1 };
      newCart = newCart.map((item) =>
        item._id === product._id ? newProduct : item
      );
      sessionStorage.setItem('cart', JSON.stringify(newCart));
      return setCart([...newCart]);
    }
  };

  const removeAll = () => {
    setCart([]);
    removeAllCart();
    return;
  };
  const state = {
    cart,
    setCart,
    removeFromCart,
    addToCart,
    subToCart,
    removeAll,
  };
  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
}
export { CartContext, CartProvider };
