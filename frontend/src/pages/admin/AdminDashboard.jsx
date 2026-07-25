import AdminLayout from "../../components/admin/AdminLayout";

import AdminHeader from "../../components/admin/AdminHeader";
import AdminStatsGrid from "../../components/admin/AdminStatsGrid";
import AdminQuickActions from "../../components/admin/AdminQuickActions";
import RecentResources from "../../components/admin/RecentResources";
import RecentUsers from "../../components/admin/RecentUsers";
import useAdminDashboard from "../../hooks/useAdminDashboard";

const AdminDashboard = () => {
  const { dashboard, loading } = useAdminDashboard();
  console.log(dashboard);

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
