import AdminLayout from "../../Components/admin/AdminLayout";
import Loader from "../../Components/ui/Loader";
import ResourceStatusDistribution from "../../Components/admin/ResourceStatusDistribution";
import AnalyticsHeader from "../../Components/admin/AnalyticsHeader";
import AnalyticsStatsGrid from "../../Components/admin/AnalyticsStatsGrid";
import UploadTrendChart from "../../Components/admin/UploadTrendChart";
import BranchDistribution from "../../Components/admin/BranchDistribution";
import ReportsOverview from "../../Components/admin/ReportsOverview";
import useAdminAnalytics from "../../hooks/useAdminAnalytics";

const AdminAnalytics = () => {
  const { analytics, loading } = useAdminAnalytics();

  if (loading || !analytics) {
    return (
      <AdminLayout>
        <div className="flex justify-center py-20">
          <Loader />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        <AnalyticsHeader />

        <AnalyticsStatsGrid platform={analytics.platform} />

        <div className="grid xl:grid-cols-2 gap-8">
          <UploadTrendChart uploads={analytics.uploadsPerMonth} />

          <BranchDistribution branches={analytics.branchWiseResources} />
        </div>

        <div className="grid xl:grid-cols-2 gap-8">
          <ResourceStatusDistribution data={analytics.statusWiseResources} />

          <ReportsOverview reports={analytics.reports} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;
