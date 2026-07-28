import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { adminAPI } from "../api/admin.api";

const useAdminUser = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      setLoading(true);

      const response = await adminAPI.getUserById(id);
      setUser(response.data.data);
    } catch (error) {
      console.error("Failed to fetch user", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  return {
    user,
    loading,
    refreshUser: fetchUser,
  };
};

export default useAdminUser;
