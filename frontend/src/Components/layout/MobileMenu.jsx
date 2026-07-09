import { X } from "lucide-react";
import Logo from "../common/Logo";
import NavLinks from "./NavLinks";

const MobileMenu = ({
    open,
    setOpen,
}) => {

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
                ${
                    open
                        ? "translate-x-0"
                        : "-translate-x-full"
                }
            `}
        >

            <div className="p-6">
                <div className="flex justify-between items-center">
                    <Logo />
                    <button
                        onClick={() =>
                            setOpen(false)
                        }
                    >
                        <X />
                    </button>
                </div>

                <div className="mt-10">
                    <NavLinks mobile />
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;