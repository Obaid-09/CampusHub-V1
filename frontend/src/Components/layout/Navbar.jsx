import { useState } from "react";

import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

import Logo from "../common/Logo";
import Button from "../ui/Button";
import NavLinks from "./Navlinks";
import SearchBox from "./SearchBox";
import ProfileDropdown from "./ProfileDropdown";
import MobileMenu from "./MobileMenu";

import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { loading, isAuthenticated } = useAuth();

  return (
    <>
      <nav
        className="
                    sticky
                    top-0
                    z-40
                    bg-white/80
                    backdrop-blur-md
                    border-b
                    border-gray100
                "
      >
        <div
          className="
                        max-w-5xl
                        mx-auto
                        px-6
                        h-20
                        flex
                        items-center
                        justify-between
                    "
        >
          <Logo />

          <div className="hidden md:flex">
            <NavLinks />
          </div>

          <SearchBox />

          <div className="hidden md:flex items-center gap-4">
            {!loading &&
              (isAuthenticated ? (
                <ProfileDropdown />
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline" className="text-sm">Login</Button>
                  </Link>

                  <Link to="/register">
                    <Button className="text-sm">Register</Button>
                  </Link>
                </>
              ))}
          </div>

          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
