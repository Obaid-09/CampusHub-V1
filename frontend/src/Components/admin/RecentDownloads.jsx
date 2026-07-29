import { recentDownloads } from "../../constants/admin";

const RecentDownloads = () => {
  return (
    <div
      className="
                bg-white
                rounded-2xl
                border
                border-gray100
                shadow-card
                p-6
            "
    >
      <h2
        className="
                    text-xl
                    font-bold
                    text-secondary
                    mb-5
                "
      >
        Recent Downloads
      </h2>

      <div className="space-y-4">
        {recentDownloads.map((download) => (
          <div
            key={download.id}
            className="
                                flex
                                justify-between
                            "
          >
            <span>{download.title}</span>

            <span className="text-gray500">{download.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentDownloads;
