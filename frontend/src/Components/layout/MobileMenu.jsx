import { X, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../common/Logo";
import NavLinks from "./NavLinks";
import Button from "../ui/Button";

import useAuth from "../../hooks/useAuth";

const MobileMenu = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const { loading, isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      setOpen(false);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`
                fixed
                top-0
                left-0
                h-screen
                w-72
                bg-white
                shadow-2xl
                z-50
                transform
                transition-all
                duration-300
                ${open ? "translate-x-0" : "-translate-x-full"}
            `}
    >
      <div className="p-6">
        <div className="flex justify-between items-center">
          <Logo />

          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <div className="mt-10">
          <NavLinks mobile onNavigate={() => setOpen(false)} />
        </div>

        {!loading && (
          <div className="mt-10 space-y-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  onClick={() => setOpen(false)}
                  className="
                                        block
                                        text-lg
                                        text-gray700
                                        hover:text-primary
                                    "
                >
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="
                                        flex
                                        items-center
                                        gap-2
                                        text-red-500
                                        text-lg
                                        hover:text-red-600
                                    "
                >
                  <LogOut size={20} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)}>
                  <Button variant="outline" className="w-full mb-4">
                    Login
                  </Button>
                </Link>

                <Link to="/register" onClick={() => setOpen(false)}>
                  <Button className="w-full">Register</Button>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
