import { Upload, Download, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { formatTimeAgo } from "../../utils/formatTimeAgo";

const icons = {
  upload: Upload,
  download: Download,
  view: Eye,
};

const ActivityItem = ({ activity }) => {
  const navigate = useNavigate();

  const Icon = icons[activity.type] || Eye;

  return (
    <div
      onClick={() => navigate(`/resources/${activity.resourceId}`)}
      className="
                flex
                gap-5
                cursor-pointer
                hover:bg-gray50
                rounded-xl
                transition-all
                duration-200
                p-2
            "
    >
      <div
        className="
                    w-12
                    h-12
                    rounded-full
                    bg-primary/10
                    flex
                    items-center
                    justify-center
                    text-primary
                    flex-shrink-0
                "
      >
        <Icon size={22} />
      </div>

      <div className="flex-1">
        <h3
          className="
                        font-semibold
                        text-secondary
                    "
        >
          {activity.message}
        </h3>

        <p
          className="
                        mt-1
                        text-sm
                        text-gray500
                    "
        >
          {/* {new Date(activity.time).toLocaleString()} */}
          {formatTimeAgo(activity.time)}
        </p>
      </div>
    </div>
  );
};

export default ActivityItem;
