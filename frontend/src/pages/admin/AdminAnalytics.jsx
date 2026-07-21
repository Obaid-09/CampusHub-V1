import AdminLayout from "../../components/admin/AdminLayout";

import AnalyticsHeader from "../../components/admin/AnalyticsHeader";
import AnalyticsStatsGrid from "../../components/admin/AnalyticsStatsGrid";
import UploadTrendChart from "../../components/admin/UploadTrendChart";
import DownloadTrendChart from "../../components/admin/DownloadTrendChart";
import BranchDistribution from "../../components/admin/BranchDistribution";
import TopContributors from "../../components/admin/TopContributors";
import TopResources from "../../components/admin/TopResources";
import RecentActivity from "../../components/admin/RecentActivity";

const AdminAnalytics = () => {

    return (

        <AdminLayout>

            <div className="space-y-8">

                <AnalyticsHeader/>

                <AnalyticsStatsGrid/>

                <div
                  className="
                      grid
                      xl:grid-cols-2
                      gap-8
                  "
              >

                  <UploadTrendChart/>

                  <DownloadTrendChart/>

                </div>

                <div
                    className="
                        grid
                        xl:grid-cols-2
                        gap-8
                        mt-8
                    "
                >

                    <BranchDistribution/>

                    <TopContributors/>

                </div>

                <div className="mt-8">

                    <TopResources/>

                </div>

                <div className="mt-8">

                    <RecentActivity/>

                </div>

            </div>

        </AdminLayout>

    );

};

export default AdminAnalytics;
