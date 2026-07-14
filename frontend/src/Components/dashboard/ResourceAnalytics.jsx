import {
    Eye,
    Download,
    Bookmark,
    Star,
} from "lucide-react";

const ResourceAnalytics = ({ resource }) => {

    return (

        <div
            className="
                mt-5

                rounded-xl

                bg-background

                p-4

                grid
                grid-cols-2

                gap-4
            "
        >

            <div className="flex gap-2 items-center">

                <Eye size={18}/>

                {resource.views}

            </div>

            <div className="flex gap-2 items-center">

                <Download size={18}/>

                {resource.downloads}

            </div>

            <div className="flex gap-2 items-center">

                <Bookmark size={18}/>

                {resource.bookmarks}

            </div>

            <div className="flex gap-2 items-center">

                <Star size={18}/>

                {resource.averageRating}

            </div>

        </div>

    );

};

export default ResourceAnalytics;