import React, { Fragment } from 'react';
import LayoutMenu from './LayoutMenu';
import Alert from './Alert';

export const Layout = (props) => {
	return (
		<Fragment>
			<LayoutMenu />
			{props.children}
			<Alert />
		</Fragment>
	);
};
