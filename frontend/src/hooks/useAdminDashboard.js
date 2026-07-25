import { useEffect, useState } from "react";
import { adminAPI } from "../api/admin.api";

const useAdminDashboard = () => {
  const [dashboard, setDashboard] = useState({
    users: {},
    resources: {},
    platform: {},
  });

  const [loading, setLoading] = useState(true);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const response = await adminAPI.getDashboard();

      setDashboard(response.data.data);
    } catch (error) {
      console.error("Error fetching admin dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return {
    dashboard,
    loading,
    refreshDashboard: fetchDashboard,
  };
};

export default useAdminDashboard;
