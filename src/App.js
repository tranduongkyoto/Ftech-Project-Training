import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import { AppProvider } from './context/AppProvider';
import ProductDetail from './components/ProductDetail';
import Layout from './components/Layout';
import CartScreen from './screens/CartScreen';
import { SnackbarProvider } from 'notistack';
import Address from './components/Address';
import { ProductProvider } from './context/ProductProvider';
import { CartProvider } from './context/CartProvider';
import { UserProvider } from './context/User';
import LoginPage from './screens/Login';
import Profile from './screens/Profile';
import PlaceOrder from './components/PlaceOrder';
import Success from './components/Success';
import OrderHistory from './screens/OrderHistory';
import Order from './components/Order';
import AdminDashboard from './screens/Admin/AdminDashboard';
import OrderAdmin from './screens/Admin/Order';
function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <AppProvider>
          <UserProvider>
            <CartProvider>
              <Layout>
                <ProductProvider>
                  <Route path="/" component={HomeScreen} exact />
                  <Route path="/product/:id" component={ProductDetail} />
                </ProductProvider>
                <Route path="/login" component={LoginPage} />
                <Route path="/cart" component={CartScreen} />
                <Route path="/address" component={Address} />
                <Route path="/placeorder" component={PlaceOrder} />
                <Route path="/checkout/success" component={Success} />
                <Route path="/profile" component={Profile} />
                <Route path="/order-history" component={OrderHistory} />
                <Route path="/order/:id" component={Order} />
                <Route path="/admin/dashboard" component={AdminDashboard} />
                <Route path="/admin/orders" component={OrderAdmin} />
              </Layout>
            </CartProvider>
          </UserProvider>
        </AppProvider>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
