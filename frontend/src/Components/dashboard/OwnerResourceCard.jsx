import ResourceCard from "../resource/ResourceCard";
import ResourceActions from "./ResourceActions";
import { useNavigate } from "react-router-dom";

const OwnerResourceCard = ({
    resource,
    onDelete,
}) => {

    const navigate = useNavigate();

    return (

        <>
            <div>
                <ResourceCard
                    resource={resource}
                />

                <ResourceActions
                    onEdit={() =>
                        navigate(`/dashboard/resources/${resource._id}/edit`)
                    }

                    onDelete={() =>
                        onDelete(resource)
                    }

                    onAnalytics={() =>
                        navigate(`/dashboard/resources/${resource._id}/analytics`)
                    }
                />
            </div>

        </>
    );
};

export default OwnerResourceCard;
