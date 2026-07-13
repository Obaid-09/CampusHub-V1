import StatCard from "./StatCard";
import { dashboardStats } from "../../constants/dashboard";

const StatsGrid = () => {

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

            {dashboardStats.map((item) => (

                <StatCard
                    key={item.title}
                    {...item}
                />

            ))}

        </div>

    );

};

export default StatsGrid;