import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AdminScreen from './screens/AdminScreen';
import AppProvider from './context/Provider';
import ProductDetail from './components/ProductDetail';
import Layout from './components/Layout';
import CartScreen from './screens/CartScreen';
import Payment from './components/Payment';
import { SnackbarProvider } from 'notistack';
import CheckoutWizard from './components/CheckoutWizard';
import Address from './components/Address';
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <SnackbarProvider>
            <Route path="/admin" component={AdminScreen} />
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/cart" component={CartScreen} />
            <Route path="/address" component={Address} />
            <Route path="/payment" component={Payment} />
          </SnackbarProvider>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
