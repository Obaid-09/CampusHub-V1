import { Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Badge from "../ui/Badge";

const MiniResourceCard = ({ resource }) => {
  const navigate = useNavigate();

  return (
    // <div
    //     onClick={() => navigate(`/resources/${resource._id}`)}
    //     className="
    //     flex-shrink-0
    //     w-[260px]
    //     bg-white
    //     rounded-2xl
    //     border
    //     border-gray100
    //     shadow-card
    //     overflow-hidden
    //     cursor-pointer
    //     transition-all
    //     hover:-translate-y-1
    //     hover:shadow-xl
    // "
    // >
    <div
      onClick={() => navigate(`/resources/${resource._id}`)}
      className="
                w-[260px]
                flex-shrink-0
                bg-white
                rounded-2xl
                border
                border-gray100
                shadow-card
                overflow-hidden
                cursor-pointer
                transition-all
                hover:-translate-y-1
                hover:shadow-xl
            "
    >
      <img
        src={resource.thumbnail}
        alt={resource.title}
        className="
                    h-36
                    w-full
                    object-cover
                "
      />

      <div className="p-4">
        <Badge>{resource.type}</Badge>

        <h3
          className="
                        mt-3
                        text-lg
                        font-heading
                        font-semibold
                        text-secondary
                        line-clamp-2
                    "
        >
          {resource.title}
        </h3>

        <p className="mt-2 text-sm text-gray500">{resource.subject}</p>

        <p className="text-xs text-gray400">{resource.courseCode}</p>

        <div
          className="
                        mt-4
                        flex
                        items-center
                        justify-between
                    "
        >
          <span
            className="
                            flex
                            items-center
                            gap-2
                            text-gray600
                            text-sm
                        "
          >
            <Download size={16} />

            {resource.downloads}
          </span>

          <span
            className="
                            text-primary
                            text-sm
                            font-medium
                        "
          >
            Open →
          </span>
        </div>
      </div>
    </div>
  );
};

export default MiniResourceCard;
