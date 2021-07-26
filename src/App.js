import { BrowserRouter, Route } from 'react-router-dom';
import { Footer } from 'grommet';
import HomeScreen from './screens/HomeScreen';
import AdminScreen from './screens/AdminScreen';
import AppProvider from './context/Provider';
import ProductDetail from './components/ProductDetail';
import AppHeader from './components/AppHeader';
function App() {
	return (
		<AppProvider>
			<BrowserRouter>
				<AppHeader />
				<Route path="/admin" component={AdminScreen} />
				<Route path="/" component={HomeScreen} exact />
				<Route path="/:id" component={ProductDetail} />
				<Footer
					background="brand"
					justify="center"
					height="xxsmall"
				>
					From Duong Ace
				</Footer>
			</BrowserRouter >
		</AppProvider>
	);
}

export default App;
