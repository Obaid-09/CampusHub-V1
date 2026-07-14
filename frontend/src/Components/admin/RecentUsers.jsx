import { recentUsers } from "../../constants/admin";
import RecentUserRow from "./RecentUserRow";

const RecentUsers = () => {

    return (

        <div

            className="
                bg-white

                rounded-2xl

                shadow-card

                border
                border-gray100

                p-6
            "

        >

            <h2

                className="
                    text-2xl
                    font-heading
                    font-bold
                    text-secondary

                    mb-6
                "

            >

                Recent Users

            </h2>

            {

                recentUsers.map((user) => (

                    <RecentUserRow

                        key={user.id}

                        user={user}

                    />

                ))

            }

        </div>

    );

};

export default RecentUsers;