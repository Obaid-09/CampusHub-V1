import { useCallback, useEffect, useState } from "react";
import { adminAPI } from "../api/admin.api";

const useAdminSettings = () => {
  const [settings, setSettings] = useState(null);

  const [loading, setLoading] = useState(true);

  const fetchSettings = useCallback(async () => {
    try {
      setLoading(true);

      const response = await adminAPI.getSettings();

      setSettings(response.data.data);
    } catch (error) {
      console.error("Failed to fetch settings.", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  return {
    settings,
    loading,
    refreshSettings: fetchSettings,
  };
};

export default useAdminSettings;
