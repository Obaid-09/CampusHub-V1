import StatCard from "./StatCard";
// import useDashboard from "../../hooks/useDashboard";

const StatsGrid = ({ stats, loading }) => {
  if (loading) {
    return (
      <div className="mt-8 text-center text-gray-500">Loading dashboard...</div>
    );
  }

  const cards = [
    {
      title: "Uploads",
      value: stats?.uploads ?? 0,
      color: "text-lightBlue500",
    },
    {
      title: "Bookmarks",
      value: stats?.bookmarks ?? 0,
      color: "text-yellow-500",
    },
    {
      title: "Downloads",
      value: stats?.downloads ?? 0,
      color: "text-green-500",
    },
    {
      title: "Views",
      value: stats?.views ?? 0,
      color: "text-purple-500",
    },
  ];

  return (
    <div
      className="
                mt-8
                grid
                sm:grid-cols-2
                xl:grid-cols-4
                gap-6
            "
    >
      {cards.map((item) => (
        <StatCard key={item.title} {...item} />
      ))}
    </div>
  );
};

export default StatsGrid;
