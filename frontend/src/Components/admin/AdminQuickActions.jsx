import { quickActions } from "../../constants/admin";
import QuickActionCard from "./QuickActionCard";

const AdminQuickActions = () => {
  return (
    <div>
      <h2
        className="
                    text-2xl
                    font-heading
                    font-bold
                    text-secondary

                    mb-6
                "
      >
        Quick Actions
      </h2>

      <div
        className="
                    grid

                    md:grid-cols-2
                    xl:grid-cols-4

                    gap-6
                "
      >
        {quickActions.map((action) => (
          <QuickActionCard key={action.title} action={action} />
        ))}
      </div>
    </div>
  );
};

export default AdminQuickActions;
