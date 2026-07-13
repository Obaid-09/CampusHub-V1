import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MiniResourceCard from "./MiniResourceCard";

const ResourceCarousel = ({
    title,
    resources,
}) => {

    const scrollRef = useRef(null);

    const scrollLeft = () => {

        scrollRef.current?.scrollBy({

            left: -320,

            behavior: "smooth",

        });

    };

    const scrollRight = () => {

        scrollRef.current?.scrollBy({

            left: 320,

            behavior: "smooth",

        });

    };

    return (

        <section className="mt-14">

            <div
                className="
                    flex
                    items-center
                    justify-between
                    mb-6
                "
            >

                <h2
                    className="
                        text-3xl
                        font-heading
                        font-bold
                        text-secondary
                    "
                >
                    {title}
                </h2>

                <div className="flex gap-3">

                    <button

                        onClick={scrollLeft}

                        className="
                            h-11
                            w-11

                            rounded-full

                            border
                            border-gray100

                            bg-white

                            shadow-sm

                            hover:bg-primary
                            hover:text-white

                            transition-all
                        "
                    >

                        <ChevronLeft size={20}/>

                    </button>

                    <button

                        onClick={scrollRight}

                        className="
                            h-11
                            w-11

                            rounded-full

                            border
                            border-gray100

                            bg-white

                            shadow-sm

                            hover:bg-primary
                            hover:text-white

                            transition-all
                        "
                    >

                        <ChevronRight size={20}/>

                    </button>

                </div>

            </div>

            <div className="overflow-hidden">

                <div

                    ref={scrollRef}

                    className="
                        flex
                        gap-6

                        overflow-x-auto

                        scroll-smooth

                        scrollbar-hide

                        pb-2
                    "

                >

                    {resources.map(resource => (

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

export default ResourceCarousel;