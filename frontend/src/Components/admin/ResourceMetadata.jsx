import Badge from "../ui/Badge";

const ResourceMetadata = ({ resource }) => {
  return (
    <div
      className="
                bg-background
                rounded-2xl
                p-6
                space-y-5
            "
    >
      <h3
        className="
                    text-xl
                    font-heading
                    font-semibold
                    text-secondary
                "
      >
        Resource Information
      </h3>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <p className="text-gray500">Branch</p>

          <p className="font-medium">{resource.branch}</p>
        </div>

        <div>
          <p className="text-gray500">Semester</p>

          <p className="font-medium">{resource.semester}</p>
        </div>

        <div>
          <p className="text-gray500">Subject</p>

          <p className="font-medium">{resource.subject}</p>
        </div>

        <div>
          <p className="text-gray500">Course Code</p>

          <p className="font-medium">{resource.courseCode}</p>
        </div>
      </div>

      <div>
        <p className="text-gray500 mb-2">Description</p>

        <p>{resource.description}</p>
      </div>

      <div>
        <p className="text-gray500 mb-3">Tags</p>

        <div className="flex flex-wrap gap-2">
          {resource.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceMetadata;
