const colors = {
  Approved: "bg-green-100 text-green-700",

  Pending: "bg-amber-100 text-amber-700",

  Rejected: "bg-red-100 text-red-700",
};

const ResourceStatusBadge = ({ status }) => {
  return (
    <span
      className={`
                px-3
                py-1
                rounded-full
                text-sm
                font-medium

                ${colors[status]}
            `}
    >
      {status}
    </span>
  );
};

export default ResourceStatusBadge;
