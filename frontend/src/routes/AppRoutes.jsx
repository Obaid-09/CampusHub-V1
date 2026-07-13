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
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import VerifyEmail from "../pages/auth/VerifyEmail";
import EmailVerified from "../pages/auth/EmailVerified";
import PasswordResetSuccess from "../pages/auth/PasswordResetSuccess";
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

            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="/reset-password/:token" element={<ResetPassword />} />

            <Route path="/verify-email" element={<VerifyEmail />} />

            <Route path="/email-verified" element={<EmailVerified />} />

            <Route path="/password-reset-success" element={<PasswordResetSuccess />} />

            <Route
                path="/upload"
                element={<UploadResource />}
            />

            {/* <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            /> */}

            <Route path="/about" element={<About />} />

            <Route
                path="/dashboard"
                element={<Dashboard />}
            />

            <Route
                path="/profile"
                element={<Profile />}
            />

            {/* <Route
                path="/dashboard/resources"
                element={<MyResources />}
            />

            <Route
                path="/dashboard/bookmarks"
                element={<Bookmarks />}
            />

            <Route
                path="/dashboard/profile"
                element={<Profile />}
            />

            <Route
                path="/dashboard/settings"
                element={<Settings />}
            />

            <Route
                path="/dashboard/notifications"
                element={<Notifications />}
            /> */}

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