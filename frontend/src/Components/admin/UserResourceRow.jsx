import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const statusColors = {

    Approved: "bg-green-100 text-green-700",

    Pending: "bg-yellow-100 text-yellow-700",

    Rejected: "bg-red-100 text-red-700",

};

const UserResourceRow = ({ resource }) => {

    const navigate = useNavigate();

    return (

        <tr className="border-b border-gray100">

            <td className="py-5">

                {resource.title}

            </td>

            <td>

                {resource.subject}

            </td>

            <td>

                {resource.type}

            </td>

            <td>

                {resource.downloads}

            </td>

            <td>

                <span

                    className={`
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        ${statusColors[resource.status]}
                    `}

                >

                    {resource.status}

                </span>

            </td>

            <td>

                <div className="flex gap-2">

                    <Button

                        size="sm"

                        variant="outline"

                        onClick={() =>
                            navigate(`/resources/${resource._id}`)
                        }

                    >

                        View

                    </Button>

                    <Button

                        size="sm"

                        onClick={() =>
                            navigate(`/admin/resources/${resource._id}/edit`)
                        }

                    >

                        Edit

                    </Button>

                </div>

            </td>

        </tr>

    );

};

export default UserResourceRow;