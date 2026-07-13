const WelcomeCard = () => {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                border
                border-gray100
                shadow-card
                p-8
            "
        >

            <h1
                className="
                    text-4xl
                    font-heading
                    font-bold
                    text-secondary
                "
            >
                Welcome Back, Obaid 👋
            </h1>

            <p
                className="
                    mt-3
                    text-gray600
                    leading-7
                "
            >
                Continue learning, manage your uploads,
                and discover new resources shared by students.
            </p>

        </div>

    );

};

export default WelcomeCard;