import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import WebFont from 'webfontloader';
import ScrollTop from './scrollTop';
import { ContextProvider } from './globalState/state';
import App from './App';
import './tailwind.output.css';
import './sass/_globalStyles.scss';
import * as serviceWorker from './serviceWorker';

WebFont.load({
	google: {
		families: ['Lato:300,400,700,900', 'sans-serif']
	}
});

const history = '';

ReactDOM.render(
	<HelmetProvider>
		<ContextProvider>
			<BrowserRouter history={history}>
				<ScrollTop>
					<App />
				</ScrollTop>
			</BrowserRouter>
		</ContextProvider>
	</HelmetProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
