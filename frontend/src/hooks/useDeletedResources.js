import { useEffect, useState } from "react";
import { adminAPI } from "../api/admin.api";

const initialFilters = {
  search: "",
  sort: "latest",
};

const useDeletedResources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState(initialFilters);

  const fetchDeletedResources = async () => {
    try {
      setLoading(true);

      const response = await adminAPI.getDeletedResources();
      console.log(response.data);
      console.log(response.data.data.resources);
      setResources(response.data.data.resources);
    } catch (error) {
      console.error("Failed to fetch deleted resources", error);
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
    fetchDeletedResources();
  }, []);

  return {
    resources,
    loading,
    filters,
    setFilters,
    refreshResources: fetchDeletedResources,
    removeResources,
  };
};

export default useDeletedResources;
