import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
const AdminResourceActions = ({
  resource,
  onView,
  onEdit,
  onDelete,
  onRestore,
  onApprove,
  onReject,
  onAnalytics,
  onUploader,
}) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <Button
          size="sm"
          variant="outline"
          onClick={() => navigate(`/admin/resources/${resource._id}`)}
        >
          View
        </Button>

        <Button
          size="sm"
          onClick={() => navigate(`/admin/resources/${resource._id}/edit`)}
        >
          Edit
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => navigate(`/admin/analytics?resource=${resource._id}`)}
        >
          Analytics
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={() => navigate(`/admin/users/${resource.uploadedBy?._id}`)}
        >
          Uploader
        </Button>
      </div>

      {resource.status === "pending" && (
        <div className="grid grid-cols-2 gap-3">
          <Button size="sm" onClick={() => onApprove(resource)}>
            Approve
          </Button>

          <Button size="sm" variant="danger" onClick={() => onReject(resource)}>
            Reject
          </Button>
        </div>
      )}

      {/* {resource.isDeleted && (
        <Button
          className="w-full"
          size="sm"
          onClick={() => onRestore(resource)}
        >
          Restore Resource
        </Button>
      ) : (
        <Button
          className="w-full"
          size="sm"
          variant="danger"
          onClick={() => onDelete(resource)}
        >
          Delete Resource
        </Button>
      )} */}
      {resource.isDeleted && (
        <Button
          className="w-full"
          size="sm"
          onClick={() => onRestore(resource)}
        >
          Restore Resource
        </Button>
      )}
      {!resource.isDeleted && (
        <Button
          className="w-full"
          size="sm"
          variant="danger"
          onClick={() => onDelete(resource)}
        >
          Delete Resource
        </Button>
      )}
    </div>
  );
};

export default AdminResourceActions;
