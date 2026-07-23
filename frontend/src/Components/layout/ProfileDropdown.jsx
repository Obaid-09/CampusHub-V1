// import Avatar from "../common/Avatar";
// import useAuth from "../../hooks/useAuth";

// const ProfileDropdown = () => {
//   // Later Redux
//   const { loading, isAuthenticated, user, logout } = useAuth();
//   if (loading) return null;
//   if (!isAuthenticated) return null;

//   return (
//     <button className="flex items-center gap-2">
//       <Avatar src={user?.avatar} alt={user?.fullName} size="md" />
//     </button>
//   );
// };

// export default ProfileDropdown;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  LayoutDashboard,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";

import Avatar from "../common/Avatar";
import useAuth from "../../hooks/useAuth";
import { successToast, errorToast } from "../../utils/toast";

const ProfileDropdown = () => {
  const { loading, isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  if (loading || !isAuthenticated) return null;

  const handleLogout = async () => {
    try {
      await logout();

      successToast("Logged out successfully");

      navigate("/login", {
        replace: true,
      });
    } catch (error) {
      errorToast(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          items-center
          gap-2
          rounded-full
          hover:bg-gray-100
          p-1
          transition-all
        "
      >
        <Avatar src={user?.avatar} alt={user?.fullname} size="md" />

        <ChevronDown
          size={18}
          className={`
            transition-transform
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            mt-3
            w-64

            bg-white
            rounded-2xl
            shadow-xl
            border

            overflow-hidden
            z-50
          "
        >
          <div className="px-5 py-4 border-b">
            <div className="font-semibold text-secondary">{user?.fullname}</div>

            <div className="text-sm text-gray500">@{user?.username}</div>
          </div>

          <Link
            to="/profile"
            onClick={() => setOpen(false)}
            className="
              flex
              items-center
              gap-3
              px-5
              py-3
              hover:bg-gray-50
            "
          >
            <User size={18} />
            Profile
          </Link>

          <Link
            to="/dashboard"
            onClick={() => setOpen(false)}
            className="
              flex
              items-center
              gap-3
              px-5
              py-3
              hover:bg-gray-50
            "
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link
            to="/dashboard/settings"
            onClick={() => setOpen(false)}
            className="
              flex
              items-center
              gap-3
              px-5
              py-3
              hover:bg-gray-50
            "
          >
            <Settings size={18} />
            Settings
          </Link>

          <button
            onClick={handleLogout}
            className="
              w-full

              flex
              items-center
              gap-3

              px-5
              py-3

              text-red-600

              hover:bg-red-50
            "
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
