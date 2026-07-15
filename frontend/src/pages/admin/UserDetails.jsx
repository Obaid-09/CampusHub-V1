import AdminLayout from "../../components/admin/AdminLayout";
import UserStatsGrid from "../../components/admin/UserStatsGrid";
import UserProfileCard from "../../components/admin/UserProfileCard";
import UserResourcesTable from "../../components/admin/UserResourcesTable";
import { adminUser } from "../../constants/admin";
import RecentDownloads from "../../components/admin/RecentDownloads";
import BookmarksActivity from "../../components/admin/BookmarksActivity";
import ReportsActivity from "../../components/admin/ReportsActivity";
import UserActions from "../../components/admin/UserActions";

const UserDetails = () => {

    return (

        <AdminLayout>

            <div className="space-y-8">

                <UserProfileCard

                    user={adminUser}

                />
                <UserStatsGrid/>

                <UserResourcesTable/>

                <div
                    className="
                        grid
                        xl:grid-cols-3
                        gap-8
                    "
                >

                    <RecentDownloads/>

                    <BookmarksActivity/>

                    <ReportsActivity/>

                </div>

                <UserActions
                    user={adminUser}
                />

            </div>

        </AdminLayout>

    );

};

export default UserDetails;