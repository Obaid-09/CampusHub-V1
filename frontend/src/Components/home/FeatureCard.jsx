const FeatureCard = ({
    icon: Icon,
    title,
    description,
}) => {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                p-8
                shadow-card
                border
                border-gray100
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
            "
        >

            <div
                className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-primaryLight
                    flex
                    items-center
                    justify-center
                    mb-6
                "
            >
                <Icon
                    size={30}
                    className="text-primary"
                />
            </div>

            <h3
                className="
                    text-2xl
                    font-heading
                    font-semibold
                    text-secondary
                "
            >
                {title}
            </h3>

            <p
                className="
                    mt-4
                    text-gray600
                    leading-7
                "
            >
                {description}
            </p>
        </div>

    );

};

export default FeatureCard;