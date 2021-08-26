const removeCart = (newCart) => {
  sessionStorage.setItem('cart', JSON.stringify(newCart));
  return newCart;
};
const addCart = (newCart) => {
  sessionStorage.setItem('cart', JSON.stringify(newCart));
  return newCart;
};
const editCart = (newCart) => {
  sessionStorage.setItem('cart', JSON.stringify(newCart));
  return newCart;
};

const removeAllCart = () => {
  sessionStorage.removeItem('cart');
  return [];
};
export { editCart, removeAllCart };
