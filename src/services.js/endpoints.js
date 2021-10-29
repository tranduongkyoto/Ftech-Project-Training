const API_URL = 'http://localhost:5000/api';
const GET_ALL_PRODUCTS = `${API_URL}/products`;
const LOGIN = `${API_URL}/auth/login`;
const USERDATA = `${API_URL}/user_data`;
const ORDER = `${API_URL}/order`;
const CHECKOUT = `/create-checkout-session`;
const GETDISCOUNT = `${API_URL}/discount`;

const GET_CHECKOUT_RESULT = `http://localhost:5000/checkout-session`;
export {
  GET_ALL_PRODUCTS,
  LOGIN,
  ORDER,
  CHECKOUT,
  GET_CHECKOUT_RESULT,
  USERDATA,
  GETDISCOUNT,
};
