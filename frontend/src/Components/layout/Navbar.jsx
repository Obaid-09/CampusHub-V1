import { useState } from "react";

import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import Button from "../ui/Button";

import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import ProfileDropdown from "./ProfileDropdown";
import MobileMenu from "./MobileMenu";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    // Later Redux

    const isLoggedIn = false;

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
                        max-w-7xl
                        mx-auto
                        px-6
                        h-20
                        flex
                        items-center
                        justify-between
                    "
                >

                    <Logo />
                    <div className="hidden lg:flex">
                        <NavLinks />
                    </div>

                    <SearchBox />

                    <div className="hidden lg:flex items-center gap-4">
                        {isLoggedIn ? (
                            <ProfileDropdown />
                        ) : (
                            <>
                            <Link to="/login">
                                <Button
                                    variant="outline"
                                >
                                    Login
                                </Button>
                            </Link>
                            <Link to="/register">
                                <Button>
                                    Register
                                </Button>
                            </Link>
                            </>
                        )}
                    </div>

                    <button
                        className="lg:hidden"
                        onClick={() =>
                            setOpen(true)
                        }
                    >
                        <Menu size={28} />
                    </button>
                </div>

            </nav>
            <MobileMenu
                open={open}
                setOpen={setOpen}
            />

        </>

    );
};

export default Navbar;