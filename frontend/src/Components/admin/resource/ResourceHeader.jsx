import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ResourceHeader = ({ resource }) => {
  const navigate = useNavigate();

  return (
    <div
      className="
                flex
                items-center
                justify-between
            "
    >
      <div>
        <button
          onClick={() => navigate(-1)}
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
        </button>

        <h1
          className="
                        text-4xl
                        font-heading
                        font-bold
                        text-secondary
                    "
        >
          {resource.title}
        </h1>

        <p className="mt-3 text-gray500">{resource.description}</p>
      </div>
    </div>
  );
};

export default ResourceHeader;
