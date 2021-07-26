import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Footer, Header, Text } from 'grommet';
import HomeScreen from './screens/HomeScreen';
import AdminScreen from './screens/AdminScreen';
import AppProvider from './context/Provider';
import ProductDetail from './components/ProductDetail';
function App() {
	return (
		<AppProvider>
			<BrowserRouter>
				<Header background="brand" height="xxsmall">
					<Link to="/"
						style={{
							textDecoration: "none"
						}}
					>
						<Text>Home</Text>
					</Link>
					<Link
						to="/admin"
						style={{
							textDecoration: "none"
						}}
					>
						<Text>Admin</Text>
					</Link>
				</Header>
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
