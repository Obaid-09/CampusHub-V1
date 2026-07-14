import { useState } from "react";

import ResourceCard from "../resource/ResourceCard";


import ResourceActions from "./ResourceActions";
import DeleteResourceModal from "./DeleteResourceModal";
import { useNavigate } from "react-router-dom";

const OwnerResourceCard = ({
    resource,
}) => {

   
    const navigate = useNavigate();
    const [showDelete, setShowDelete] = useState(false);

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
                        setShowDelete(true)
                    }

                    onAnalytics={() =>
                        navigate(`/dashboard/resources/${resource._id}/analytics`)
                    }
                />
            </div>

            <DeleteResourceModal
                open={showDelete}
                onClose={() =>
                    setShowDelete(false)
                }

                onDelete={() =>
                    console.log("Delete")
                }
            />
        </>
    );
};

export default OwnerResourceCard;