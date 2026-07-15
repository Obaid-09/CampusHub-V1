import { useNavigate } from "react-router-dom";

import Button from "../../ui/Button";

import UploaderInfoRow from "./UploaderInfoRow";

const UploaderCard = ({
    uploader,
}) => {

    const navigate = useNavigate();

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
                    mb-6
                "
            >

                Uploader

            </h2>

            <div
                className="
                    flex
                    items-center
                    gap-5
                    mb-6
                "
            >

                <img

                    src={uploader.avatar}

                    alt=""

                    className="
                        w-20
                        h-20
                        rounded-full
                    "

                />

                <div>

                    <h3
                        className="
                            text-xl
                            font-semibold
                            text-secondary
                        "
                    >

                        {uploader.name}

                    </h3>

                    <p className="text-gray500">

                        @{uploader.username}

                    </p>

                </div>

            </div>

            <UploaderInfoRow

                label="Email"

                value={uploader.email}

            />

            <UploaderInfoRow

                label="Branch"

                value={uploader.branch}

            />

            <UploaderInfoRow

                label="Role"

                value={uploader.role}

            />

            <Button

                className="w-full mt-6"

                onClick={() =>
                    navigate(
                        `/admin/users/${uploader._id}`
                    )
                }

            >

                View Profile

            </Button>

        </div>

    );

};

export default UploaderCard;