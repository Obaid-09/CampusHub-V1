import AdminLayout from "../../components/admin/AdminLayout";
import Loader from "../../components/ui/Loader";
import ResourceStatusDistribution from "../../components/admin/ResourceStatusDistribution";
import AnalyticsHeader from "../../components/admin/AnalyticsHeader";
import AnalyticsStatsGrid from "../../components/admin/AnalyticsStatsGrid";
import UploadTrendChart from "../../components/admin/UploadTrendChart";
import BranchDistribution from "../../components/admin/BranchDistribution";
import ReportsOverview from "../../components/admin/ReportsOverview";
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
