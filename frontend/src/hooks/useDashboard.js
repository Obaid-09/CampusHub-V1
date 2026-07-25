import { useEffect, useState } from "react";
import { dashboardAPI } from "../api/dashboard.api";

const useDashboard = () => {
  const [dashboard, setDashboard] = useState({
    stats: {},
    recentActivity: [],
    trendingResources: [],
    recommendedResources: [],
    progress: {},
  });

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const data = await dashboardAPI.getDashboard();

      setDashboard(data);
    } catch (err) {
      console.error(err);

      setError(err);
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

    error,

    refetch: fetchDashboard,
  };
};

export default useDashboard;
