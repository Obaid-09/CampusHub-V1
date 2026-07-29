import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { adminAPI } from "../../api/admin.api";
import { successToast, errorToast } from "../../utils/toast";

const PendingCard = ({ resource, removeResources }) => {
  const navigate = useNavigate();

  const handleApprove = async () => {
    try {
      await adminAPI.approveResource(resource._id);
      successToast("Resource approved successfully.");
      removeResources(resource._id);
    } catch (error) {
      errorToast(
        error.response?.data?.message || "Failed to approve resource.",
      );
    }
  };

  const handleReject = async () => {
    try {
      await adminAPI.rejectResource(resource._id);
      successToast("Resource rejected successfully.");
      removeResources(resource._id);
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to reject resource.");
    }
  };

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
      <Badge>{resource.type}</Badge>

      <h2
        className="
                    mt-5
                    text-2xl
                    font-semibold
                    text-secondary
                "
      >
        {resource.title}
      </h2>

      <p className="mt-2 text-gray500">{resource.subject}</p>

      <p className="mt-1 text-gray400">{resource.branch}</p>

      <div className="mt-6 space-y-1">
        <p>
          <span className="font-medium">Uploader:</span>{" "}
          {resource.uploadedBy?.fullname}
        </p>

        <p className="text-gray500">
          {new Date(resource.createdAt).toLocaleDateString()}
        </p>
      </div>

      <div
        className="
                    mt-8
                    grid
                    grid-cols-3
                    gap-3
                "
      >
        <Button
          variant="outline"
          onClick={() => navigate(`/admin/resources/${resource._id}`)}
        >
          Preview
        </Button>

        <Button onClick={handleApprove}>Approve</Button>

        <Button variant="danger" onClick={handleReject}>
          Reject
        </Button>
      </div>
    </div>
  );
};

export default PendingCard;
