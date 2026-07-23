import ResourceCard from "./ResourceCard";
import ResourceSkeleton from "./ResourceSkeleton";
import EmptyResources from "./EmptyResources";

const ResourceGrid = ({ resources = [], loading = false, onResetFilters }) => {
  if (loading) {
    return (
      <div
        className="
                    grid
                    sm:grid-cols-2
                    xl:grid-cols-4
                    gap-6
                "
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <ResourceSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!resources.length) {
    return <EmptyResources onReset={onResetFilters} />;
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
      {resources.map((resource) => (
        <ResourceCard key={resource._id} resource={resource} />
      ))}
    </div>
  );
};

export default ResourceGrid;
