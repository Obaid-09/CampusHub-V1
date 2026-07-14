import ResourceCard from "../resource/ResourceCard";
import EmptyBookmarks from "./EmptyBookmarks";

const BookmarksGrid = ({
    resources,
}) => {

    if(!resources.length){

        return <EmptyBookmarks/>;

    }

    return (

        <div
            className="
                grid
                md:grid-cols-2
                xl:grid-cols-3
                gap-8
            "
        >

            {resources.map(resource => (

                <ResourceCard

                    key={resource._id}

                    resource={resource}

                    showBookmarkAction={true}

                    onRemoveBookmark={(resource) =>
                        console.log("Remove Bookmark", resource)
                    }

                />

            ))}

        </div>

    );

};

export default BookmarksGrid;