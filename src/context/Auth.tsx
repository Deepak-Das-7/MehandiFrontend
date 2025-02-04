import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { User } from '../utils/types';
import { jwtDecode } from "jwt-decode";


interface LoggedUserContextType {
    user: User | null;
    isLoggedIn: boolean;
    isAdmin: boolean;
    loading: boolean;
    error: string | null;
    setUser: (user: User) => void;
    logout: () => void;
}

const LoggedUserContext = createContext<LoggedUserContextType | undefined>(undefined);

export const LoggedUserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);



    // Fetch user details from the local storage or from the server (if necessary)
    const fetchUserFromStorage = () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            if (token) {
                // Decode the JWT token to get user details (use jwt-decode if needed)
                const decoded: User = jwtDecode(token); // Assuming jwt-decode is installed and used
                setIsAdmin(decoded.isAdmin);
                setIsLoggedIn(true);
                setUser({
                    _id: decoded._id,
                    name: decoded.name,
                    email: decoded.email,
                    isAdmin: decoded.isAdmin,
                    phone: decoded.phone,
                });
            }
        } catch (err: any) {
            setError('Failed to load user data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserFromStorage();
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
        window.location.href = '/'; // Redirect to homepage after refresh

        setUser(null);
    };

    return (
        <LoggedUserContext.Provider value={{ user, isAdmin, isLoggedIn, loading, error, setUser, logout }}>
            {children}
        </LoggedUserContext.Provider>
    );
};

// Custom hook to use the LoggedUserContext
export const useLoggedUserContext = () => {
    const context = useContext(LoggedUserContext);
    if (!context) {
        throw new Error('useLoggedUserContext must be used within a LoggedUserProvider');
    }
    return context;
};
