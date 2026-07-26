import AdminLayout from "../../components/admin/AdminLayout";
import UserStatsGrid from "../../components/admin/UserStatsGrid";
import UserProfileCard from "../../components/admin/UserProfileCard";
import UserResourcesTable from "../../components/admin/UserResourcesTable";
import useAdminUser from "../../hooks/useAdminUser";
// import RecentDownloads from "../../components/admin/RecentDownloads";
// import BookmarksActivity from "../../components/admin/BookmarksActivity";
// import ReportsActivity from "../../components/admin/ReportsActivity";
import UserActions from "../../components/admin/UserActions";
import { useState, useEffect } from "react";
import { successToast, errorToast } from "../../utils/toast.js";
import { adminAPI } from "../../api/admin.api.js";
import PromoteUserModal from "../../components/admin/PromoteUserModal";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { user, loading, refreshUser } = useAdminUser();
  const [showPromote, setShowPromote] = useState(false);
  const [role, setRole] = useState(user?.role || "");
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setRole(user.role);
    }
  }, [user]);
  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-16 text-gray500">Loading user...</div>
      </AdminLayout>
    );
  }

  if (!user) {
    return (
      <AdminLayout>
        <div className="text-center py-16 text-red-500">User not found.</div>
      </AdminLayout>
    );
  }

  const handlePromote = async () => {
    try {
      await adminAPI.promoteUser(user._id, role);

      successToast("Role updated successfully.");

      setShowPromote(false);

      refreshUser();
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to update role.");
    }
  };

  const handleDelete = async () => {
    try {
      await adminAPI.deleteUser(user._id);
      successToast("User deleted successfully.");
      navigate("/admin/users");
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to delete user.");
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <UserProfileCard user={user} />
        <UserStatsGrid user={user} />

        <UserResourcesTable resources={user.uploadedResources} />

        {/* <div
          className="
                        grid
                        xl:grid-cols-3
                        gap-8
                    "
        >
          <RecentDownloads />

          <BookmarksActivity />

          <ReportsActivity />
        </div> */}

        <UserActions
          user={user}
          onPromote={() => setShowPromote(true)}
          onDelete={handleDelete}
        />

        <PromoteUserModal
          open={showPromote}
          role={role}
          setRole={setRole}
          onClose={() => setShowPromote(false)}
          onPromote={handlePromote}
        />
      </div>
    </AdminLayout>
  );
};

export default UserDetails;
