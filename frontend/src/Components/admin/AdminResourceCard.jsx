import ResourceStatusBadge from "./ResourceStatusBadge";
import ResourceUploader from "./ResourceUploader";
import ResourceInfoRow from "./ResourceInfoRow";
import AdminResourceActions from "./AdminResourceActions";
import getThumbnail from "../../utils/getThumbnail";

const AdminResourceCard = ({ resource, ...actions }) => {
  return (
    <div
      className="
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100
                overflow-hidden
            "
    >
      <img
        src={
          getThumbnail(resource) ||
          "https://placehold.co/700x400?text=CampusHub"
        }
        alt=""
        className="
                    h-48
                    w-full
                    object-cover
                "
      />

      <div className="p-6 space-y-5">
        <div
          className="
                        flex
                        justify-between
                        items-start
                    "
        >
          <h2
            className="
                            text-xl
                            font-semibold
                            text-secondary
                        "
          >
            {resource.title}
          </h2>

          <ResourceStatusBadge status={resource.status} />
        </div>

        <ResourceUploader uploader={resource.uploadedBy || {}} />

        <div className="space-y-2">
          <ResourceInfoRow label="Subject" value={resource.subject} />

          <ResourceInfoRow label="Course" value={resource.courseCode} />

          <ResourceInfoRow label="Semester" value={resource.semester} />

          <ResourceInfoRow label="Downloads" value={resource.downloads ?? 0} />

          <ResourceInfoRow label="Views" value={resource.views ?? 0} />
        </div>

        <AdminResourceActions resource={resource} {...actions} />
      </div>
    </div>
  );
};

export default AdminResourceCard;
