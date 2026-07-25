import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { adminAPI } from "../api/admin.api";

const useAdminResource = () => {
  const { id } = useParams();

  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchResource = async () => {
    try {
      setLoading(true);

      const response = await adminAPI.getResourceById(id)

      setResource(response.data.data);
    } catch (error) {
      console.error("Failed to fetch resource", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResource();
  }, [id]);

  return {
    resource,
    loading,
    refreshResource: fetchResource,
  };
};

export default useAdminResource;
