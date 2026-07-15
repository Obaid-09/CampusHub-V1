import ActionButton from "./ActionButton";

const UserActions = ({
    user,
}) => {

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

            <h2

                className="
                    text-2xl
                    font-bold
                    text-secondary
                    mb-8
                "

            >

                Admin Actions

            </h2>

            <div

                className="
                    grid
                    md:grid-cols-2
                    xl:grid-cols-4
                    gap-4
                "

            >

                <ActionButton

                    text="Promote"

                    onClick={()=>
                        console.log("Promote",user)
                    }

                />

                <ActionButton

                    text="Suspend"

                    variant="outline"

                    onClick={()=>
                        console.log("Suspend",user)
                    }

                />

                <ActionButton

                    text="Reset Password"

                    variant="secondary"

                    onClick={()=>
                        console.log("Reset")
                    }

                />

                <ActionButton

                    text="Delete User"

                    variant="danger"

                    onClick={()=>
                        console.log("Delete")
                    }

                />

            </div>

        </div>

    );

};

export default UserActions;