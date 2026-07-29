import ChartCard from "./ChartCard";
import { topResources } from "../../constants/admin";

const TopResources = () => {
  return (
    <ChartCard title="Most Downloaded Resources">
      <div className="space-y-5">
        {topResources.map((resource) => (
          <div
            key={resource.title}
            className="
                                flex
                                justify-between
                            "
          >
            <span>{resource.title}</span>

            <span className="font-semibold text-primary">
              {resource.downloads}
            </span>
          </div>
        ))}
      </div>
    </ChartCard>
  );
};

export default TopResources;
