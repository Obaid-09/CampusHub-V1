import {
    BookOpen,
    FileText,
    Users,
} from "lucide-react";

const cards = [

    {
        title: "Verified Resources",
        icon: BookOpen,
        description:
            "Access quality notes, books and lab manuals uploaded by students."
    },

    {
        title: "Previous Year Papers",
        icon: FileText,
        description:
            "Prepare efficiently using curated PYQs from multiple branches."
    },

    {
        title: "Community Driven",
        icon: Users,
        description:
            "Every contribution helps thousands of engineering students."
    }

];

const WhyCampusHub = () => {

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center">
                    <h2
                        className="
                            text-5xl
                            font-heading
                            font-bold
                            text-secondary
                        "
                    >
                        Why CampusHub?
                    </h2>

                    <p
                        className="
                            mt-5
                            text-xl
                            text-gray600
                            max-w-3xl
                            mx-auto
                        "
                    >
                        Everything an engineering student needs,
                        collected into one modern platform.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {cards.map(({title,icon:Icon,description})=>(
                        <div
                            key={title}
                            className="
                                bg-white
                                rounded-3xl
                                shadow-card
                                p-10
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:shadow-xl
                            "
                        >

                            <div
                                className="
                                    w-16
                                    h-16
                                    rounded-2xl
                                    bg-primaryLight
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <Icon
                                    size={32}
                                    className="text-primary"
                                />

                            </div>
                            <h3
                                className="
                                    mt-8
                                    text-2xl
                                    font-semibold
                                    text-secondary
                                "
                            >
                                {title}
                            </h3>
                            <p
                                className="
                                    mt-4
                                    text-lg
                                    leading-8
                                    text-gray600
                                "
                            >
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyCampusHub;