import { useEffect, useState } from "react";
import { adminAPI } from "../api/admin.api";

const usePendingResources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchPendingResources = async () => {
    try {
      setLoading(true);

      const response = await adminAPI.getPendingResources();
      console.log(response.data.data);
      setResources(response.data.data.resources);
    } catch (error) {
      console.error("Failed to fetch pending resources", error);
    } finally {
      setLoading(false);
    }
  };
  
  const removeResources = (resourceId) => {
    setResources((prev) =>
      prev.filter((resource) => resource._id !== resourceId),
    );
  };
  useEffect(() => {
    fetchPendingResources();
  }, []);

  return {
    resources,
    loading,
    removeResources,
  };
};

export default usePendingResources;
