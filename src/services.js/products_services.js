import axios from 'axios';
import { API_URL } from './endpoints';
async function GetProducts(limit) {
  return await axios.get(API_URL + `?p=1&l=${limit}`);
}

export { GetProducts };
