import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AdminScreen from './screens/AdminScreen';
import AppProvider from './context/Provider';
import ProductDetail from './components/ProductDetail';
import Layout from './components/Layout';
import CartScreen from './screens/CartScreen';
import PlaceOrder from './components/PlaceOrder';
import Payment from './components/Payment';
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Route path="/admin" component={AdminScreen} />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart" component={CartScreen} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/payment" component={Payment} />
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
