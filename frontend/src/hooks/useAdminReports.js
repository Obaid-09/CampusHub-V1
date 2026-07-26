import { useEffect, useState } from "react";
import { adminAPI } from "../api/admin.api";

const initialFilters = {
  search: "",
  status: "",
  reason: "",
  sort: "latest",
};

const useAdminReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState(initialFilters);

  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    totalReports: 0,
  });

  const fetchReports = async (page = 1) => {
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

      if (filters.status) {
        params.status = filters.status;
      }

      if (filters.reason) {
        params.reason = filters.reason;
      }

      const response = await adminAPI.getAllReports(params);

      const data = response.data.data;

      setReports(data.reports);

      setPagination({
        page: data.page,
        totalPages: data.totalPages,
        totalReports: data.totalReports,
      });
    } catch (error) {
      console.error("Failed to fetch reports", error);
    } finally {
      setLoading(false);
    }
  };

  const removeReport = (reportId) => {
    setReports((prev) => prev.filter((report) => report._id !== reportId));
  };

  useEffect(() => {
    fetchReports();
  }, [filters]);

  return {
    reports,
    loading,

    filters,
    setFilters,

    pagination,

    refreshReports: fetchReports,

    removeReport,
  };
};

export default useAdminReports;
