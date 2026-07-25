import { useEffect, useState } from "react";
import { profileAPI } from "../api/profile.api";

const useProfile = () => {
  const [profile, setProfile] = useState({
    user: {},
    stats: {},
    recentlyViewed: [],
    recentActivity: [],
  });

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    try {
      setLoading(true);

      const data = await profileAPI.getProfile();

      setProfile(data);
    } catch (err) {
      console.error(err);

      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return {
    profile,

    loading,

    error,

    refetch: fetchProfile,
  };
};

export default useProfile;
