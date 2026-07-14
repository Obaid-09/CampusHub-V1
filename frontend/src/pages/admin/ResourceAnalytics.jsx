import AdminLayout from "../../components/admin/AdminLayout";

import ResourceAnalyticsHeader from "../../components/admin/ResourceAnalyticsHeader";

import ResourceStatsGrid from "../../components/admin/ResourceStatsGrid";

import DownloadChart from "../../components/admin/DownloadChart";

import RatingsChart from "../../components/admin/RatingsChart";

import ReviewsTable from "../../components/admin/ReviewsTable";

import DownloadUsersTable from "../../components/admin/DownloadUsersTable";

const ResourceAnalytics = () => {

    return (

        <AdminLayout>

            <div className="space-y-8">

                <ResourceAnalyticsHeader/>

                <ResourceStatsGrid/>

                <div
                    className="
                        grid
                        xl:grid-cols-2
                        gap-8
                    "
                >

                    <DownloadChart/>

                    <RatingsChart/>

                </div>

                <ReviewsTable/>

                <DownloadUsersTable/>

            </div>

        </AdminLayout>

    );

};

export default ResourceAnalytics;