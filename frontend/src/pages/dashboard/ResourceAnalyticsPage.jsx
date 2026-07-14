import DashboardLayout from "../../components/dashboard/DashboardLayout";
import AnalyticsHeader from "../../components/dashboard/AnalyticsHeader";
import AnalyticsStats from "../../components/dashboard/AnalyticsStats";
import AnalyticsInfo from "../../components/dashboard/AnalyticsInfo";
import AnalyticsActions from "../../components/dashboard/AnalyticsActions";
import AnalyticsCharts from "../../components/dashboard/AnalyticsCharts";
import RatingDistribution from "../../components/dashboard/RatingDistribution";
import RecentReviews from "../../components/dashboard/RecentReviews";
import AnalyticsAudience from "../../components/dashboard/AnalyticsAudience";
import { dummyResource } from "../../constants/resources";

const ResourceAnalyticsPage = () => {

    return (

        <DashboardLayout>

            <div className="space-y-8">

                <AnalyticsHeader
                    resource={dummyResource}
                />

                <AnalyticsStats
                    resource={dummyResource}
                />

                <AnalyticsInfo
                    resource={dummyResource}
                />

                <AnalyticsActions
                    resource={dummyResource}
                />

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
