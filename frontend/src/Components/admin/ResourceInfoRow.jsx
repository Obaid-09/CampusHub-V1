const ResourceInfoRow = ({ label, value }) => {
  return (
    <div
      className="
                flex
                justify-between
                text-sm
            "
    >
      <span className="text-gray500">{label}</span>

      <span
        className="
                    font-medium
                    text-secondary
                "
      >
        {value}
      </span>
    </div>
  );
};

export default ResourceInfoRow;
