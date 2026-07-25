import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResourceEditor from "../upload/ResourceEditor";
import Loader from "../../components/ui/Loader";
import EmptyState from "../../components/ui/EmptyState";
import { resourceAPI } from "../../api/resource.api";

const EditResource = () => {
    const { id } = useParams();
    const [resource, setResource] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResource = async () => {
            try {
                const response = await resourceAPI.getMyUploads();
                setResource(response.data.data.uploads?.find((item) => item._id === id) || null);
            } finally {
                setLoading(false);
            }
        };
        fetchResource();
    }, [id]);

    if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader /></div>;
    if (!resource) return <div className="min-h-screen flex items-center justify-center px-6"><EmptyState title="Resource not found" description="You can only edit resources you uploaded." /></div>;

    return (

        <ResourceEditor

            editMode={true}

            initialData={resource}

        />

    );

};

export default EditResource;
