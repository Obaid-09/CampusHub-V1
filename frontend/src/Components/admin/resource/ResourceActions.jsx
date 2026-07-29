import { useNavigate } from "react-router-dom";

import Button from "../../ui/Button";

const ResourceActions = ({ resource }) => {
  const navigate = useNavigate();

  return (
    <div
      className="
                bg-white
                rounded-2xl
                border
                border-gray100
                shadow-card
                p-8
            "
    >
      <h2
        className="
                    text-2xl
                    font-bold
                    text-secondary
                    mb-8
                "
      >
        Resource Actions
      </h2>

      <div
        className="
                    grid
                    md:grid-cols-2
                    xl:grid-cols-5
                    gap-4
                "
      >
        <Button>Approve</Button>

        <Button variant="outline">Reject</Button>

        <Button
          variant="secondary"
          onClick={() => navigate(`/admin/resources/${resource._id}/edit`)}
        >
          Edit
        </Button>

        <Button variant="outline" onClick={() => window.open(resource.pdf)}>
          View PDF
        </Button>

        <Button variant="danger">Delete</Button>
      </div>
    </div>
  );
};

export default ResourceActions;
