import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import {
    Eye,
    Download,
    Bookmark,
    Star,
} from "lucide-react";

const ResourceCard = ({ resource, variant = "default", }) => {
    const isCompact = variant === "compact";
    const navigate = useNavigate();

    return (
        
        <div
            onClick={() =>
                navigate(`/resources/${resource._id}`)
            }
            className={`
                    bg-white
                    rounded-2xl
                    border
                    border-gray100
                    shadow-card
                    transition-all
                    hover:-translate-y-1
                    hover:shadow-xl

                    ${
                        isCompact
                            ? "p-4"
                            : "p-5"
                    }
                `}
        >

            {/* Thumbnail */}
            {/* className={`
                w-full
                object-cover

                ${
                    isCompact
                        ? "h-40 rounded-none"
                        : "h-52 rounded-xl"
                }
            `} */}
            <img
                src={
                    resource.thumbnail ||
                    "https://placehold.co/600x350"
                }
                alt={resource.title}
                className={`
                            h-48
                            w-full
                            object-cover
                            rounded-xl
                            group-hover:scale-105
                            transition-all
                            duration-500
                            ${
                                isCompact
                                    ? "h-36"
                                    : "h-52"
                            }
                        `}

            />

            <div className={isCompact ? "p-4" : "p-6"}>
                <Badge>
                    {resource.type}
                </Badge>

                <h2
                    className={`
                        mt-4
                        text-xl
                        font-heading
                        font-semibold
                        text-secondary
                        line-clamp-2
                        ${
                            isCompact
                                ? "text-lg mt-4"
                                : "text-xl mt-5"
                        }
                    `}
                >
                    {resource.title}
                </h2>

                                {
                    !isCompact && (

                        <>

                            <p className="mt-2 text-gray500">

                                {resource.subject}

                            </p>

                            <p className="text-sm text-gray400">

                                {resource.courseCode}

                            </p>

                        </>

                    )
                }

                {
                    isCompact ? (

                        <div
                            className="
                                mt-5
                                flex
                                items-center
                                justify-between
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-gray600
                                "
                            >

                                <Download size={18}/>

                                <span>

                                    {resource.downloads}

                                </span>

                            </div>

                            <span
                                className="
                                    text-xs
                                    text-primary
                                    font-medium
                                "
                            >

                                Downloads

                            </span>

                        </div>

                    ) : (

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

                    )
                }


                {/* <Button
                    className="
                        w-full
                        mt-6
                        opacity-90
                        group-hover:opacity-100
                    "
                >
                    View Details →
                </Button> */}
                <Button
                    className={`
                        w-full
                        mt-6
                        opacity-90
                        group-hover:opacity-100

                        ${
                            isCompact
                                ? "w-full h-11 text-sm"
                                : "w-full"
                        }
                    `}
                >
                    {
                        isCompact
                        ? "Open"
                        : "View Details →"
                    }
                </Button>

            </div>
        </div>

    );

};

export default ResourceCard;