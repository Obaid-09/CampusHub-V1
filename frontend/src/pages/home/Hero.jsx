import { Upload, ArrowRight } from "lucide-react";
import HeroSearch from "./HeroSearch";
import Button from "../../components/ui/Button";

const Hero = () => {

    return (

        <section
            className="
                bg-background
                pt-24
                pb-20
            "
        >

            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-6

                    grid
                    lg:grid-cols-2
                    gap-16
                    items-center
                "
            >

                {/* Left */}

                <div>
                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            bg-primaryLight
                            text-primary
                            px-4
                            py-2
                            rounded-full
                            text-sm
                            font-medium
                            mb-6
                        "
                    >
                        📚 Trusted by Engineering Students

                    </div>
                    <h1
                        className="
                            text-5xl
                            lg:text-6xl
                            font-heading
                            font-bold
                            text-secondary
                            leading-tight
                        "
                    >
                        Find
                        <span className="text-primary">
                            {" "}Notes,
                            {" "}PYQs &
                            {" "}Study Resources
                        </span>

                        <br />
                        All in One Place
                    </h1>

                    <p
                        className="
                            mt-8
                            text-lg
                            text-gray600
                            leading-8
                            max-w-xl
                        "
                    >
                        Search thousands of verified notes,
                        books, assignments, previous year
                        questions and lab manuals uploaded
                        by your seniors.
                    </p>

                    <HeroSearch />

                        <div className="mt-8 flex gap-5 flex-wrap">
                            <Button>
                                Browse Resources
                                <ArrowRight size={18}/>
                            </Button>
                            <Button variant="outline">
                                <Upload size={18}/>
                                Upload Resource
                            </Button>
                        </div>

                    <div
                        className="
                            flex
                            gap-10
                            mt-14
                            flex-wrap
                        "
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-primary">
                                10K+
                            </h2>
                            <p className="text-gray500">
                                Resources
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-primary">
                                2K+
                            </h2>
                            <p className="text-gray500">
                                Students
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-primary">
                                25K+
                            </h2>
                            <p className="text-gray500">
                                Downloads
                            </p>
                        </div>

                    </div>
                </div>

                {/* Right */}
                <div>
                </div>

            </div>
            
        </section>

    );

};

export default Hero;