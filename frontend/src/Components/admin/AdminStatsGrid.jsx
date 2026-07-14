import { adminStats } from "../../constants/admin";
import AdminStatCard from "./AdminStatCard";

const AdminStatsGrid = () => {

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

                adminStats.map((stat)=>(

                    <AdminStatCard

                        key={stat.title}

                        stat={stat}

                    />

                ))

            }

        </div>

    );

};

export default AdminStatsGrid;