import React, { useContext, useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import { AuthContext, AlertContext } from '../../globalState';
import {
	variantsPage,
	variantsChild,
	variantsChildSecond
} from '../../utils/animationVariants';

function Login() {
	const { setAuthState } = useContext(AuthContext);
	const { setAlertOpen, setAlertData, alertData } = useContext(AlertContext);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [step, setStep] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleClick = (e) => {
		e.preventDefault();
		setStep(2);
	};

	return (
		<motion.main
			className="custom-blackish-bg"
			variants={variantsPage}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<div className="flex flex-wrap container mx-auto h-screen">
				<div className="h-screen w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-auto flex flex-col justify-center align-center">
					<motion.h1
						className="mb-6 mx-auto w-9/12 text-6xl tracking-tight leading-10 font-extrabold sm:leading-none custom-white-c text-center mt-2"
						variants={variantsChild}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						LPCPO
					</motion.h1>
					<motion.div
						variants={variantsChildSecond}
						initial="initial"
						animate="animate"
						exit="exit"
						className="custom-black-bg rounded overflow-hidden shadow-2xl px-8 pt-6 pb-8 mb-4"
					>
						<h3 className="text-sm text-center custom-white-c">
							NRDA
						</h3>
						<h2 className="text-lg text-center custom-white-c">
							{step === 1 ? 'Iniciar Sesión' : 'Registro'}
						</h2>
						<div className="flex flex-col items-center justify-center w-full">
							{step < 2 ? (
								<div
									onClick={handleClick}
									className="custom-bg-rg text-white rounded my-8 custom-button-padding flex items-center justify-center font-bold"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="fill-current h-8 w-8 -ml-1 mr-1"
									>
										<path d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z" />
									</svg>
									<span>Iniciar con Facebook</span>
								</div>
							) : (
								<Fragment>
									<div className="mt-4 w-full mb-4">
										<label
											htmlFor="username"
											className="block custom-white-c text-sm font-bold mb-2"
										>
											Usuario
										</label>
										<input
											type="text"
											className="custom-input-lpcpo outline-none appearance-none border rounded w-full py-2 px-3 leading-tight"
											id="username"
											placeholder="Don Juan 69"
											name="username"
											value={username}
											onChange={(e) =>
												setUsername(e.target.value)
											}
											required
										/>
									</div>
									<div className="w-full mb-4">
										<label
											htmlFor="email"
											className="block custom-white-c text-sm font-bold mb-2"
										>
											Correo (para contacto)
										</label>
										<input
											type="email"
											className="custom-input-lpcpo outline-none appearance-none border rounded w-full py-2 px-3 leading-tight"
											id="email"
											placeholder="donjuan69@hotmail.com"
											name="email"
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
											required
										/>
									</div>
									<div className="w-full mb-4">
										<p className="block custom-white-c text-sm font-bold mb-2">
											Subir INE por ambos lados
										</p>
										<div className="w-full flex items-center justify-between">
											<label
												htmlFor="file_front"
												className="flex flex-col items-center justify-around ine-card cursor-pointer"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 32 32"
													className="fill-current custom-white-c"
												>
													<path d="M 5 6 C 3.355469 6 2 7.355469 2 9 L 2 23 C 2 24.644531 3.355469 26 5 26 L 27 26 C 28.644531 26 30 24.644531 30 23 L 30 9 C 30 7.355469 28.644531 6 27 6 Z M 5 8 L 27 8 C 27.566406 8 28 8.433594 28 9 L 28 23 C 28 23.566406 27.566406 24 27 24 L 5 24 C 4.433594 24 4 23.566406 4 23 L 4 9 C 4 8.433594 4.433594 8 5 8 Z M 11 10 C 8.800781 10 7 11.800781 7 14 C 7 15.113281 7.476563 16.117188 8.21875 16.84375 C 6.886719 17.746094 6 19.28125 6 21 L 8 21 C 8 19.332031 9.332031 18 11 18 C 12.667969 18 14 19.332031 14 21 L 16 21 C 16 19.28125 15.113281 17.746094 13.78125 16.84375 C 14.523438 16.117188 15 15.113281 15 14 C 15 11.800781 13.199219 10 11 10 Z M 18 11 L 18 13 L 26 13 L 26 11 Z M 11 12 C 12.117188 12 13 12.882813 13 14 C 13 15.117188 12.117188 16 11 16 C 9.882813 16 9 15.117188 9 14 C 9 12.882813 9.882813 12 11 12 Z M 18 15 L 18 17 L 26 17 L 26 15 Z M 18 19 L 18 21 L 23 21 L 23 19 Z" />
												</svg>
												<p className="custom-white-c m-0 leading-tight">
													Frente
												</p>
											</label>
											<label
												htmlFor="file_back"
												className="flex flex-col items-center justify-around ine-card cursor-pointer"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 32 32"
													className="fill-current custom-white-c"
												>
													<path d="M 5 6 C 3.355469 6 2 7.355469 2 9 L 2 23 C 2 24.644531 3.355469 26 5 26 L 27 26 C 28.644531 26 30 24.644531 30 23 L 30 9 C 30 7.355469 28.644531 6 27 6 Z M 5 8 L 27 8 C 27.566406 8 28 8.433594 28 9 L 28 11 L 5 11 L 5 13 L 28 13 L 28 23 C 28 23.566406 27.566406 24 27 24 L 5 24 C 4.433594 24 4 23.566406 4 23 L 4 9 C 4 8.433594 4.433594 8 5 8 Z" />
												</svg>
												<p className="custom-white-c m-0 leading-tight">
													Detrás
												</p>
											</label>
											<input
												type="file"
												className="hidden"
												id="file_front"
												name="file_front"
												required
											/>
											<input
												type="file"
												className="hidden"
												id="file_back"
												name="file_back"
												required
											/>
										</div>
									</div>
								</Fragment>
							)}
						</div>
						<p className="custom-white-c leading-tight text-center text-sm opacity-75">
							Si no estás registrado se evaluará tu perfil y en
							caso de ser aprobado se te enviará una notificación
							a tu correo
						</p>
					</motion.div>
					<motion.p
						variants={variantsChildSecond}
						initial="initial"
						animate="animate"
						exit="exit"
						className="text-center text-gray-700 text-xs mt-2"
					>
						&copy;2020 Diseño y Desarrollo por Rodrigo García
					</motion.p>
				</div>
			</div>
		</motion.main>
	);
}

export default Login;
