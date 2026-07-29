import AdminLayout from "../../Components/admin/AdminLayout";

import AdminHeader from "../../Components/admin/AdminHeader";
import AdminStatsGrid from "../../Components/admin/AdminStatsGrid";
import AdminQuickActions from "../../Components/admin/AdminQuickActions";
import RecentResources from "../../Components/admin/RecentResources";
import RecentUsers from "../../Components/admin/RecentUsers";
import useAdminDashboard from "../../hooks/useAdminDashboard";

const AdminDashboard = () => {
  const { dashboard, loading } = useAdminDashboard();
  return (
    <AdminLayout>
      <div className="space-y-8">
        <AdminHeader />
        <AdminStatsGrid dashboard={dashboard} loading={loading} />
        <AdminQuickActions />

        <div
          className="
                        grid
                        xl:grid-cols-2
                        gap-8
                    "
        >
          <RecentResources
            resources={dashboard.recentResources || []}
            loading={loading}
          />
          <RecentUsers users={dashboard.recentUsers || []} loading={loading} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
