import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import {
    Eye,
    Download,
    Bookmark,
    Star,
} from "lucide-react";

const ResourceCard = ({ resource }) => {

    const navigate = useNavigate();

    return (
        
        <div
            onClick={() =>
                navigate(`/resources/${resource._id}`)
            }
            className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-card
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                "
        >

            {/* Thumbnail */}
            <img
                src={
                    resource.thumbnail ||
                    "https://placehold.co/600x350"
                }
                alt={resource.title}
                className="
                        h-48
                        w-full
                        object-cover
                        group-hover:scale-105
                        transition-all
                        duration-500
                        "
            />

            <div className="p-6">
                <Badge>
                    {resource.type}
                </Badge>

                <h2
                    className="
                        mt-4
                        text-xl
                        font-heading
                        font-semibold
                        text-secondary
                        line-clamp-2
                    "
                >
                    {resource.title}
                </h2>

                <p className="mt-2 text-gray500">
                    {resource.subject}
                </p>

                <p className="text-sm text-gray400">
                    {resource.courseCode}
                </p>

                <div
                    className="
                        flex
                        justify-between
                        mt-6
                        text-sm
                        text-gray500
                    "
                >

                    <span className="flex items-center gap-1">
                        <Eye size={16}/>
                        {resource.views}
                    </span>

                    <span className="flex items-center gap-1">
                        <Download size={16}/>
                        {resource.downloads}
                    </span>

                    <span className="flex items-center gap-1">
                        <Bookmark size={16}/>
                        {resource.bookmarks}
                    </span>

                    <span className="flex items-center gap-1">
                        <Star size={16}/>
                        {resource.averageRating}
                    </span>
                </div>

                <Button
                    className="
                        w-full
                        mt-6
                        opacity-90
                        group-hover:opacity-100
                    "
                >
                    View Details →
                </Button>

            </div>
        </div>

    );

};

export default ResourceCard;