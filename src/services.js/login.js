import axios from 'axios';
import { LOGIN, USERDATA } from './endpoints';

const Login = async (email, password) => {
  try {
    var { data } = await axios.post(LOGIN, {
      email,
      password,
    });
  } catch (error) {
    console.log(error);
  }
  return data;
};

const getUserData = async (user) => {
  try {
    var { data } = await axios.get(`${USERDATA}/${user.id}`, {
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
export { Login, getUserData };
