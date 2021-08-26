import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import { AppProvider } from './context/AppProvider';
import ProductDetail from './components/ProductDetail';
import Layout from './components/Layout';
import CartScreen from './screens/CartScreen';
import Payment from './components/Payment';
import { SnackbarProvider } from 'notistack';
import Address from './components/Address';
import { ProductProvider } from './context/ProductProvider';
import { CartProvider } from './context/CartProvider';
function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <AppProvider>
          <ProductProvider>
            <CartProvider>
              <Layout>
                <Route path="/" component={HomeScreen} exact />
                <Route path="/payment" component={Payment} />
                <Route path="/address" component={Address} />
                <Route path="/cart" component={CartScreen} />
                <Route path="/product/:id" component={ProductDetail} />
              </Layout>
            </CartProvider>
          </ProductProvider>
        </AppProvider>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
