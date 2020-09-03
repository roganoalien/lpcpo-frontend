import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import PopularPosts from './PopularPosts';
import Admins from './Admins';

import '../sass/components/Popular.scss';
import RuleComponent from './RuleComponent';

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
			<div className="site-pages flex mt-4 mb-4">
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
			<div className="rules-site bg-gray-100 border border-gray-200 flex flex-col items-center justify-center mb-10">
				<h2 className="tp-title w-full font-bold border-b border-gray-200 px-4 py-2">
					Reglas del sitio
				</h2>
				<p className="ad p-4 leading-tight text-gray-700">
					Si se infrige alguna de las siguientes reglas te haría
					merecedor de un baneo temporal o uno permanente. Por favor
					lee las reglas y siempre respeta a los demás miembros.
				</p>
				<button className="my-1 py-3 w-full transition duration-150 bg-gray-200 text-gray-600 text-sm">
					Ocultar reglas
				</button>
				{/* <button
					className="show-rules my-2 rounded-full w-6/12 my-4 transition duration-150"
					type="button"
				>
					Ver todas las reglas
				</button> */}
				<motion.div className="hiding-rules">
					<RuleComponent number={1}>
						<p className="text-gray-600">
							No promoción a eventos, otras páginas o grupos sin
							previo aviso a la administración
						</p>
					</RuleComponent>
					<RuleComponent number={2}>
						<p className="text-gray-600">
							Los miembros del grupo deben cuidar de no faltarse
							al respeto o ejercer bullying contra otro miembro
							del grupo, si no estás de acuerdo o no te gusta lo
							que ves pasa de largo.
						</p>
					</RuleComponent>
					<RuleComponent number={3}>
						<p className="text-gray-600">
							No quemones ni screenshots, si ocurre algún
							incidente dentro o fuera del grupo, con algún otro
							miembro debes dirigirte a cualquier integrante de la
							administración para solucionarlo.
						</p>
					</RuleComponent>
					<RuleComponent number={4}>
						<p className="text-gray-600">
							No se permiten las ventas de packs ni cualquier tipo
							de venta, LPCPO NO ES UN GRUPO DE VENTAS.
						</p>
					</RuleComponent>
					<RuleComponent number={5}>
						<p className="text-gray-600">
							No Grupos de Whatsapp, LPCPO tiene sus propios
							grupos, por lo que no se permite generar grupos de
							WA alternos a los oficiales.
						</p>
					</RuleComponent>
				</motion.div>
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
		</Fragment>
	);
}

export default PopularContent;
