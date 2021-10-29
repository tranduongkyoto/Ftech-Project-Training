import axios from 'axios';
import { CHECKOUT, GET_CHECKOUT_RESULT } from './endpoints';

const executeCheckout = async (checkout_info, token) => {
  try {
    await axios.post(
      CHECKOUT,
      checkout_info
      //   {
      //   headers: {
      //     authorization: `Bearer ${token}`,
      //   },
      // }
    );
    return {
      success: 'true',
    };
  } catch (error) {
    console.log(error);
    return {
      success: 'false',
    };
  }
};
const getCheckoutResult = async (session_id, order_id) => {
  try {
    const data = await axios.get(
      `${GET_CHECKOUT_RESULT}${session_id}&&${order_id}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return {
      message: error,
    };
  }
};
export { executeCheckout, getCheckoutResult };
