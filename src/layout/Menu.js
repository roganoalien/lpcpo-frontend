import React from 'react';
import { NavLink } from 'react-router-dom';

import '../sass/components/Menu.scss';

function Menu() {
	return (
		<nav className="h-full menu-contianer flex flex-col">
			<div className="flex flex-col sticky top-0 pt-2">
				<h1 className="text-4xl hidden lg:block font-black mb-2 fake-logo px-4">
					LPCPO
				</h1>
				<h1 className="text-2xl block lg:hidden font-black mb-2 fake-logo w-full text-center">
					PO
				</h1>
				<NavLink
					to="/inicio"
					className="nav-item group flex rounded items-center justify-center lg:justify-start px-4 py-4 text-sm leading-5 font-medium hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
					activeClassName="isActive"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="fill-current flex-shrink-0 lg:-ml-1 lg:mr-3 h-6 w-6"
					>
						<path d="M3,13h1v2v5c0,1.103,0.897,2,2,2h3h6h3c1.103,0,2-0.897,2-2v-5v-2h1c0.404,0,0.77-0.244,0.924-0.617 c0.155-0.374,0.069-0.804-0.217-1.09l-9-9c-0.391-0.391-1.023-0.391-1.414,0l-9,9c-0.286,0.286-0.372,0.716-0.217,1.09 C2.23,12.756,2.596,13,3,13z M10,20v-5h4v5H10z M12,4.414l6,6V15l0,0l0.001,5H16v-5c0-1.103-0.897-2-2-2h-4c-1.103,0-2,0.897-2,2v5 H6v-5v-3v-1.586L12,4.414z" />
					</svg>
					<span class="hidden lg:block truncate text-lg font-bold">
						Inicio
					</span>
					<span class="notification-container ml-auto inline-block py-0.5 px-3 text-xs leading-4 rounded-full transition ease-in-out duration-150">
						15
					</span>
				</NavLink>
				<NavLink
					to="/notificaciones"
					className="nav-item group flex rounded items-center justify-center lg:justify-start px-4 py-4 text-sm leading-5 font-medium hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
					activeClassName="isActive"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						className="fill-current flex-shrink-0 lg:-ml-1 lg:mr-3 h-6 w-6"
					>
						<circle cx="18" cy="6" r="3" />
						<path d="M18,19H5V6h8c0-0.712,0.153-1.387,0.422-2H5C3.897,4,3,4.897,3,6v13c0,1.103,0.897,2,2,2h13c1.103,0,2-0.897,2-2v-8.422 C19.387,10.847,18.712,11,18,11V19z" />
					</svg>
					<span class="hidden lg:block truncate text-lg font-bold">
						Notificaciones
					</span>
					<span class="notification-container nothing ml-auto inline-block py-0.5 px-3 text-xs leading-4 rounded-full transition ease-in-out duration-150">
						0
					</span>
				</NavLink>
				<NavLink
					to="/guardado"
					className="nav-item group flex rounded items-center justify-center lg:justify-start px-4 py-4 text-sm leading-5 font-medium hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
					activeClassName="isActive"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="fill-current flex-shrink-0 lg:-ml-1 lg:mr-3 h-6 w-6"
					>
						<path d="M18,2H6C4.897,2,4,2.897,4,4v5.276V10v12l8-4.572L20,22V10V9.276V4C20,2.897,19.103,2,18,2z M18,18.553l-6-3.428l-6,3.428 V10V9.276V4h12v5.276V10V18.553z" />
					</svg>
					<span class="hidden lg:block truncate text-lg font-bold">
						Guardados
					</span>
					<span class="notification-container nothing ml-auto inline-block py-0.5 px-3 text-xs leading-4 rounded-full transition ease-in-out duration-150">
						0
					</span>
				</NavLink>
				<NavLink
					to="/perfil"
					className="nav-item group flex rounded items-center justify-center lg:justify-start px-4 py-4 text-sm leading-5 font-medium hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
					activeClassName="isActive"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="fill-current flex-shrink-0 lg:-ml-1 lg:mr-3 h-6 w-6"
					>
						<circle cx="12" cy="7" r="3" fill="none" />
						<path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
					</svg>
					<span class="hidden lg:block truncate text-lg font-bold">
						Perfil
					</span>
				</NavLink>
				<div className="w-full flex items-center justify-center lg:justify-start px-0 lg:px-4 mt-4">
					<button
						type="button"
						className="post-anywhere font-bold rounded-full text-white flex items-center justify-center transition duration-150"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							className="fill-current lg:-ml-1 lg:mr-2 h-6 w-6"
						>
							<path d="M25 4.03c-.765 0-1.517.3-2.094.876L13 14.78l-.22.22-.06.313-.69 3.5-.31 1.468 1.467-.31 3.5-.69.313-.06.22-.22 9.874-9.906c1.153-1.154 1.153-3.034 0-4.188-.577-.577-1.33-.875-2.094-.875zm0 1.94c.235 0 .464.12.688.343.446.446.446.928 0 1.375L16 17.374l-1.72.344.345-1.72 9.688-9.688c.223-.223.452-.343.687-.343zM4 8v20h20V14.812l-2 2V26H6V10h9.188l2-2H4z" />
						</svg>
						<span class="hidden lg:block">Crear Post</span>
					</button>
				</div>
				<div className="my-profile w-full cursor-pointer mt-4 flex items-center justify-start">
					<img
						className="h-10 w-10 mx-4"
						src="https://pbs.twimg.com/profile_images/1275138309094866944/V4Uyvf-s_normal.jpg"
						alt="Rodrigo García"
					/>
					<div className="intel font-medium hidden lg:block">
						<p className="pill truncate text-sm">superadmin</p>
						<p className="truncate name text-base">
							Rodrigo García
						</p>
						<p className="truncate username text-sm">
							@roganoalien
						</p>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="ml-4 h-6 w-6 hidden lg:block"
					>
						<path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
					</svg>
				</div>
			</div>
		</nav>
	);
}

export default Menu;
