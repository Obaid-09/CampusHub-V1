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

import { downloadTrend } from "../../constants/admin";

const DownloadTrendChart = () => {

    return (

        <ChartCard title="Download Trends">

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <LineChart
                    data={downloadTrend}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis dataKey="month"/>

                    <YAxis/>

                    <Tooltip/>

                    <Line

                        type="monotone"

                        dataKey="downloads"

                        stroke="#2563EB"

                        strokeWidth={3}

                    />

                </LineChart>

            </ResponsiveContainer>

        </ChartCard>

    );

};

export default DownloadTrendChart;