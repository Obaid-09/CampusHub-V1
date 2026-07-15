const ResourceStatCard = ({
    title,
    value,
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

                {title}

            </p>

            <h2
                className="
                    mt-3
                    text-4xl
                    font-bold
                    text-secondary
                "
            >

                {value}

            </h2>

        </div>

    );

};

export default ResourceStatCard;