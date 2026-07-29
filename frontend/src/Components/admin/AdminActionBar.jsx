import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";

const AdminActionBar = ({ resource }) => {
  const navigate = useNavigate();

  return (
    <div
      className="
                bg-white
                rounded-b-2xl
                border-x
                border-b
                border-gray100
                p-4
                flex
                gap-3
            "
    >
      <Button
        variant="outline"
        className="flex-1"
        onClick={() => navigate(`/resources/${resource._id}`)}
      >
        View
      </Button>

      <Button
        className="flex-1"
        onClick={() => navigate(`/admin/resources/${resource._id}/edit`)}
      >
        Edit
      </Button>

      <Button variant="danger" className="flex-1">
        Delete
      </Button>
    </div>
  );
};

export default AdminActionBar;
