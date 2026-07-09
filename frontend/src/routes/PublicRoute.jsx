import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {

    const isAuthenticated = false;

    return !isAuthenticated
        ? children
        : <Navigate to="/dashboard" replace />;
};

export default PublicRoute;