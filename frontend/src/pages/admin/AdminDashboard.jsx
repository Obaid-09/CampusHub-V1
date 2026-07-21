import AdminLayout from "../../components/admin/AdminLayout";

import AdminHeader from "../../components/admin/AdminHeader";
import AdminStatsGrid from "../../components/admin/AdminStatsGrid";
import AdminQuickActions from "../../components/admin/AdminQuickActions";
import RecentResources from "../../components/admin/RecentResources";
import RecentUsers from "../../components/admin/RecentUsers";

const AdminDashboard = () => {

    return (
        <AdminLayout>
            <div className="space-y-8">
                <AdminHeader/>
                <AdminStatsGrid/>
                <AdminQuickActions/>

                <div
                    className="
                        grid
                        xl:grid-cols-2
                        gap-8
                    "
                >
                    <RecentResources/>
                    <RecentUsers/>
                </div>
            </div>

        </AdminLayout>

    );

};

export default AdminDashboard;