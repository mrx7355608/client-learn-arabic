import React, { createContext, useContext, useReducer } from "react";
import authReducer from "../Actions/Reducers/authReducer";

// Auth context
const AuthContext = createContext();
// A hook to use auth context
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const initialAuthState = {
        user: {},
        error: {},
        loading: false,
    };

    const [authState, authDispatcher] = useReducer(
        authReducer,
        initialAuthState
    );

    return (
        <AuthContext.Provider value={{ authState, authDispatcher }}>
            {children}
        </AuthContext.Provider>
    );
}
