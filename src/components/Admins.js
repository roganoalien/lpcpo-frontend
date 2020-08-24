import React from 'react';
import { Link } from 'react-router-dom';

function Admins() {
	return (
		<div className="site-admins bg-gray-100 border border-gray-200 flex flex-col mt-4">
			<h2 className="tp-title w-full font-bold border-b border-gray-200 px-4 py-2">
				Administradores
			</h2>
			<ul className="w-full">
				<li className="st-admin w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 border-b border-gray-200">
					<Link
						className="flex items-center justify-start"
						to="#user"
					>
						<div className="mr-4">
							<img
								src="https://pbs.twimg.com/profile_images/1275138309094866944/V4Uyvf-s_normal.jpg"
								alt="NOMBRE DE USUARIO"
								className="rounded-full h-8 w-8"
							/>
						</div>
						<div className="w-2/5 flex flex-col items-start justify-center">
							<p className="truncate font-bold text-sm m-0 leading-tight text-gray-700">
								Rodrigo García
							</p>
							<p className="truncate text-xs m-0 leading-tight text-gray-700">
								@roganoalien
							</p>
						</div>
						<div className="flex items-center justify-start">
							<div className="pill rounded-full">
								<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium leading-4 bg-teal-200 text-teal-800">
									SuperAdmin
								</span>
							</div>
						</div>
					</Link>
				</li>
				<li className="st-admin w-full px-4 py-2 bg-gray-100 hover:bg-gray-200">
					<Link
						className="flex items-center justify-start"
						to="#user"
					>
						<div className="mr-4">
							<img
								src="https://pbs.twimg.com/profile_images/1275138309094866944/V4Uyvf-s_normal.jpg"
								alt="NOMBRE DE USUARIO"
								className="rounded-full h-8 w-8"
							/>
						</div>
						<div className="w-2/5 flex flex-col items-start justify-center">
							<p className="truncate font-bold text-sm m-0 leading-tight text-gray-700">
								Rodrigo García
							</p>
							<p className="truncate text-xs m-0 leading-tight text-gray-700">
								@roganoalien
							</p>
						</div>
						<div className="flex items-center justify-start">
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
	);
}

export default Admins;
