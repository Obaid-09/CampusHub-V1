import DashboardLayout from "../../components/dashboard/DashboardLayout";

import WelcomeCard from "../../components/dashboard/WelcomeCard";
import StatsGrid from "../../components/dashboard/StatsGrid";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentActivity from "../../components/dashboard/RecentActivity";
import ProgressCard from "../../Components/dashboard/ProgressCard";
import TrendingResources from "../../Components/dashboard/TrendingResources";
import RecommendedResources from "../../Components/dashboard/RecommendedResources";
import UpcomingEvents from "../../Components/dashboard/UpcomingEvents";
const Dashboard = () => {

    return (

        <DashboardLayout>

            <WelcomeCard />

            <StatsGrid />

            <div
                className="
                    mt-8
                    grid
                    lg:grid-cols-3
                    gap-8
                "
            >

                <div className="lg:col-span-2">

                    <RecentActivity />

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

                <ProgressCard/>

            </div>

            <TrendingResources/>

            <RecommendedResources/>


            <div className="mt-8">

                <UpcomingEvents/>

            </div>

        </DashboardLayout>

    );

};

export default Dashboard;