import useAuth from "../../hooks/useAuth";
import {
  Bell,
  ChevronDown,
  Search,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminTopbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);
  const handleLogout = async () => {
    try {
      await logout();

      navigate("/login", {
        replace: true,
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header
      className="
        bg-white
        rounded-2xl
        border
        border-gray100
        shadow-card
        px-6
        py-4
        flex
        items-center
        justify-between
        gap-6
      "
    >
      {/* Search */}
      <div
        className="
          flex-1
          max-w-2xl

          flex
          items-center
          gap-3

          bg-gray50
          border
          border-gray100
          rounded-xl

          px-4
          py-3
        "
      >
        <Search size={20} className="text-gray400 shrink-0" />

        <input
          type="text"
          placeholder="Search resources, users..."
          className="
            w-full
            bg-transparent
            outline-none

            text-secondary
            placeholder:text-gray400
          "
        />
      </div>

      {/* Right Section */}
      <div
        className="
          flex
          items-center
          gap-4
        "
      >
        {/* Notifications */}
        <button
          className="
            relative

            w-11
            h-11

            rounded-full

            flex
            items-center
            justify-center

            hover:bg-gray50
            transition-all
          "
        >
          <Bell size={21} className="text-gray500" />

          <span
            className="
              absolute
              top-2
              right-2

              w-2.5
              h-2.5

              rounded-full
              bg-red-500
            "
          />
        </button>

        {/* User */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="
        flex
        items-center
        gap-3

        px-3
        py-2

        rounded-xl

        hover:bg-gray50

        transition-all

        cursor-pointer
    "
          >
            <div className="hidden md:block text-right">
              <p className="font-semibold text-secondary leading-none">
                {user?.fullname}
              </p>

              <p className="text-sm text-gray500 mt-1 capitalize">
                {user?.role}
              </p>
            </div>

            <img
              src={user?.avatar}
              alt={user?.fullname}
              className="
            w-11
            h-11
            rounded-full
            object-cover
            border
            border-gray200
        "
            />

            <ChevronDown
              size={18}
              className={`
            text-gray400
            transition-transform
            duration-200
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

            w-56

            bg-white

            rounded-2xl

            border
            border-gray100

            shadow-xl

            overflow-hidden

            z-50
        "
            >
              <div
                className="
                px-5
                py-4

                border-b
                border-gray100
            "
              >
                <p className="font-semibold text-secondary">{user?.fullname}</p>

                <p className="text-sm text-gray500">{user?.email}</p>
              </div>

              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/profile");
                }}
                className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-5
                    py-3
                    hover:bg-gray50
                    transition
                "
              >
                <User size={18} />
                My Profile
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/admin/settings");
                }}
                className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-5
                    py-3
                    hover:bg-gray50
                    transition
                "
              >
                <Settings size={18} />
                Settings
              </button>

              <div className="border-t border-gray100" />

              <button
                onClick={async () => {
                  setOpen(false);
                  await handleLogout();
                }}
                className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-5
                    py-3
                    text-red-600
                    hover:bg-red-50
                    transition
                "
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;
