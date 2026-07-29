import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const EditResourceHeader = () => {
  return (
    <div
      className="
                flex
                justify-between
                items-center
                mb-8
            "
    >
      <div>
        <Link
          to="/dashboard/resources"
          className="
                        flex
                        items-center
                        gap-2
                        text-primary
                        mb-4
                    "
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <h1
          className="
                        text-4xl
                        font-heading
                        font-bold
                        text-secondary
                    "
        >
          Edit Resource
        </h1>

        <p className="mt-2 text-gray600">Update your uploaded resource.</p>
      </div>
    </div>
  );
};

export default EditResourceHeader;
