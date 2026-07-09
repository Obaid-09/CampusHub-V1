import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {

    const isAuthenticated = false;
    const role = "student";

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (role !== "admin") {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default AdminRoute;