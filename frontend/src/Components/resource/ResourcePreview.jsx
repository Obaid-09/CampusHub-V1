import getThumbnail from "../../utils/getThumbnail";
import Button from "../ui/Button";
import { Eye } from "lucide-react";

const ResourcePreview = ({ resource }) => {
  return (
    <div
      className="
                bg-white
                rounded-3xl
                shadow-card
                overflow-hidden
            "
    >
      <img
        src={
          getThumbnail(resource) ||
          "https://placehold.co/600x800/F8F6F3/C87740?text=Resource"
        }
        alt={resource.title}
        className="
                    w-full
                    h-[650px]
                    object-cover
                "
      />
      <div className="p-6">
        <div
          className="
                        flex
                        justify-between
                        text-sm
                        text-gray600
                    "
        >
          <span>{resource.totalPages} Pages</span>
          <span>
            {resource.formattedFileSize ||
              (resource.fileSize
                ? `${(resource.fileSize / 1024 / 1024).toFixed(1)} MB`
                : "—")}
          </span>
        </div>
        <Button
          className="w-full mt-6"
          onClick={() =>
            window.open(resource.pdfUrl, "_blank", "noopener,noreferrer")
          }
        >
          <Eye size={18} />
          Preview PDF
        </Button>
      </div>
    </div>
  );
};

export default ResourcePreview;
