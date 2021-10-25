import React, { useState } from 'react';

function Darkmode() {
	const [active, setActive] = useState(false);

	const activateDark = () => {
		setActive(!active);
	};

	return (
		<span
			onClick={activateDark}
			role="checkbox"
			tabIndex="0"
			aria-checked="false"
			className={`relative inline-flex flex-shrink-0 h-7 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-none ${
				active ? 'custom-bg-rg' : 'bg-gray-300'
			}`}
		>
			<span
				aria-hidden="true"
				className={`${
					active ? 'translate-x-5' : 'translate-x-0'
				} relative inline-block h-6 w-6 rounded-full bg-white shadow-lg transform transition ease-in-out duration-200`}
			>
				<span
					className={`${
						active
							? 'opacity-0 ease-out duration-100'
							: 'opacity-100 ease-in duration-200'
					} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
				>
					<svg
						className="h-3 w-3 custom-c-rg fill-current"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path fill="none" d="M0 0h24v24H0z" />
						<path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
					</svg>
				</span>
				<span
					className={`${
						active
							? 'opacity-100 ease-in duration-200'
							: 'opacity-0 ease-out duration-100'
					} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
				>
					<svg
						className="h-3 w-3 custom-c-rg fill-current"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path fill="none" d="M0 0h24v24H0z" />
						<path d="M9.822 2.238a9 9 0 0 0 11.94 11.94C20.768 18.654 16.775 22 12 22 6.477 22 2 17.523 2 12c0-4.775 3.346-8.768 7.822-9.762zm8.342.053L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z" />
					</svg>
				</span>
			</span>
		</span>
	);
}

export default Darkmode;
