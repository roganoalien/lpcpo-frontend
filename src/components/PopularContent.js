import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import PopularPosts from './PopularPosts';
import Admins from './Admins';

import '../sass/components/Popular.scss';

function PopularContent() {
	return (
		<Fragment>
			{/* 
				███████╗███████╗ █████╗ ██████╗  ██████╗██╗  ██╗
				██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝██║  ██║
				███████╗█████╗  ███████║██████╔╝██║     ███████║
				╚════██║██╔══╝  ██╔══██║██╔══██╗██║     ██╔══██║
				███████║███████╗██║  ██║██║  ██║╚██████╗██║  ██║
				╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
			*/}
			<form className="search sticky top-0 bg-white py-5">
				<div className="relative">
					<div className="text-gray-500 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="fill-current h-5 w-5"
							viewBox="0 0 24 24"
						>
							<path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
						</svg>
					</div>
					<input
						type="text"
						className="bg-gray-100 text-gray-500 custom-input-lpcpo outline-none appearance-none border rounded w-full py-2 pl-10 pr-3 leading-tight rounded-full"
						id="search"
						placeholder="Buscar contenido por usuario"
						name="search"
					/>
				</div>
			</form>
			<div className="rules-site bg-gray-100 border border-gray-200 flex flex-col items-center justify-center">
				<h2 className="tp-title w-full font-bold border-b border-gray-200 px-4 py-2">
					Reglas del sitio
				</h2>
				<button
					className="show-rules my-2 rounded-full w-6/12 my-4 transition duration-150"
					type="button"
				>
					Ver todas las reglas
				</button>
			</div>
			{/*
				/██████╗  ██████╗ ███████╗████████╗███████╗
				██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝██╔════╝
				██████╔╝██║   ██║███████╗   ██║   ███████╗
				██╔═══╝ ██║   ██║╚════██║   ██║   ╚════██║
				██║     ╚██████╔╝███████║   ██║   ███████║
				╚═╝      ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝
			*/}
			{/* <PopularPosts /> */}
			{/*
				//..█████╗ ██████╗ ███╗   ███╗██╗███╗   ██╗███████╗
				//██╔══██╗██╔══██╗████╗ ████║██║████╗  ██║██╔════╝
				//███████║██║  ██║██╔████╔██║██║██╔██╗ ██║███████╗
				/██╔══██║██║  ██║██║╚██╔╝██║██║██║╚██╗██║╚════██║
				██║  ██║██████╔╝██║ ╚═╝ ██║██║██║ ╚████║███████║
				╚═╝  ╚═╝╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝
			*/}
			<Admins />
			{/*
				██╗   ██╗██████╗ ██╗     ███████╗
				██║   ██║██╔══██╗██║     ██╔════╝
				██║   ██║██████╔╝██║     ███████╗
				██║   ██║██╔══██╗██║     ╚════██║
				╚██████╔╝██║  ██║███████╗███████║
				/╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
			*/}
			<div className="site-pages flex mt-4 mb-10">
				<ul className="w-full flex flex-wrap">
					<li className="mr-3">
						<Link to="site-page" className="text-sm">
							Términos y condiciones
						</Link>
					</li>
					<li className="mr-3">
						<Link to="site-page" className="text-sm">
							Privacidad
						</Link>
					</li>
					<li className="mr-3">
						<Link to="site-page" className="text-sm">
							Contacto
						</Link>
					</li>
				</ul>
			</div>
		</Fragment>
	);
}

export default PopularContent;
