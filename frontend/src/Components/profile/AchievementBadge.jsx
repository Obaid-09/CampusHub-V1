const AchievementBadge = ({ achievement }) => {

    return (

        <div
            className="
                bg-background
                rounded-2xl
                p-5
                text-center
                border
                border-gray100
            "
        >

            <div className="text-5xl">

                {achievement.icon}

            </div>

            <h3
                className="
                    mt-4
                    font-semibold
                    text-secondary
                "
            >

                {achievement.title}

            </h3>

            <p
                className="
                    mt-2
                    text-sm
                    text-gray500
                "
            >

                {achievement.description}

            </p>

        </div>

    );

};

export default AchievementBadge;