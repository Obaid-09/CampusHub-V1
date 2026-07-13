const stats = [
    {
        label: "Uploads",
        key: "uploads",
    },
    {
        label: "Reputation",
        key: "reputation",
    },
];

const ProfileStats = ({ profile }) => {

    return (

        <div
            className="
                grid
                grid-cols-2
                lg:grid-cols-4
                gap-6
                mt-8
            "
        >

            {stats.map((item) => (

                <div
                    key={item.key}
                    className="
                        bg-white
                        rounded-2xl
                        border
                        border-gray100
                        shadow-card
                        p-6
                        text-center
                    "
                >

                    <h2
                        className="
                            text-4xl
                            font-bold
                            text-primary
                        "
                    >
                        {profile[item.key]}
                    </h2>

                    <p
                        className="
                            mt-2
                            text-gray500
                            font-medium
                        "
                    >
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ProfileStats;