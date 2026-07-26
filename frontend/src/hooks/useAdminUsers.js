import { useEffect, useState } from "react";
import { adminAPI } from "../api/admin.api";

const initialFilters = {
  search: "",
  role: "",
  branch: "",
  sort: "latest",
};

const useAdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState(initialFilters);

  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    totalUsers: 0,
  });

  const fetchUsers = async (page = 1) => {
    try {
      setLoading(true);

      const params = {
        page,
        limit: 10,
        sort: filters.sort,
      };

      if (filters.search.trim()) {
        params.search = filters.search.trim();
      }

      if (filters.role) {
        params.role = filters.role;
      }

      if (filters.branch) {
        params.branch = filters.branch;
      }

      const response = await adminAPI.getAllUsers(params);

      const data = response.data.data;

      setUsers(data.users);

      setPagination({
        page: data.page,
        totalPages: data.totalPages,
        totalUsers: data.totalUsers,
      });
    } catch (error) {
      console.error("Failed to fetch users", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [filters]);

  return {
    users,
    loading,

    filters,
    setFilters,

    pagination,

    refreshUsers: fetchUsers,
  };
};

export default useAdminUsers;
