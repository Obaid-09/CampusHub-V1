import MiniResourceCard from "./MiniResourceCard";
import { trendingResources } from "../../constants/dashboard";

const TrendingResources = () => {

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

                Trending Resources

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

                    {trendingResources.map(resource => (

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

export default TrendingResources;

// import ResourceCarousel from "./ResourceCarousel";
// import { trendingResources } from "../../constants/dashboard";

// const TrendingResources = () => {

//     return (

//         <ResourceCarousel

//             title="Trending Resources"

//             resources={trendingResources}

//         />

//     );

// };

// export default TrendingResources;