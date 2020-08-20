import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AlertContext } from '../globalState';
import Confirm from './AlertTypes/Confirm';
import Success from './AlertTypes/Success';
import Error from './AlertTypes/Error';

function Alert() {
	const { alertData, alertOpen, alertResetAndClose } = useContext(
		AlertContext
	);

	console.log(alertOpen, alertData);

	if (alertOpen) {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center z-40"
			>
				<div
					onClick={alertResetAndClose}
					className="fixed inset-0 transition-opacity"
				>
					<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
				</div>
				{alertData.status === 'confirm' && (
					<Confirm {...alertData} close={alertResetAndClose} />
				)}
				{alertData.status === 'success' && (
					<Success {...alertData} close={alertResetAndClose} />
				)}
				{alertData.status === 'error' && (
					<Error {...alertData} close={alertResetAndClose} />
				)}
			</motion.div>
		);
	} else {
		return false;
	}
}

export default Alert;
