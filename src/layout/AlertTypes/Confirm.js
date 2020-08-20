import React from 'react';
import { motion } from 'framer-motion';

function Confirm({ title, text, buttonText, close }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1, transition: { delay: 0.25 } }}
			exit={{ opacity: 1, scale: 0 }}
			className="relative bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6 z-50"
			role="dialog"
			ariaModal="true"
			ariaLabelledby="modal-headline"
		>
			<div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
				<button
					type="button"
					className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
					ariaLabel="Close"
					onClick={close}
				>
					<svg
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<div className="sm:flex sm:items-start">
				<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-orange-200 sm:mx-0 sm:h-10 sm:w-10">
					<svg
						className="h-6 w-6 text-yellow-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/>
					</svg>
				</div>
				<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
					<h3
						className="text-lg leading-6 font-medium text-gray-900"
						id="modal-headline"
					>
						{title}
					</h3>
					<div className="mt-2">
						<p className="text-sm leading-5 text-gray-500">
							{text}
						</p>
					</div>
				</div>
			</div>
			<div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
				<span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
					<button
						onClick={close}
						type="button"
						className="order-1 inline-flex justify-center w-full rounded-md border border-yellow-600 px-4 py-2 bg-orange-200 text-base leading-6 font-medium text-yellow-600 shadow-sm hover:bg-orange-400 hover:text-yellow-800 focus:outline-none focus:border-orange-700 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
					>
						{buttonText}
					</button>
				</span>
				<span className="order-2 mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
					<button
						onClick={close}
						type="button"
						className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
					>
						Cancelar
					</button>
				</span>
			</div>
		</motion.div>
	);
}

export default Confirm;
