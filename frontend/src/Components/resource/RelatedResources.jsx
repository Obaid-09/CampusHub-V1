import { useNavigate } from "react-router-dom";
import Badge from "../ui/Badge";
import { Eye, Download } from "lucide-react";
import getThumbnail from "../../utils/getThumbnail";

const RelatedResources = ({ resources }) => {
  const navigate = useNavigate();

  return (
    <section className="mt-20">
      <h2
        className="
                    text-3xl
                    font-heading
                    font-bold
                    text-secondary
                    mb-8
                "
      >
        Related Resources
      </h2>

      <div
        className="
                    grid
                    md:grid-cols-2
                    xl:grid-cols-4
                    gap-6
                "
      >
        {resources.map((resource) => (
          <div
            key={resource._id}
            onClick={() => navigate(`/resources/${resource._id}`)}
            className="
                            bg-white
                            rounded-2xl
                            overflow-hidden
                            shadow-card
                            cursor-pointer
                            transition-all
                            duration-300
                            hover:-translate-y-2
                            hover:shadow-xl
                        "
          >
            <img
              src={getThumbnail(resource)}
              alt={resource.title}
              className="
                                w-full
                                h-44
                                object-cover
                            "
            />

            <div className="p-5">
              <Badge>{resource.type}</Badge>

              <h3
                className="
                                    mt-4
                                    font-semibold
                                    text-secondary
                                    line-clamp-2
                                "
              >
                {resource.title}
              </h3>

              <p
                className="
                                    mt-2
                                    text-sm
                                    text-gray500
                                "
              >
                {resource.subject}
              </p>

              <div
                className="
                                    flex
                                    justify-between
                                    mt-5
                                    text-sm
                                    text-gray500
                                "
              >
                <span className="flex gap-1 items-center">
                  <Eye size={16} />
                  {resource.views}
                </span>

                <span className="flex gap-1 items-center">
                  <Download size={16} />
                  {resource.downloads}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedResources;
