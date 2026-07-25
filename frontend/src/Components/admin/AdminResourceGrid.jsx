import AdminResourceCard from "./AdminResourceCard";

const AdminResourcesGrid = ({
  resources,
  loading,
  onView,
  onEdit,
  onDelete,
  onApprove,
  onRestore,
  onReject,
  onAnalytics,
  onUploader,
}) => {
  if (loading) {
    return (
      <div className="text-center py-16 text-gray500">Loading resources...</div>
    );
  }
  if (resources.length === 0) {
    return (
      <div
        className="
        bg-white
        rounded-2xl
        shadow-card
        border
        border-gray100
        py-16
        text-center
      "
      >
        <h2 className="text-2xl font-semibold text-secondary">
          No Resources Found
        </h2>

        <p className="mt-2 text-gray500">Try changing the search or filters.</p>
      </div>
    );
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
        <AdminResourceCard
          key={resource._id}
          resource={resource}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
          onRestore={onRestore}
          onApprove={onApprove}
          onReject={onReject}
          onAnalytics={onAnalytics}
          onUploader={onUploader}
        />
      ))}
    </div>
  );
};

export default AdminResourcesGrid;
