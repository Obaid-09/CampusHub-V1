import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Resources from "../pages/resources/Resources";
import ResourceDetails from "../pages/resources/ResourceDetails";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UploadResource from "../pages/upload/UploadResource";
import Profile from "../pages/profile/Profile";
import About from "../pages/about/About";
import PageNotFound from "../pages/PageNotFound";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import VerifyEmail from "../pages/auth/VerifyEmail";
import EmailVerified from "../pages/auth/EmailVerified";
import PasswordResetSuccess from "../pages/auth/PasswordResetSuccess";
import MyResources from "../pages/dashboard/MyResources";
import ResourceAnalyticsPage from "../pages/dashboard/ResourceAnalyticsPage";
import EditResource from "../pages/dashboard/EditResource";
import Bookmarks from "../pages/dashboard/Bookmarks";
import Notifications from "../pages/dashboard/Notifications";
import PendingResources from "../pages/admin/PendingResources";
import AllResources from "../pages/admin/AllResources";
import Users from "../pages/admin/Users";
import Reports from "../pages/admin/Reports";
import Categories from "../pages/admin/Categories";
import AdminAnalytics from "../pages/admin/AdminAnalytics";
import AdminSettings from "../pages/admin/AdminSettings";
import AdminResourceDetails from "../pages/admin/AdminResourceDetails";
import UserDetails from "../pages/admin/UserDetails";
import Settings from "../pages/dashboard/Settings";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import ChangePassword from "../pages/dashboard/ChangePassword";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/resources" element={<Resources />} />

      <Route path="/resources/:id" element={<ResourceDetails />} />

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
      <Route
        path="/change-password"
        element={
          <ProtectedRoute>
            <ChangePassword />
          </ProtectedRoute>
        }
      />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/email-verified" element={<EmailVerified />} />

      <Route
        path="/password-reset-success"
        element={<PasswordResetSuccess />}
      />

      <Route
        path="/upload"
        element={
          <ProtectedRoute>
            <UploadResource />
          </ProtectedRoute>
        }
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
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route path="/dashboard/resources" element={<MyResources />} />

      <Route path="/dashboard/bookmarks" element={<Bookmarks />} />

      <Route path="/dashboard/resources/:id/edit" element={<EditResource />} />

      <Route
        path="/dashboard/resources/:id/analytics"
        element={<ResourceAnalyticsPage />}
      />

      <Route path="/dashboard/notifications" element={<Notifications />} />

      <Route path="/dashboard/settings" element={<Settings />} />

      {/* <Route
                path="/dashboard/resources"
                element={<MyResources />}
            />

            

            <Route
                path="/dashboard/profile"
                element={<Profile />}
            />

            

            <Route
                path="/dashboard/notifications"
                element={<Notifications />}
            /> */}

      {/* <Route
                path="/admin"
                element={
                    <AdminRoute>
                        <AdminDashboard />
                    </AdminRoute>
                }
            /> */}

      <Route path="/admin">
        <Route index element={<AdminDashboard />} />

        <Route path="pending" element={<PendingResources />} />

        <Route path="resources" element={<AllResources />} />

        <Route path="users" element={<Users />} />

        <Route path="reports" element={<Reports />} />

        <Route path="categories" element={<Categories />} />

        <Route path="analytics" element={<AdminAnalytics />} />

        <Route path="settings" element={<AdminSettings />} />
      </Route>

      <Route path="/admin/resources/:id" element={<AdminResourceDetails />} />

      <Route path="/admin/resources/:id/edit" element={<EditResource />} />

      <Route path="/admin/users/:id" element={<UserDetails />} />

      <Route
        path="/admin/resources/:id/analytics"
        element={<ResourceAnalyticsPage />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;

// 404 Page
// Loading Components
// Empty State Components
// Reusable Confirm Modal
// Toast Notification
