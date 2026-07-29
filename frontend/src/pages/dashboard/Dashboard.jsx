import DashboardLayout from "../../Components/dashboard/DashboardLayout";
import useDashboard from "../../hooks/useDashboard";
import WelcomeCard from "../../Components/dashboard/WelcomeCard";
import StatsGrid from "../../Components/dashboard/StatsGrid";
import QuickActions from "../../Components/dashboard/QuickActions";
import RecentActivity from "../../Components/dashboard/RecentActivity";
import ProgressCard from "../../Components/dashboard/ProgressCard";
import TrendingResources from "../../Components/dashboard/TrendingResources";
import RecommendedResources from "../../Components/dashboard/RecommendedResources";
import UpcomingEvents from "../../Components/dashboard/UpcomingEvents";

const Dashboard = () => {
  const { dashboard, loading } = useDashboard();

  return (
    <DashboardLayout>
      <WelcomeCard />

      <StatsGrid stats={dashboard.stats} loading={loading} />

      <div
        className="
                    mt-8
                    grid
                    lg:grid-cols-3
                    gap-8
                "
      >
        <div className="lg:col-span-2">
          <RecentActivity
            activities={dashboard.recentActivity}
            loading={loading}
          />
        </div>

        <QuickActions />
      </div>

      <div
        className="
                    mt-8
                    grid
                    lg:grid-cols-2
                    gap-8
                "
      >
        <ProgressCard progress={dashboard.progress} loading={loading} />
      </div>

      <TrendingResources
        resources={dashboard.trendingResources}
        loading={loading}
      />

      <RecommendedResources
        resources={dashboard.recommendedResources}
        loading={loading}
      />

      <div className="mt-8">
        <UpcomingEvents />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
