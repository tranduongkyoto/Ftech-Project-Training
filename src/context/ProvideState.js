import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProvideState() {
  const [products, setProducts] = useState(
    sessionStorage.getItem('products')
      ? JSON.parse(sessionStorage.getItem('products'))
      : []
  );

  const [cart, setCart] = useState(
    sessionStorage.getItem('cart')
      ? JSON.parse(sessionStorage.getItem('cart'))
      : []
  );
  const [order, setOrder] = useState([]);
  const [shippingaddress, setShippingAddress] = useState({});
  const categoryValue = ['Women', 'Men'];
  const placeValue = ['Ha Noi', 'HCM City', 'Foreign'];
  const brandValue = ['Yody', 'Choobe', 'Nelly'];
  const [filter, setFilter] = useState({
    category: [],
    place: [],
    brand: [],
    price: [],
  });
  const [total, setTotal] = useState();
  const setTotalOrder = (price) => {
    setTotal(price);
  };
  const addFilter = (type, input) => {
    const newFilter = { ...filter };
    switch (type) {
      case 'category':
        const category = input.category;
        const newCategory = [];
        for (let i in category) {
          if (category[i] === true) {
            newCategory.push(categoryValue[i]);
          }
        }
        return setFilter({ ...newFilter, category: newCategory });
      case 'place':
        const place = input.place;
        const newPlace = [];
        for (let i in place) {
          if (place[i] === true) {
            newPlace.push(placeValue[i]);
          }
        }
        return setFilter({ ...newFilter, place: newPlace });
      case 'brand':
        const brand = input.brand;
        const newBrand = [];
        for (let i in brand) {
          if (brand[i] === true) {
            newBrand.push(brandValue[i]);
          }
        }
        return setFilter({ ...newFilter, brand: newBrand });
      case 'price':
        return setFilter({ ...newFilter, price: input.price });
      default:
        return setFilter({
          category: [],
          place: [],
          brand: [],
          price: [],
        });
    }
  };
  const removeFromCart = (productId) => {
    let newCart = [...cart];
    newCart = newCart.filter((item) => item._id !== productId);
    setCart(newCart);
    sessionStorage.setItem('cart', JSON.stringify(newCart));
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
    sessionStorage.setItem('cart', JSON.stringify(newCart));
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
    sessionStorage.removeItem('cart');
    return;
  };
  const addShippingAddress = (shippingadress) => {
    setShippingAddress(shippingadress);
    return;
  };

  return {
    products,
    cart,
    order,
    shippingaddress,
    filter,
    total,
    setProducts,
    setTotalOrder,
    addFilter,
    addToCart,
    subToCart,
    removeFromCart,
    removeAll,
    addShippingAddress,
  };
}
