import {
    createContext,
    useEffect,
    useState,
} from "react";

import { authAPI } from "../api/auth.api";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const isAuthenticated = !!user;
    
    const fetchCurrentUser = async () => {
        try {
            const response = await authAPI.getCurrentUser();
            setUser(response.data.data);
        }

        catch (error) {
            if (error.response?.status !== 401) {
                console.error(error);
            }
            setUser(null);
        }

        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    const login = async (credentials) => {
        await authAPI.login(credentials);
        await fetchCurrentUser();
    };

    const logout = async () => {
        try {
            await authAPI.logout();
        }

        finally {
            setUser(null);
        }
    };

    return (

        <AuthContext.Provider

            value={{
                user,
                loading,
                isAuthenticated,
                login,
                logout,
                refreshUser: fetchCurrentUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;