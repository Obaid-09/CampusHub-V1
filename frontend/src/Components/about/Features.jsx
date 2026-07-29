import {
    BookOpen,
    FileText,
    Library,
    FlaskConical,
    Bot,
    CloudUpload,
} from "lucide-react";

const features = [
    {
        title: "Notes",
        description: "Well-organized notes uploaded by students for quick revision.",
        icon: BookOpen,
    },
    {
        title: "PYQs",
        description: "Previous year question papers to prepare efficiently.",
        icon: FileText,
    },
    {
        title: "Books",
        description: "Reference books and study materials in one place.",
        icon: Library,
    },
    {
        title: "Lab Manuals",
        description: "Practical manuals, observations and viva resources.",
        icon: FlaskConical,
    },
    {
        title: "AI Assistant",
        description: "Future AI-powered academic assistant for personalized learning.",
        icon: Bot,
    },
    {
        title: "Cloud Upload",
        description: "Secure upload and access to your resources anytime.",
        icon: CloudUpload,
    },
];

const Features = () => {

    return (

        <section className="py-24 bg-background">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-4xl font-heading font-bold text-secondary">
                        Everything You Need
                    </h2>
                    <p className="mt-5 text-xl text-gray600 max-w-3xl mx-auto">
                        CampusHub provides every essential academic resource
                        in one centralized platform.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {features.map(({ title, description, icon: Icon }) => (
                        <div
                            key={title}
                            className="
                                bg-white
                                rounded-3xl
                                p-8
                                shadow-card
                                hover:shadow-xl
                                hover:-translate-y-2
                                transition-all
                                duration-300
                            "
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primaryLight flex items-center justify-center">
                                <Icon
                                    size={25}
                                    className="text-primary"
                                />
                            </div>

                            <h3 className="mt-8 text-xl font-semibold text-secondary">
                                {title}
                            </h3>

                            <p className="mt-4 text-gray600 leading-6 text-[15px]">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;