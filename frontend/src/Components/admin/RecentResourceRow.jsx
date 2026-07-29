const RecentResourceRow = ({ resource }) => {
  const statusClasses = {
    approved: "bg-green-100 text-green-700",
    pending: "bg-amber-100 text-amber-700",
    rejected: "bg-red-100 text-red-700",
  };

  return (
    <div
      className="
        flex
        items-center
        justify-between
        py-4
        border-b
        border-gray100
        last:border-none
      "
    >
      <div>
        <h4
          className="
            font-semibold
            text-secondary
          "
        >
          {resource.title}
        </h4>

        <p className="text-sm text-gray500">
          by {resource.uploadedBy?.fullname}
        </p>

        <p className="text-xs text-gray400 mt-1">
          {new Date(resource.createdAt).toLocaleDateString()}
        </p>
      </div>

      <span
        className={`
          px-3
          py-1
          rounded-full
          text-sm
          capitalize
          ${statusClasses[resource.status] || "bg-gray-100 text-gray-700"}
        `}
      >
        {resource.status}
      </span>
    </div>
  );
};

export default RecentResourceRow;
