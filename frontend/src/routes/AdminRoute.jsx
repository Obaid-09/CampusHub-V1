// import { Navigate } from "react-router-dom";

// const AdminRoute = ({ children }) => {

//     const isAuthenticated = false;
//     const role = "student";

//     if (!isAuthenticated) {
//         return <Navigate to="/login" replace />;
//     }

//     if (role !== "admin") {
//         return <Navigate to="/" replace />;
//     }

//     return children;
// };

// export default AdminRoute;

import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {

    const {
        user,
        loading,
        isAuthenticated,
    } = useAuth();

    if (loading) {
        return null;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (user.role !== "admin") {
        return <Navigate to="/" replace />;
    }
    return children;

};

export default AdminRoute;