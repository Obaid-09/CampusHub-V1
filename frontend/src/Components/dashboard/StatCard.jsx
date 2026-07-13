const StatCard = ({
    title,
    value,
    color,
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

            <p className="text-gray600">

                {title}

            </p>

            <h2
                className={`
                    mt-3
                    text-4xl
                    font-bold
                    ${color}
                `}
            >

                {value}

            </h2>

        </div>

    );

};

export default StatCard;