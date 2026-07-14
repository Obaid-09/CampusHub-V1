const UserStatCard = ({
    stat,
}) => {

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

            <p className="text-gray500">

                {stat.title}

            </p>

            <h2
                className="
                    mt-3
                    text-4xl
                    font-bold
                    text-secondary
                "
            >

                {stat.value}

            </h2>

        </div>

    );

};

export default UserStatCard;