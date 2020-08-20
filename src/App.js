import React from 'react';
import { createBrowserHistory } from 'history';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Login from './pages/open/Login';

const history = createBrowserHistory();

const PRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			localStorage.getItem('token') !== null ? (
				<Component {...props} />
			) : (
				// <Layout>
				// </Layout>
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
		<AnimatePresence exitBeforeEnter>
			<Switch key={location.pathname} location={location}>
				<Route history={history} exact path="/" component={Login} />
			</Switch>
		</AnimatePresence>
	);
}

export default App;
