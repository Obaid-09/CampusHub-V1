import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Resources from "../pages/resources/Resources";
import ResourceDetails from "../pages/resources/ResourceDetails"
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UploadResource from "../pages/upload/UploadResource";
import Profile from "../pages/profile/Profile";
import About from "../pages/about/About";
import NotFound from "../pages/notFound/NotFound";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import AdminRoute from "./AdminRoute";

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/resources" element={<Resources />} />

            <Route
                path="/resources/:id"
                element={<ResourceDetails />}
            />

            <Route
                path="/login"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />

            <Route
                path="/register"
                element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                }
            />

            <Route
                path="/upload"
                element={<UploadResource />}
            />

            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />

            <Route path="/about" element={<About />} />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin"
                element={
                    <AdminRoute>
                        <AdminDashboard />
                    </AdminRoute>
                }
            />

            <Route path="*" element={<NotFound />} />

        </Routes>
    );
};

export default AppRoutes;