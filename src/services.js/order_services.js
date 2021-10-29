import axios from 'axios';
import { ORDER } from './endpoints';

const addOrder = async (order, token) => {
  try {
    var { data } = await axios.post(ORDER, order, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return data;
};
const getOrder = async (user_id, token) => {
  try {
    var { data } = await axios.get(`${ORDER}/${user_id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
    return { err: error.message };
  }
  return data;
};
const getOrders = async (user_id, token) => {
  try {
    var { data } = await axios.get(`${ORDER}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
    return { err: error.message };
  }
  return data;
};
export { addOrder, getOrder, getOrders };
