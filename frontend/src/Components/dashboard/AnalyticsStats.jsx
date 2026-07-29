import { Eye, Download, Bookmark, Star } from "lucide-react";

const cards = [
  {
    key: "views",
    icon: Eye,
    label: "Views",
  },

  {
    key: "downloads",
    icon: Download,
    label: "Downloads",
  },

  {
    key: "bookmarks",
    icon: Bookmark,
    label: "Bookmarks",
  },

  {
    key: "averageRating",
    icon: Star,
    label: "Rating",
  },
];

const AnalyticsStats = ({ resource }) => {
  return (
    <div
      className="
                grid
                md:grid-cols-2
                xl:grid-cols-4
                gap-6
            "
    >
      {cards.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.key}
            className="
                            bg-white
                            rounded-2xl
                            shadow-card
                            border
                            border-gray100
                            p-6
                        "
          >
            <Icon className="text-primary" size={26} />

            <p className="mt-5 text-gray500">{item.label}</p>

            <h2
              className="
                                mt-2
                                text-3xl
                                font-bold
                                text-secondary
                            "
            >
              {resource[item.key]}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default AnalyticsStats;
