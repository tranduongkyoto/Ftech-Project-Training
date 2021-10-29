import axios from 'axios';
import { USERDATA } from './endpoints';

const Logout = async (user, user_data) => {
  try {
    var { data } = await axios.post(`${USERDATA}`, user_data, {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return {
      message: error,
    };
  }
};
const updateUserData = async (user, user_data) => {
  try {
    var { data } = await axios.put(
      `${USERDATA}/${user.user_data_id}`,
      user_data,
      {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return {
      message: error,
    };
  }
};
export { Logout, updateUserData };
