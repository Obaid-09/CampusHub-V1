import { analyticsStats } from "../../constants/admin";
import AnalyticsStatCard from "./AnalyticsStatCard";

const AnalyticsStatsGrid = () => {

    return (

        <div
            className="
                grid
                md:grid-cols-2
                xl:grid-cols-4
                gap-6
            "
        >

            {

                analyticsStats.map((stat)=>(

                    <AnalyticsStatCard

                        key={stat.title}

                        stat={stat}

                    />

                ))

            }

        </div>

    );

};

export default AnalyticsStatsGrid;