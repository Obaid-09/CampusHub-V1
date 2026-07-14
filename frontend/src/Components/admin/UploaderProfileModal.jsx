import Button from "../ui/Button";

const UploaderProfileModal = ({
    open,
    onClose,
    user,
}) => {

    if (!open) return null;

    return (

        <div
            className="
                fixed
                inset-0
                bg-black/60
                z-50

                flex
                items-center
                justify-center
            "
        >

            <div
                className="
                    bg-white
                    rounded-3xl
                    w-full
                    max-w-lg
                    p-8
                "
            >

                <img

                    src={user.avatar}

                    alt=""

                    className="
                        w-24
                        h-24
                        rounded-full
                        mx-auto
                    "

                />

                <h2
                    className="
                        mt-5
                        text-center
                        text-2xl
                        font-bold
                    "
                >

                    {user.name}

                </h2>

                <p className="text-center text-gray500">

                    {user.college}

                </p>

                <div className="mt-8 space-y-4">

                    <p>
                        Branch : {user.branch}
                    </p>

                    <p>
                        Semester : {user.semester}
                    </p>

                    <p>
                        Uploaded : {user.resources}
                    </p>

                    <p>
                        Rating : ⭐ {user.rating}
                    </p>

                </div>

                <Button

                    className="
                        w-full
                        mt-8
                    "

                    onClick={onClose}

                >

                    Close

                </Button>

            </div>

        </div>

    );

};

export default UploaderProfileModal;