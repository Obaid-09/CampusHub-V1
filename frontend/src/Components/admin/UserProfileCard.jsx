import UserInfoRow from "./UserInfoRow";

const UserProfileCard = ({
    user,
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

            <div
                className="
                    flex
                    gap-6
                    items-center
                "
            >

                <img

                    src={user.avatar}

                    alt=""

                    className="
                        w-24
                        h-24
                        rounded-full
                    "

                />

                <div>

                    <h1
                        className="
                            text-3xl
                            font-heading
                            font-bold
                            text-secondary
                        "
                    >

                        {user.name}

                    </h1>

                    <p className="text-gray500">

                        @{user.username}

                    </p>

                </div>

            </div>

            <div className="mt-8 space-y-1">

                <UserInfoRow
                    label="Email"
                    value={user.email}
                />

                <UserInfoRow
                    label="Branch"
                    value={user.branch}
                />

                <UserInfoRow
                    label="Semester"
                    value={user.semester}
                />

                <UserInfoRow
                    label="Role"
                    value={user.role}
                />

                <UserInfoRow
                    label="Status"
                    value={user.status}
                />

                <UserInfoRow
                    label="Joined"
                    value={user.joined}
                />

            </div>

        </div>

    );

};

export default UserProfileCard;