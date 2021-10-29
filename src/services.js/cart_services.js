import axios from 'axios';
import { GETDISCOUNT } from './endpoints';

const removeCart = (newCart) => {
  localStorage.setItem('cart', JSON.stringify(newCart));
  return newCart;
};
const addCart = (newCart) => {
  localStorage.setItem('cart', JSON.stringify(newCart));
  return newCart;
};
const editCart = (newCart) => {
  localStorage.setItem('cart', JSON.stringify(newCart));
  return newCart;
};

const removeAllCart = () => {
  localStorage.removeItem('cart');
  return [];
};
const getDiscount = async (user, code) => {
  try {
    var { data } = await axios.post(`${GETDISCOUNT}`, code, {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return { err: error.message };
  }
};
export { editCart, removeAllCart, getDiscount };
