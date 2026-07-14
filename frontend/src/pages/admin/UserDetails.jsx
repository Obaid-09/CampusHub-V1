import AdminLayout from "../../components/admin/AdminLayout";
import UserStatsGrid from "../../components/admin/UserStatsGrid";
import UserProfileCard from "../../components/admin/UserProfileCard";

import { adminUser } from "../../constants/admin";

const UserDetails = () => {

    return (

        <AdminLayout>

            <div className="space-y-8">

                <UserProfileCard

                    user={adminUser}

                />
                <UserStatsGrid/>

            </div>

        </AdminLayout>

    );

};

export default UserDetails;