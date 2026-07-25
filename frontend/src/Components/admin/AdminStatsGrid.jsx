import AdminStatCard from "./AdminStatCard";

const AdminStatsGrid = ({ dashboard, loading }) => {
  if (loading) {
    return (
      <div className="text-center py-10 text-gray500">Loading dashboard...</div>
    );
  }

  const adminStats = [
    {
      title: "Total Users",
      value: dashboard.users?.totalStudents ?? 0,
      icon: "users",
      color: "text-blue-500",
    },
    {
      title: "Resources",
      value: dashboard.resources?.totalResources ?? 0,
      icon: "files",
      color: "text-green-500",
    },
    {
      title: "Pending Approval",
      value: dashboard.resources?.pendingResources ?? 0,
      icon: "clock",
      color: "text-yellow-500",
    },
    {
      title: "Downloads",
      value: dashboard.platform?.totalDownloads ?? 0,
      icon: "flag",
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
      {adminStats.map((stat) => (
        <AdminStatCard key={stat.title} stat={stat} />
      ))}
    </div>
  );
};

export default AdminStatsGrid;
