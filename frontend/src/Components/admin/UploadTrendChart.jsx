// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// import ChartCard from "./ChartCard";

// import { uploadTrend } from "../../constants/admin";

// const UploadTrendChart = () => {
//   return (
//     <ChartCard title="Upload Trends">
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={uploadTrend}>
//           <CartesianGrid strokeDasharray="3 3" />

//           <XAxis dataKey="month" />

//           <YAxis />

//           <Tooltip />

//           <Line
//             type="monotone"
//             dataKey="uploads"
//             stroke="#D97706"
//             strokeWidth={3}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </ChartCard>
//   );
// };

// export default UploadTrendChart;

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import ChartCard from "./ChartCard";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const UploadTrendChart = ({ uploads }) => {
  const chartData =
    uploads?.map((item) => ({
      month: months[item._id.month - 1],
      uploads: item.uploads,
    })) || [];

  return (
    <ChartCard title="Monthly Uploads">
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis allowDecimals={false} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="uploads"
            stroke="#D97706"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default UploadTrendChart;
