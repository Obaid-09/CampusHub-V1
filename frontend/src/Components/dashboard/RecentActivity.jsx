import { recentActivities } from "../../constants/dashboard";

const RecentActivity = () => {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                border
                border-gray100
                shadow-card
                p-6
            "
        >

            <h2
                className="
                    text-2xl
                    font-heading
                    font-bold
                    text-secondary
                "
            >

                Recent Activity

            </h2>

            <div className="mt-6 space-y-5">

                {recentActivities.map((item) => (

                    <div
                        key={item.id}
                        className="
                            flex
                            justify-between
                            items-center
                            border-b
                            border-gray100
                            pb-4
                        "
                    >

                        <p className="text-gray700">

                            {item.title}

                        </p>

                        <span
                            className="
                                text-sm
                                text-gray500
                            "
                        >

                            {item.time}

                        </span>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default RecentActivity;