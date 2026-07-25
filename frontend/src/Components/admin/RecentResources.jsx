import { recentResources } from "../../constants/admin";
import RecentResourceRow from "./RecentResourceRow";

const RecentResources = ({resources, loading}) => {
    if (loading) {
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
            Loading...
        </div>
    );
}
  console.log(recentResources);
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
      <h2
        className="
                    text-2xl
                    font-heading
                    font-bold
                    text-secondary
                    mb-6
                "
      >
        Recent Resources
      </h2>

      {resources.map((resource) => (
        <RecentResourceRow key={resource._id} resource={resource} />
      ))}
    </div>
  );
};

export default RecentResources;
