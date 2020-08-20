import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [authState, setAuthState] = useState({
		logged: false,
		token: null,
		id: null,
		email: null,
		role: null,
		username: null,
		isBanned: false,
		isDeleted: false
	});

	const logOut = () => {
		setAuthState({
			logged: false,
			token: null,
			id: null,
			email: null,
			role: null,
			username: null,
			isBanned: false,
			isDeleted: false
		});
	};

	return (
		<AuthContext.Provider value={{ authState, setAuthState, logOut }}>
			{children}
		</AuthContext.Provider>
	);
}
