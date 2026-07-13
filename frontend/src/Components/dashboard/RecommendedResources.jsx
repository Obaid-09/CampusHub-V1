import MiniResourceCard from "./MiniResourceCard";
import { recommendedResources } from "../../constants/dashboard";

// const recommendedResources = dummyResources.filter(
//     (resource) =>
//         resource.branch === user.branch &&
//         resource.semester === user.semester
// );

const RecommendedResources = () => {

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

                {recommendedResources.map(resource => (

                    <MiniResourceCard
                        key={resource._id}
                        resource={resource}
                    />

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