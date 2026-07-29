import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
const AnalyticsActions = ({ resource }) => {
  const navigate = useNavigate();
  return (
    <div
      className="
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100
                p-8
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

      <div className="flex gap-4 mt-8">
        <Button
          onClick={() => navigate(`/dashboard/resources/${resource._id}/edit`)}
        >
          Edit Resource
        </Button>

        <Button
          variant="outline"
          onClick={() => navigate(`/resources/${resource._id}`)}
        >
          View Resource
        </Button>
      </div>
    </div>
  );
};

export default AnalyticsActions;
