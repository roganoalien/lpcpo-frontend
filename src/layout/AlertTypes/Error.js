import React from 'react';
import { motion } from 'framer-motion';

function Error({ title, text, buttonText, close }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1, transition: { delay: 0.25 } }}
			exit={{ opacity: 1, scale: 0 }}
			className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6 z-50"
			role="dialog"
			ariaModal="true"
			ariaLabelledby="modal-headline"
		>
			<div>
				<div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
					<svg
						className="h-6 w-6 text-red-600"
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
				<div className="mt-3 text-center sm:mt-5">
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
			<div className="mt-5 sm:mt-6">
				<span className="flex w-full rounded-md shadow-sm">
					<button
						onClick={close}
						type="button"
						className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
					>
						{buttonText}
					</button>
				</span>
			</div>
		</motion.div>
	);
}

export default Error;
