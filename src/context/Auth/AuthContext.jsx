import { createContext } from "react";

import useAuth from "../../hooks/useAuth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const { loading, user, isAuth, handleLogin, handleLogout } = useAuth();
	
	return (
		<AuthContext.Provider
			value={{ loading, user, isAuth, handleLogin, handleLogout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export {AuthContext, AuthProvider};
