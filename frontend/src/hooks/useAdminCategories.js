import { useCallback, useEffect, useState } from "react";
import { adminAPI } from "../api/admin.api";

const useAdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    search: "",
    type: "",
    page: 1,
    limit: 20,
  });

  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    totalCategories: 0,
  });

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);

      const response = await adminAPI.getCategories(filters);

      const data = response.data.data;

      setCategories(data.categories);

      setPagination({
        page: data.page,
        totalPages: data.totalPages,
        totalCategories: data.totalCategories,
      });
    } catch (error) {
      console.error("Failed to fetch categories.", error);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return {
    categories,
    loading,
    filters,
    setFilters,
    pagination,
    refreshCategories: fetchCategories,
  };
};

export default useAdminCategories;
