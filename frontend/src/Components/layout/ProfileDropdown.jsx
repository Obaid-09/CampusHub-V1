import Avatar from "../common/Avatar";
import useAuth from "../../hooks/useAuth";

const ProfileDropdown = () => {
  // Later Redux
  const { loading, isAuthenticated, user } = useAuth();
  if (loading) return null;
  if (!isAuthenticated) return null;

  return (
    <button className="flex items-center gap-2">
      <Avatar src={user?.avatar} alt={user?.fullName} size="md" />
    </button>
  );
};

export default ProfileDropdown;
