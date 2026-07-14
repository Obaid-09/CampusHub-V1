const SettingsSection = ({
    title,
    children,
}) => {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100
                p-8
            "
        >

            <h2
                className="
                    text-2xl
                    font-heading
                    font-semibold
                    text-secondary
                    mb-6
                "
            >

                {title}

            </h2>

            <div className="space-y-6">

                {children}

            </div>

        </div>

    );

};

export default SettingsSection;