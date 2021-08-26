import { createContext, useState } from 'react';
import { addOrder } from '../services.js/order_services';
const AppContext = createContext();
function AppProvider({ children }) {
  const [order, setOrder] = useState([]);
  const [shippingaddress, setShippingAddress] = useState(
    sessionStorage.getItem('order')
      ? JSON.parse(sessionStorage.getItem('order'))
      : {}
  );
  const categoryValue = ['Women', 'Man'];
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

  const addShippingAddress = (shippingadress) => {
    setShippingAddress(shippingadress);
    addOrder(shippingaddress);
    return shippingaddress;
  };
  const state = {
    order,
    shippingaddress,
    filter,
    total,
    setTotalOrder,
    addFilter,
    addShippingAddress,
  };
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}
export { AppContext, AppProvider };
