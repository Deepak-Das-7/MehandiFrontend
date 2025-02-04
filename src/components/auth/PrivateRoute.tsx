import React from 'react';
import { Navigate } from 'react-router-dom';
import { useLoggedUserContext } from '../../context/Auth';

// A private route that checks if the user is logged in.
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const { isLoggedIn } = useLoggedUserContext();

    if (!isLoggedIn) {
        // Redirect to the login page if not authenticated
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default PrivateRoute;
