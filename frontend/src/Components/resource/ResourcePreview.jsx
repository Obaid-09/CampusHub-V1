import Button from "../ui/Button";
import { Eye } from "lucide-react";

const ResourcePreview = ({
    resource,
}) => {

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
                src={resource.pdfThumbnail}
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
                    <span>
                        {resource.totalPages} Pages
                    </span>
                    <span>
                        {resource.fileSize}
                    </span>
                </div>
                <Button
                    className="w-full mt-6"
                >
                    <Eye size={18}/>
                    Preview PDF
                </Button>
            </div>
        </div>
    );
};

export default ResourcePreview;