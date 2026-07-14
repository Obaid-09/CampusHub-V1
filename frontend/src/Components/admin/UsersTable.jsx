import UserRow from "./UserRow";

const UsersTable = ({
    users,
    onView,
    onSuspend,
    onDelete,
    onPromote,
}) => {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                shadow-card
                overflow-x-auto
            "
        >

            <table className="min-w-[1150px] w-full">

                <thead>

                    <tr className="border-b">
                        <th className="w-72 px-6 py-5 text-left">
                            User
                        </th>

                        <th className="w-72 text-left">

                            Email

                        </th>

                        <th className="w-28 text-left">

                            Branch

                        </th>

                        <th className="w-36 text-left">

                            Status

                        </th>

                        <th className="w-36 text-left">

                            Role

                        </th>

                        <th className="w-[340px] text-left">

                            Actions

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        users.map(user=>(

                            <UserRow

                                key={user._id}

                                user={user}

                                onView={onView}

                                onSuspend={onSuspend}

                                onDelete={onDelete}

                                onPromote={onPromote}

                            />

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default UsersTable;