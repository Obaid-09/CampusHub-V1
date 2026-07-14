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

import { uploadTrend } from "../../constants/admin";

const UploadTrendChart = () => {

    return (

        <ChartCard title="Upload Trends">

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <LineChart
                    data={uploadTrend}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis dataKey="month"/>

                    <YAxis/>

                    <Tooltip/>

                    <Line

                        type="monotone"

                        dataKey="uploads"

                        stroke="#D97706"

                        strokeWidth={3}

                    />

                </LineChart>

            </ResponsiveContainer>

        </ChartCard>

    );

};

export default UploadTrendChart;