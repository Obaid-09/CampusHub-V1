import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
const AdminResourceActions = ({
    resource,
    onView,
    onEdit,
    onDelete,
    onApprove,
    onReject,
    onAnalytics,
    onUploader,
}) => {

    const navigate = useNavigate();

    return (

        <div className="space-y-3">

            <div className="grid grid-cols-2 gap-3">

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

            <div className="grid grid-cols-2 gap-3">

                <Button

                    size="sm"

                    variant="secondary"

                    onClick={() =>
                        navigate(
                            `/admin/analytics?resource=${resource._id}`
                        )
                    }

                >

                    Analytics

                </Button>

                <Button

                    size="sm"

                    variant="outline"

                    onClick={() =>
                        navigate(
                            `/admin/users/${resource.uploader._id}`
                        )
                    }

                >

                    Uploader

                </Button>

            </div>

            {

                resource.status==="Pending"

                &&

                <div className="grid grid-cols-2 gap-3">

                    <Button

                        size="sm"

                        onClick={()=>
                            onApprove(resource)
                        }

                    >

                        Approve

                    </Button>

                    <Button

                        size="sm"

                        variant="danger"

                        onClick={()=>
                            onReject(resource)
                        }

                    >

                        Reject

                    </Button>

                </div>

            }

            <Button

                className="w-full"

                size="sm"

                variant="danger"

                onClick={()=>
                    onDelete(resource)
                }

            >

                Delete Resource

            </Button>

        </div>

    );

};

export default AdminResourceActions;