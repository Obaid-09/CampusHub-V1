// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {

//     const isAuthenticated = false;

//     return isAuthenticated
//         ? children
//         : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;

import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {

    const {
        loading,
        isAuthenticated,
    } = useAuth();

    const location = useLocation();
    useEffect(() => {
        if (!loading && !isAuthenticated) {
            toast("Login required to access this page.");
        }
    }, [
        loading,
        isAuthenticated,
    ]);

    if (loading) {
        return null;
        // Later:
        // return <PageSkeleton/>
    }

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/login"
                replace
                state={{
                    from: location,
                }}
            />
        );
    }
    return children;
};

export default ProtectedRoute;