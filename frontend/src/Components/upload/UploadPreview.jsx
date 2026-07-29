import Badge from "../ui/Badge";

const UploadPreview = ({ form, file }) => {
  return (
    <div
      className="
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100
                p-6
            "
    >
      <h2 className="text-2xl font-heading font-bold text-secondary">
        Live Preview
      </h2>

      <div
        className="
                    mt-6
                    rounded-xl
                    bg-background
                    p-5
                "
      >
        <Badge>{form?.type || "Resource"}</Badge>

        <h3 className="mt-4 text-2xl font-semibold text-secondary">
          {form?.title || "Resource Title"}
        </h3>

        <p className="mt-2 text-gray500">{form?.subject || "Subject"}</p>

        <p className="mt-4 text-gray600">
          {form?.description || "Description preview will appear here..."}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {form?.tags.map((tag) => (
            <Badge key={tag}>#{tag}</Badge>
          ))}
        </div>

        {file && (
          <div className="mt-6 text-sm text-gray500">📄 {file?.name}</div>
        )}
      </div>
    </div>
  );
};

export default UploadPreview;
