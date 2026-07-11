import {
    Eye,
    Download,
    Bookmark,
    Star,
} from "lucide-react";

const ResourceStats = ({ resource }) => {

    const stats = [

        {
            title: "Views",
            value: resource.views,
            icon: Eye,
            color: "text-blue-500",
            bg: "bg-blue-50",
        },

        {
            title: "Downloads",
            value: resource.downloads,
            icon: Download,
            color: "text-primary",
            bg: "bg-primaryLight",
        },

        {
            title: "Bookmarks",
            value: resource.bookmarks,
            icon: Bookmark,
            color: "text-green-600",
            bg: "bg-green-50",
        },

        {
            title: "Rating",
            value: resource.rating,
            icon: Star,
            color: "text-yellow-500",
            bg: "bg-yellow-50",
        },

    ];

    return (

        <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => {
                const Icon = stat.icon;
                return (

                    <div
                        key={stat.title}
                        className="
                            bg-white
                            rounded-2xl
                            shadow-card
                            border
                            border-gray100
                            p-5
                            hover:shadow-xl
                            transition-all
                            duration-300
                        "
                    >

                        <div
                            className={`
                                w-12
                                h-12
                                rounded-xl
                                flex
                                items-center
                                justify-center
                                ${stat.bg}
                            `}
                        >
                            <Icon
                                size={22}
                                className={stat.color}
                            />
                        </div>

                        <h2
                            className="
                                mt-5
                                text-3xl
                                font-bold
                                text-secondary
                            "
                        >
                            {stat.value}
                        </h2>

                        <p
                            className="
                                mt-1
                                text-gray500
                            "
                        >
                            {stat.title}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default ResourceStats;