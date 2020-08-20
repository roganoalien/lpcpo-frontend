import React, { useState, createContext } from 'react';

export const AlertContext = createContext();

export function AlertProvider({ children }) {
	const [alertOpen, setAlertOpen] = useState(false);
	const [alertData, setAlertData] = useState({
		status: null,
		title: null,
		text: null,
		buttonText: null,
		withRedirect: null
	});

	const alertResetAndClose = () => {
		setAlertOpen(false);
		setAlertData({
			status: null,
			title: null,
			text: null,
			buttonText: null,
			withRedirect: null
		});
	};

	return (
		<AlertContext.Provider
			value={{
				alertData,
				alertOpen,
				alertResetAndClose,
				setAlertData,
				setAlertOpen
			}}
		>
			{children}
		</AlertContext.Provider>
	);
}
