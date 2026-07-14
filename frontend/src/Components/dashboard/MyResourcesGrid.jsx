import OwnerResourceCard from "./OwnerResourceCard";
import EmptyUploads from "./EmptyUploads";

const MyResourcesGrid = ({
    resources,
    onDelete,
}) => {

    if (!resources.length)
        return <EmptyUploads/>;

    return (

        <div
            className="
                grid
                grid-cols-1
                md:grid-cols-1
                xl:grid-cols-3
                gap-8
            "
        >
            {resources.map(resource => (
                <OwnerResourceCard
                    key={resource._id}
                    resource={resource}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default MyResourcesGrid;
