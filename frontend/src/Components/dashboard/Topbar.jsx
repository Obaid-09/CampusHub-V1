import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Topbar = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  return (
    <header
      className="
                bg-white
                border-b
                border-gray100

                px-8
                py-5

                flex
                justify-between
                items-center
            "
    >
      <div>
        <h2
          className="
                        text-3xl
                        font-heading
                        font-bold
                        text-secondary
                    "
        >
          Dashboard
        </h2>

        <p className="text-gray600 mt-1">Welcome back 👋</p>
      </div>

      <div
        className="
                    flex
                    items-center
                    gap-5
                "
      >
        <button
          onClick={() => navigate("/dashboard/notifications")}
          className="
                        relative
                        p-3
                        rounded-xl
                        hover:bg-background
                    "
        >
          <Bell size={22} />

          <span
            className="
                            absolute
                            top-2
                            right-2

                            w-2
                            h-2

                            rounded-full
                            bg-primary
                        "
          />
        </button>

        <img
          src={user?.avatar}
          alt="Profile"
          className="
                        w-12
                        h-12

                        rounded-full

                        border-2
                        border-primary
                    "
        />
      </div>
    </header>
  );
};

export default Topbar;
