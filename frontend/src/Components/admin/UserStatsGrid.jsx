import UserStatCard from "./UserStatCard";

const UserStatsGrid = ({ user }) => {
  const stats = [
    {
      title: "Uploads",
      value: user.uploadsCount,
      icon: "files",
      color: "text-primary",
    },
    {
      title: "Downloads",
      value: user.downloadsCount,
      icon: "download",
      color: "text-green-600",
    },
    {
      title: "Bookmarks",
      value: user.bookmarksCount,
      icon: "bookmark",
      color: "text-yellow-500",
    },
    {
      title: "Deleted",
      value: user.deletedUploads,
      icon: "trash",
      color: "text-red-500",
    },
  ];

  return (
    <div
      className="
        grid
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      "
    >
      {stats.map((stat) => (
        <UserStatCard key={stat.title} stat={stat} />
      ))}
    </div>
  );
};

export default UserStatsGrid;
