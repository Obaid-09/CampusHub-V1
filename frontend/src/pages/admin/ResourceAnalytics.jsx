import AdminLayout from "../../Components/admin/AdminLayout";
import ResourceAnalyticsHeader from "../../Components/admin/ResourceAnalyticsHeader";
import ResourceStatsGrid from "../../Components/admin/ResourceStatsGrid";
import DownloadChart from "../../Components/admin/DownloadChart";
import RatingsChart from "../../Components/admin/RatingsChart";
import ReviewsTable from "../../Components/admin/ReviewsTable";
import DownloadUsersTable from "../../Components/admin/DownloadUsersTable";

const ResourceAnalytics = () => {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <ResourceAnalyticsHeader />

        <ResourceStatsGrid />

        <div
          className="
                        grid
                        xl:grid-cols-2
                        gap-8
                    "
        >
          <DownloadChart />

          <RatingsChart />
        </div>

        <ReviewsTable />

        <DownloadUsersTable />
      </div>
    </AdminLayout>
  );
};

export default ResourceAnalytics;
