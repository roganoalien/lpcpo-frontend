import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../sass/components/Popular.scss';

function PopularContent() {
	return (
		<Fragment>
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
				/██████╗  ██████╗ ███████╗████████╗███████╗
				██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝██╔════╝
				██████╔╝██║   ██║███████╗   ██║   ███████╗
				██╔═══╝ ██║   ██║╚════██║   ██║   ╚════██║
				██║     ╚██████╔╝███████║   ██║   ███████║
				╚═╝      ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝
			*/}
			<div className="top-posts bg-gray-100 border border-gray-200 flex flex-col">
				<h2 className="tp-title w-full font-bold border-b border-gray-200 px-4 py-2">
					Los posts + populares del día
				</h2>
				<ul className="w-full">
					{/* ITEM */}
					<li className="tp-post-item w-full border-b border-gray-200 px-4 py-2 bg-gray-100 hover:bg-gray-200">
						<Link className="flex flex-col" to="#post-url">
							<div className="meta-data text-xs text-gray-500 flex items-center justify-between mb-2">
								<span className="text-gray-600">
									@roganoalien
								</span>
								<span>Hace 1 hora</span>
							</div>
							<div className="tp-pi-data text-sm text-gray-700 flex">
								<p className="w-4/5">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. In quae reprehenderit,
									laboriosam molestiae fugit accusantium...
								</p>
								<div className="tp-pi-d-art w-1/5 overflow-hidden flex items-center justify-center">
									<img
										src="https://images.unsplash.com/photo-1559752453-b9195afa100c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
										alt="post"
										className="object-cover h-16 w-16 rounded-md border border-gray-200"
									/>
								</div>
							</div>
							<p className="post-meta-data w-full text-xs font-bold text-gray-600">
								<span className="mr-1">10 likes</span>
								<span>10 favs</span>
							</p>
							<p className="hashtags type-of-post w-full text-base">
								#viernesderecomendaciones
							</p>
						</Link>
					</li>
					{/* ITEM */}
					<li className="tp-post-item w-full px-4 py-2 bg-gray-100 hover:bg-gray-200">
						<Link className="flex flex-col" to="#post-url">
							<div className="meta-data text-xs text-gray-500 flex items-center justify-between mb-2">
								<span className="text-gray-600">
									@roganoalien
								</span>
								<span>Hace 5 minutos</span>
							</div>
							<div className="tp-pi-data text-sm text-gray-700 flex">
								<p className="w-full">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. In quae reprehenderit,
									laboriosam molestiae fugit accusantium...
								</p>
							</div>
							<p className="post-meta-data w-full text-xs font-bold text-gray-600">
								<span className="mr-1">5 likes</span>
								<span>5 favs</span>
							</p>
							<p className="hashtags type-of-post w-full text-base">
								#encuenta
							</p>
						</Link>
					</li>
					<li className="tp-post-item w-full px-4 py-2 bg-gray-100 hover:bg-gray-200">
						<Link className="flex flex-col" to="#post-url">
							<div className="meta-data text-xs text-gray-500 flex items-center justify-between mb-2">
								<span className="text-gray-600">
									@roganoalien
								</span>
								<span>Hace 5 minutos</span>
							</div>
							<div className="tp-pi-data text-sm text-gray-700 flex">
								<p className="w-full">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. In quae reprehenderit,
									laboriosam molestiae fugit accusantium...
								</p>
							</div>
							<p className="post-meta-data w-full text-xs font-bold text-gray-600">
								<span className="mr-1">5 likes</span>
								<span>5 favs</span>
							</p>
							<p className="hashtags type-of-post w-full text-base">
								#encuenta
							</p>
						</Link>
					</li>
					<li className="tp-post-item w-full px-4 py-2 bg-gray-100 hover:bg-gray-200">
						<Link className="flex flex-col" to="#post-url">
							<div className="meta-data text-xs text-gray-500 flex items-center justify-between mb-2">
								<span className="text-gray-600">
									@roganoalien
								</span>
								<span>Hace 5 minutos</span>
							</div>
							<div className="tp-pi-data text-sm text-gray-700 flex">
								<p className="w-full">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. In quae reprehenderit,
									laboriosam molestiae fugit accusantium...
								</p>
							</div>
							<p className="post-meta-data w-full text-xs font-bold text-gray-600">
								<span className="mr-1">5 likes</span>
								<span>5 favs</span>
							</p>
							<p className="hashtags type-of-post w-full text-base">
								#encuenta
							</p>
						</Link>
					</li>
					<li className="tp-post-item w-full px-4 py-2 bg-gray-100 hover:bg-gray-200">
						<Link className="flex flex-col" to="#post-url">
							<div className="meta-data text-xs text-gray-500 flex items-center justify-between mb-2">
								<span className="text-gray-600">
									@roganoalien
								</span>
								<span>Hace 5 minutos</span>
							</div>
							<div className="tp-pi-data text-sm text-gray-700 flex">
								<p className="w-full">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. In quae reprehenderit,
									laboriosam molestiae fugit accusantium...
								</p>
							</div>
							<p className="post-meta-data w-full text-xs font-bold text-gray-600">
								<span className="mr-1">5 likes</span>
								<span>5 favs</span>
							</p>
							<p className="hashtags type-of-post w-full text-base">
								#encuenta
							</p>
						</Link>
					</li>
				</ul>
			</div>
			{/*
				//..█████╗ ██████╗ ███╗   ███╗██╗███╗   ██╗███████╗
				//██╔══██╗██╔══██╗████╗ ████║██║████╗  ██║██╔════╝
				//███████║██║  ██║██╔████╔██║██║██╔██╗ ██║███████╗
				/██╔══██║██║  ██║██║╚██╔╝██║██║██║╚██╗██║╚════██║
				██║  ██║██████╔╝██║ ╚═╝ ██║██║██║ ╚████║███████║
				╚═╝  ╚═╝╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝
			*/}
			<div className="site-admins bg-gray-100 border border-gray-200 flex flex-col mt-4">
				<h2 className="tp-title w-full font-bold border-b border-gray-200 px-4 py-2">
					Administradores
				</h2>
				<ul className="w-full">
					<li className="st-admin w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 border-b border-gray-200">
						<Link className="flex" to="#user">
							<div className="w-1/5">
								<img
									src="https://pbs.twimg.com/profile_images/1275138309094866944/V4Uyvf-s_normal.jpg"
									alt="NOMBRE DE USUARIO"
									className="rounded-full h-10 w-10"
								/>
							</div>
							<div className="w-3/5 flex flex-col items-start justify-center">
								<p className="font-bold text-base m-0 leading-tight text-gray-700">
									Rodrigo García
								</p>
								<p className="text-sm m-0 leading-tight text-gray-700">
									@roganoalien
								</p>
							</div>
							<div className="w-1/5 flex items-center justify-center">
								<div className="pill rounded-full">
									<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium leading-4 bg-teal-200 text-teal-800">
										SuperAdmin
									</span>
								</div>
							</div>
						</Link>
					</li>
					<li className="st-admin w-full px-4 py-2 bg-gray-100 hover:bg-gray-200">
						<Link className="flex" to="#user">
							<div className="w-1/5">
								<img
									src="https://pbs.twimg.com/profile_images/1275138309094866944/V4Uyvf-s_normal.jpg"
									alt="NOMBRE DE USUARIO"
									className="rounded-full h-10 w-10"
								/>
							</div>
							<div className="w-3/5 flex flex-col items-start justify-center">
								<p className="font-bold text-base m-0 leading-tight text-gray-700">
									Rodrigo García
								</p>
								<p className="text-sm m-0 leading-tight text-gray-700">
									@roganoalien
								</p>
							</div>
							<div className="w-1/5 flex items-center justify-center">
								<div className="pill rounded-full">
									<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium leading-4 bg-indigo-200 text-indigo-800">
										Admin
									</span>
								</div>
							</div>
						</Link>
					</li>
				</ul>
			</div>
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
