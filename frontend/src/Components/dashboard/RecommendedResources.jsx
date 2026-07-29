import MiniResourceCard from "./MiniResourceCard";

// const recommendedResources = dummyResources.filter(
//     (resource) =>
//         resource.branch === user.branch &&
//         resource.semester === user.semester
// );

const RecommendedResources = ({ resources, loading }) => {
  if (loading) {
    return (
      <section className="mt-14">
        <h2
          className="
                    text-3xl
                    font-heading
                    font-bold
                    text-secondary
                    mb-6
                "
        >
          Recommended For You
        </h2>

        <div>Loading...</div>
      </section>
    );
  }

  return (
    <section className="mt-14">
      <h2
        className="
                    text-3xl
                    font-heading
                    font-bold
                    text-secondary
                    mb-6
                "
      >
        Recommended For You
      </h2>

      <div className="overflow-hidden">
        <div
          className="
                    flex
                    gap-6
                    overflow-x-auto
                    pb-4

                    scrollbar-thin
                    scrollbar-thumb-primary/40
                    scrollbar-track-transparent
                "
        >
          {resources.map((resource) => (
            <MiniResourceCard key={resource._id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedResources;

// import ResourceCarousel from "./ResourceCarousel";
// import { recommendedResources } from "../../constants/dashboard";

// const RecommendedResources = () => {

//     return (

//         <ResourceCarousel

//             title="Recommended For You"

//             resources={recommendedResources}

//         />

//     );

// };

// export default RecommendedResources;
