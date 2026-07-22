import useAuth from "../../hooks/useAuth";

const ProfileAbout = () => {

    const { user } = useAuth();

    return (

        <div
            className="
                mt-8
                bg-white
                rounded-3xl
                border
                border-gray100
                shadow-card
                p-8
            "
        >

            <h2
                className="
                    text-3xl
                    font-heading
                    font-bold
                    text-secondary
                    mb-5
                "
            >
                About
            </h2>

            <p
                className="
                    leading-8
                    text-gray600
                "
            >
                {user?.bio || "No bio added yet."}
            </p>

        </div>

    );

};

export default ProfileAbout;