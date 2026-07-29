import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { quickActions } from "../../constants/dashboard";

const QuickActions = () => {
  return (
    <div
      className="
                bg-white
                rounded-2xl
                border
                border-gray100
                shadow-card
                p-6
            "
    >
      <h2
        className="
                    text-2xl
                    font-heading
                    font-bold
                    text-secondary
                "
      >
        Quick Actions
      </h2>

      <div className="mt-6 space-y-2">
        {quickActions.map((action) => (
          <Link key={action.title} to={action.path}>
            <Button variant="outline" className="w-full my-1 justify-center">
              {action.title}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
