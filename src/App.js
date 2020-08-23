import React from 'react';
import { createBrowserHistory } from 'history';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Login from './pages/open/Login';
import Home from './pages/protected/Home';
import { Layout } from './layout/Layout';

const history = createBrowserHistory();

const PRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			localStorage.getItem('token') === null ? (
				<Layout key="Layout">
					<Component {...props} />
				</Layout>
			) : (
				<Redirect
					to={`/?redirectTo=${window.encodeURIComponent(
						props.location.pathname + props.location.search
					)}`}
				/>
			)
		}
	/>
);

function App() {
	// HELMET PROVIDER SHOULD BE AT TOP
	const location = useLocation();

	return (
		<Switch>
			<AnimatePresence exitBeforeEnter>
				<Route
					history={history}
					exact
					path="/"
					component={Login}
					key={location.pathname}
					location={location}
				/>
				<PRoute
					// key={location.pathname}
					// location={location}
					history={history}
					exact
					path="/inicio"
					component={Home}
				/>
			</AnimatePresence>
		</Switch>
	);
}

export default App;
