import ChartCard from "./ChartCard";
import { topContributors } from "../../constants/admin";

const TopContributors = () => {
  return (
    <ChartCard title="Top Contributors">
      <div className="space-y-5">
        {topContributors.map((user) => (
          <div
            key={user.name}
            className="
                                flex
                                justify-between
                                items-center
                            "
          >
            <div>
              <h3
                className="
                                        font-semibold
                                        text-secondary
                                    "
              >
                {user.name}
              </h3>

              <p className="text-sm text-gray500">{user.uploads} uploads</p>
            </div>

            <span
              className="
                                    text-primary
                                    font-semibold
                                "
            >
              {user.downloads} downloads
            </span>
          </div>
        ))}
      </div>
    </ChartCard>
  );
};

export default TopContributors;
