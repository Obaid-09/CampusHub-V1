import { useEffect, useState } from "react";
import { adminAPI } from "../api/admin.api";

const initialFilters = {
  search: "",
  branch: "",
  semester: "",
  status: "",
  type: "",
  sort: "latest",
};

const useAdminResources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState(initialFilters);

  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    totalResources: 0,
  });

  const fetchResources = async (page = 1) => {
    try {
      setLoading(true);

      const params = {
        page,
        limit: 9,
        sort: filters.sort,
      };

      if (filters.search.trim()) {
        params.search = filters.search.trim();
      }

      if (filters.branch) {
        params.branch = filters.branch;
      }

      if (filters.semester) {
        params.semester = filters.semester;
      }

      if (filters.status) {
        params.status = filters.status;
      }

      if (filters.type) {
        params.type = filters.type;
      }

      const response = await adminAPI.getAllResources(params);

      const data = response.data.data;

      setResources(data.resources);

      setPagination({
        page: data.page,
        totalPages: data.totalPages,
        totalResources: data.totalResources,
      });
    } catch (error) {
      console.error("Failed to fetch resources", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, [filters]);

  return {
    resources,
    loading,

    filters,
    setFilters,

    pagination,

    refreshResources: fetchResources,
  };
};

export default useAdminResources;
