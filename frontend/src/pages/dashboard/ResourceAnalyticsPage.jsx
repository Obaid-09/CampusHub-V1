import DashboardLayout from "../../Components/dashboard/DashboardLayout";
import AnalyticsHeader from "../../Components/dashboard/AnalyticsHeader";
import AnalyticsStats from "../../Components/dashboard/AnalyticsStats";
import AnalyticsInfo from "../../Components/dashboard/AnalyticsInfo";
import AnalyticsActions from "../../Components/dashboard/AnalyticsActions";
import AnalyticsCharts from "../../Components/dashboard/AnalyticsCharts";
import RatingDistribution from "../../Components/dashboard/RatingDistribution";
import RecentReviews from "../../Components/dashboard/RecentReviews";
import AnalyticsAudience from "../../Components/dashboard/AnalyticsAudience";
import { dummyResource } from "../../constants/resources";

const ResourceAnalyticsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <AnalyticsHeader resource={dummyResource} />
        <AnalyticsStats resource={dummyResource} />
        <AnalyticsInfo resource={dummyResource} />
        <AnalyticsActions resource={dummyResource} />
        <AnalyticsCharts />
        <div className="grid lg:grid-cols-2 gap-8">
          <RatingDistribution />
          <AnalyticsAudience />
        </div>

        <RecentReviews />
      </div>
    </DashboardLayout>
  );
};

export default ResourceAnalyticsPage;
