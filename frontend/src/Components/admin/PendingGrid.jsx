import PendingCard from "./PendingCard";

const PendingGrid = ({ resources, loading, removeResources }) => {
  if (loading) {
    return (
      <div className="text-center py-16 text-gray500">
        Loading pending resources...
      </div>
    );
  }

  if (resources.length === 0) {
    return (
      <div
        className="
          bg-white
          rounded-2xl
          border
          border-gray100
          shadow-card
          py-16
          text-center
        "
      >
        <h2 className="text-2xl font-semibold text-secondary">
          No Pending Resources
        </h2>

        <p className="mt-2 text-gray500">
          All uploaded resources have been reviewed.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        grid
        lg:grid-cols-2
        xl:grid-cols-3
        gap-6
      "
    >
      {resources.map((resource) => (
        <PendingCard
          key={resource._id}
          resource={resource}
          removeResources={removeResources}
        />
      ))}
    </div>
  );
};

export default PendingGrid;
