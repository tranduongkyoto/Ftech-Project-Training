const removeOrder = (newOrder) => {
  sessionStorage.setItem('order', JSON.stringify(newOrder));
  return newOrder;
};
const addOrder = (newOrder) => {
  sessionStorage.setItem('order', JSON.stringify(newOrder));
  return newOrder;
};
const editOrder = (newOrder) => {
  sessionStorage.setItem('order', JSON.stringify(newOrder));
  return newOrder;
};

const removeAllOrder = () => {
  sessionStorage.removeItem('order');
  return [];
};
export { addOrder };
