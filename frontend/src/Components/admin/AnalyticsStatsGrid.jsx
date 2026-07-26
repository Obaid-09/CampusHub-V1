import AnalyticsStatCard from "./AnalyticsStatCard";

const AnalyticsStatsGrid = ({ platform }) => {
  const analyticsStats = [
    {
      title: "Users",
      value: platform?.totalUsers ?? 0,
      icon: "users",
      color: "text-blue-500",
    },
    {
      title: "Resources",
      value: platform?.totalResources ?? 0,
      icon: "file",
      color: "text-green-500",
    },
    {
      title: "Downloads",
      value: platform?.totalDownloads ?? 0,
      icon: "download",
      color: "text-purple-500",
    },
    {
      title: "Views",
      value: platform?.totalViews ?? 0,
      icon: "eye",
      color: "text-orange-500",
    },
    {
      title: "Bookmarks",
      value: platform?.totalBookmarks ?? 0,
      icon: "bookmark",
      color: "text-yellow-500",
    },
    {
      title: "Avg Rating",
      value: platform?.averageRating ?? "0.0",
      icon: "star",
      color: "text-amber-500",
    },
    {
      title: "Deleted",
      value: platform?.deletedResources ?? 0,
      icon: "trash",
      color: "text-red-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      {analyticsStats.map((stat) => (
        <AnalyticsStatCard key={stat.title} stat={stat} />
      ))}
    </div>
  );
};

export default AnalyticsStatsGrid;
