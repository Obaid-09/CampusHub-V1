import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Resources",
    path: "/resources",
  },
  {
    name: "Upload",
    path: "/upload",
  },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "About",
    path: "/about",
  },
];

const NavLinks = ({ mobile = false, onNavigate }) => {
  return (
    <div className={mobile ? "flex flex-col gap-6" : "flex items-center gap-8"}>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={onNavigate}
          className={({ isActive }) =>
            `
                        font-medium
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "text-primary"
                            : "text-secondary hover:text-primary"
                        }
                    `
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
