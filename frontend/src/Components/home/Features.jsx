import FeatureCard from "./FeatureCard";
import { features } from "../../constants/features";

const Features = () => {

    return (

        <section
            className="
                py-24
                bg-white
            "
        >

            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-6
                "
            >

                <div className="text-center">
                    <p
                        className="
                            text-primary
                            font-semibold
                            uppercase
                            tracking-wider
                        "
                    >
                        Features
                    </p>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            lg:text-5xl
                            font-heading
                            font-bold
                            text-secondary
                        "
                    >
                        Why Choose CampusHub?
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-3xl
                            mx-auto
                            text-lg
                            text-gray600
                            leading-8
                        "
                    >
                        Everything an engineering student
                        needs to organize, discover and
                        share academic resources in one
                        centralized platform.
                    </p>
                </div>

                <div
                    className="
                        mt-16
                        grid
                        gap-8
                        md:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {features.map((feature) => (

                        <FeatureCard
                            key={feature.id}
                            {...feature}
                        />
                    ))}
                </div>
            </div>
        </section>

    );

};

export default Features;