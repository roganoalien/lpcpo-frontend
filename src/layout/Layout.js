import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Menu from './Menu';
import Alert from './Alert';
import ResponsiveMenu from './ResponsiveMenu';
import PopularContent from '../components/PopularContent';

export const Layout = (props) => {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [width]);
	return (
		<Fragment>
			<Helmet>
				<title>LPCPO | Inicio</title>
			</Helmet>
			<div className="w-full xl:container lg:mx-auto flex relative">
				{/* NAVIGATION */}
				{width > 639 ? (
					<Fragment>
						<div className="w-1/12 lg:w-3/12 min-h-screen border-r border-gray-200">
							<Menu />
						</div>
					</Fragment>
				) : (
					<ResponsiveMenu />
				)}
				{/* MAIN CONTENT */}
				<div className="w-full lg:w-7/12 min-h-screen">
					{props.children}
				</div>
				{width > 990 && (
					<div className="min-third-width w-full md:w-3/12 lg:w-2/12 min-h-screen pl-8 pr-4 border-l border-gray-200">
						<PopularContent />
					</div>
				)}
			</div>
			<Alert />
		</Fragment>
	);
};
