import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import ChartCard from "./ChartCard";

const COLORS = {
  approved: "#16A34A",
  pending: "#F59E0B",
  rejected: "#EF4444",
};

const ResourceStatusDistribution = ({ data }) => {
  const chartData =
    data?.map((item) => ({
      name: item._id.charAt(0).toUpperCase() + item._id.slice(1),
      value: item.count,
      color: COLORS[item._id] || "#6B7280",
    })) || [];

  return (
    <ChartCard title="Resources by Status">
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={65}
              outerRadius={105}
              paddingAngle={4}
              label
            >
              {chartData.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>

            <Tooltip />

            
          </PieChart>
        </ResponsiveContainer>

        <div className="space-y-4">
          {chartData.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: item.color,
                  }}
                />

                <span className="font-medium">{item.name}</span>
              </div>

              <span className="font-semibold text-secondary">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  );
};

export default ResourceStatusDistribution;
