import {
    LayoutDashboard,
    BookOpen,
    Upload,
    Bookmark,
    Bell,
    User,
    Settings,
    LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const links = [

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

    return (

        <aside
            className="
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
                    text-3xl
                    font-heading
                    font-bold
                    text-primary
                    mb-10
                "
            >
                CampusHub
            </h1>

            <nav className="space-y-2">

                {links.map((item) => {

                    const Icon = item.icon;

                    return (

                        <NavLink

                            key={item.path}

                            to={item.path}

                            className={({ isActive }) => `
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