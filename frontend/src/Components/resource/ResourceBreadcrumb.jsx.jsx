import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ResourceBreadcrumb = ({ resource }) => {
  return (
    <div
      className="
                flex
                items-center
                gap-2
                text-sm
                text-gray500
            "
    >
      <Link to="/" className="hover:text-primary">
        Home
      </Link>
      <ChevronRight size={16} />
      <Link to="/resources" className="hover:text-primary">
        Resources
      </Link>
      <ChevronRight size={16} />
      <span
        className="
                    text-secondary
                    font-semibold
                "
      >
        {resource.title}
      </span>
    </div>
  );
};

export default ResourceBreadcrumb;
