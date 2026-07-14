const SettingsSection = ({
    title,
    children,
}) => {

    return (

        <section
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
                    font-bold
                    text-secondary
                    mb-6
                "
            >

                {title}

            </h2>

            {children}

        </section>

    );

};

export default SettingsSection;