import ResourceStatCard from "./ResourceStatCard";

const ResourceStatistics = ({
    resource,
}) => {

    return (

        <div>

            <h2
                className="
                    text-2xl
                    font-bold
                    text-secondary
                    mb-6
                "
            >

                Statistics

            </h2>

            <div
                className="
                    grid
                    md:grid-cols-2
                    xl:grid-cols-4
                    gap-6
                "
            >

                <ResourceStatCard

                    title="Views"

                    value={resource.views}

                />

                <ResourceStatCard

                    title="Downloads"

                    value={resource.downloads}

                />

                <ResourceStatCard

                    title="Bookmarks"

                    value={resource.bookmarks}

                />

                <ResourceStatCard

                    title="Rating"

                    value={resource.averageRating}

                />

            </div>

        </div>

    );

};

export default ResourceStatistics;