import {
  LayoutDashboard,
  BookOpen,
  Upload,
  Bookmark,
  Bell,
  User,
  Settings,
  LogOut,
  Home,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import Avatar from "../common/Avatar";
import { successToast, errorToast } from "../../utils/toast";

const links = [
  {
    name: "Home",
    icon: Home,
    path: "/",
  },
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },

  {
    name: "My Resources",
    icon: BookOpen,
    path: "/dashboard/resources",
  },

  {
    name: "Upload",
    icon: Upload,
    path: "/upload",
  },

  {
    name: "Bookmarks",
    icon: Bookmark,
    path: "/dashboard/bookmarks",
  },

  {
    name: "Notifications",
    icon: Bell,
    path: "/dashboard/notifications",
  },

  {
    name: "Profile",
    icon: User,
    path: "/profile",
  },

  {
    name: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { user } = useAuth();
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
    <aside
      className="
                max-w-[50%]
                w-72
                min-h-screen
                bg-white
                border-r
                border-gray100
                px-6
                py-8
            "
    >
      <h1
        className="
                    text-xl
                    sm:text-3xl
                    font-heading
                    font-bold
                    text-primary
                    mb-10
                "
      >
        CampusHub
      </h1>

      <div
        className="
        sm:flex
        sm:items-center

        gap-3
        mb-10

    "
      >
        <Avatar src={user?.avatar} alt={user?.fullname} size="lg" />

        <div>
          <h3
            className="
                text-sm
                sm:font-semibold
                text-secondary
            "
          >
            {user?.fullname}
          </h3>

          <p
            className="

                text-sm

                text-gray500

            "
          >
            {user?.email}
          </p>
        </div>
      </div>

      <nav className="space-y-2">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                                text-sm
                                flex
                                items-center
                                gap-4
                                px-4
                                py-3
                                rounded-xl
                                transition-all

                                ${
                                  isActive
                                    ? "bg-primary text-white"
                                    : "text-gray600 hover:bg-primaryLight hover:text-primary"
                                }
                            `}
            >
              <Icon size={20} />

              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <button
        onClick={handleLogout}
        className="
                    mt-12

                    flex
                    items-center
                    gap-4

                    px-4
                    py-3

                    rounded-xl

                    text-red-500

                    hover:bg-red-50
                "
      >
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
