import { createContext, useState, useContext } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
	const [user, setUser] = useState(null);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

function useUser() {
	// returns the user object and a setter
	return useContext(UserContext);
}

export { UserProvider, useUser };
