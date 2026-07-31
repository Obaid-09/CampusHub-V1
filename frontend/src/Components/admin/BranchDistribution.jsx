import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import ChartCard from "./ChartCard";

const COLORS = [
  "#D97706",
  "#2563EB",
  "#16A34A",
  "#9333EA",
  "#EF4444",
  "#0891B2",
  "#EA580C",
];

const BranchDistribution = ({ branches }) => {
  const chartData =
    branches?.map((branch) => ({
      name: branch._id,
      value: branch.count,
    })) || [];

  return (
    <ChartCard title="Resources by Branch">
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            {/* <Tooltip /> */}
          </PieChart>
        </ResponsiveContainer>

        <div className="space-y-4">
          {chartData.map((branch, index) => (
            <div
              key={branch.name}
              className="flex items-center justify-between"
            >
              <div className="flex items-center text-sm gap-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: COLORS[index % COLORS.length],
                  }}
                />

                <span className="font-medium">{branch.name}</span>
              </div>

              <span className="font-semibold text-sm text-secondary">
                {branch.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  );
};

export default BranchDistribution;
