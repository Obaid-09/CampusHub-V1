import { userStats } from "../../constants/admin";
import UserStatCard from "./UserStatCard";

const UserStatsGrid = () => {

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

                userStats.map(stat=>(

                    <UserStatCard

                        key={stat.title}

                        stat={stat}

                    />

                ))

            }

        </div>

    );

};

export default UserStatsGrid;