import ChartCard from "./ChartCard";
import { recentActivities } from "../../constants/admin";

const RecentActivity = () => {
  return (
    <ChartCard title="Recent Activity">
      <div className="space-y-6">
        {recentActivities.map((activity, index) => (
          <div
            key={index}
            className="
                                flex
                                justify-between
                            "
          >
            <span>{activity.action}</span>

            <span className="text-gray500">{activity.time}</span>
          </div>
        ))}
      </div>
    </ChartCard>
  );
};

export default RecentActivity;
