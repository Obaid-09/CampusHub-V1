import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
const UserRow = ({
    user,
    onView,
    onSuspend,
    onDelete,
    onPromote,
}) => {
    const navigate = useNavigate();
    return (

        <tr 
            
    className="border-b last:border-none">

            <td 
            onClick={() =>
                navigate(`/admin/users/${user._id}`)
            }
            className="px-6 py-5 cursor-pointer">

                <div
                    className="
                        flex
                        items-center
                        gap-4
                        min-w-[240px]
                    "
                >

                    <img

                        src={user.avatar}

                        alt={user.name}

                        className="
                            w-14
                            h-14
                            rounded-full
                            object-cover
                            shrink-0
                        "

                    />

                    <div className="min-w-0">

                        <h3
                            className="
                                font-semibold
                                text-secondary
                                truncate
                            "
                        >
                            {user.name}
                        </h3>

                        <p
                            className="
                                text-sm
                                text-gray500
                                truncate
                            "
                        >
                            @{user.username}
                        </p>

                    </div>

                </div>

            </td>

            <td className="px-6">

                <p className="truncate">

                    {user.email}

                </p>

            </td>

            <td className="px-6">

                {user.branch}

            </td>

            <td>

                <span
                    className={`
                        px-3
                        py-1
                        rounded-full
                        text-sm

                        ${
                            user.status==="Active"

                            ? "bg-green-100 text-green-700"

                            : "bg-red-100 text-red-700"

                        }
                    `}
                >

                    {user.status}

                </span>

            </td>

            <td className="px-6">

                {user.role}

            </td>

            <td>

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        flex-nowrap
                    "
                >

                    <Button

                        size="sm"
                        className="px-4"
                        variant="outline"

                        onClick={()=>onView(user)}

                    >

                        View

                    </Button>

                    <Button

                        size="sm"
                        className="px-4"
                        variant="secondary"

                        onClick={()=>onPromote(user)}

                    >

                        Promote

                    </Button>

                    <Button

                        size="sm"
                        className="px-4"
                        variant="danger"

                        onClick={()=>onSuspend(user)}

                    >

                        Suspend

                    </Button>

                    <Button

                        size="sm"
                        className="px-4"
                        variant="ghost"

                        onClick={()=>onDelete(user)}

                    >

                        Delete

                    </Button>

                </div>

            </td>

        </tr>

    );

};

export default UserRow;