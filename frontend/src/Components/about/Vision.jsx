import {
    Rocket,
    Search,
    Bot,
    GraduationCap,
} from "lucide-react";

const roadmap = [

    {
        title: "Resource Sharing",
        description:
            "Create the largest student-driven academic resource library.",
        icon: Rocket,
    },

    {
        title: "Smart Search",
        description:
            "Powerful filtering and semantic search across resources.",
        icon: Search,
    },

    {
        title: "AI Assistant",
        description:
            "RAG-powered assistant for answering subject-specific questions.",
        icon: Bot,
    },

    {
        title: "Student Ecosystem",
        description:
            "A complete platform supporting academics, projects and placements.",
        icon: GraduationCap,
    },

];

const Vision = () => {

    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-5xl font-heading font-bold text-secondary">
                        Our Future Vision
                    </h2>
                    <p className="mt-5 text-xl text-gray600 max-w-3xl mx-auto">
                        CampusHub is evolving beyond resource sharing into
                        a complete AI-powered academic ecosystem.
                    </p>
                </div>

                <div className="mt-20 space-y-8">
                    {roadmap.map(({ title, description, icon: Icon }, index) => (
                        <div
                            key={title}
                            className="
                                flex
                                gap-8
                                items-start
                                bg-background
                                rounded-3xl
                                p-8
                                shadow-card
                                hover:shadow-xl
                                hover:-translate-y-2
                                transition-all
                                duration-300
                            "
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primaryLight flex items-center justify-center shrink-0">
                                <Icon
                                    size={30}
                                    className="text-primary"
                                />
                            </div>

                            <div>
                                <p className="text-primary font-semibold">
                                    Step {index + 1}
                                </p>

                                <h3 className="mt-2 text-2xl font-semibold text-secondary">
                                    {title}
                                </h3>

                                <p className="mt-4 text-gray600 text-lg leading-8">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Vision;