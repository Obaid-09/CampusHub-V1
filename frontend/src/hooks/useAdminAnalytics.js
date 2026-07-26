import { useEffect, useState } from "react";
import { adminAPI } from "../api/admin.api";

const useAdminAnalytics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);

      const response = await adminAPI.getAnalytics();

      setAnalytics(response.data.data);
    } catch (error) {
      console.error("Failed to fetch analytics", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  return {
    analytics,
    loading,
    refreshAnalytics: fetchAnalytics,
  };
};

export default useAdminAnalytics;
