import React from 'react';
import { Link } from 'react-router-dom';

function PopularPosts() {
	return (
		<div className="top-posts bg-gray-100 border border-gray-200 flex flex-col mt-4">
			<h2 className="tp-title w-full font-bold border-b border-gray-200 px-4 py-2">
				Los posts + populares del día
			</h2>
			<ul className="w-full">
				{/* ITEM */}
				<li className="tp-post-item w-full border-b border-gray-200 px-4 py-2 bg-gray-100 hover:bg-gray-200">
					<Link className="flex flex-col" to="#post-url">
						<div className="meta-data text-xs text-gray-500 flex items-center justify-between mb-2">
							<span className="text-gray-600">@roganoalien</span>
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
							<span className="text-gray-600">@roganoalien</span>
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
							<span className="text-gray-600">@roganoalien</span>
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
							<span className="text-gray-600">@roganoalien</span>
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
							<span className="text-gray-600">@roganoalien</span>
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
	);
}

export default PopularPosts;
