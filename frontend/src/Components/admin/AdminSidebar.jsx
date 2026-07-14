import {

    LayoutDashboard,

    Clock3,

    FolderOpen,

    Users,

    Flag,

    FolderTree,

    BarChart3,

    Settings,

    LogOut,

} from "lucide-react";

import AdminNavItem from "./AdminNavItem";

const AdminSidebar = () => {

    return (

        <aside

            className="
                w-72
                h-screen
                bg-secondary
                text-white

                flex
                flex-col

                sticky
                top-0
            "

        >

            <div

                className="
                    p-8

                    border-b

                    border-white/10
                "

            >

                <h1

                    className="
                        text-3xl

                        font-heading

                        font-bold

                        text-primary
                    "

                >

                    CampusHub

                </h1>

                <p className="text-gray300 mt-2">

                    Admin Panel

                </p>

            </div>

            <nav

                className="
                    flex-1

                    p-5

                    space-y-2
                "

            >

                <AdminNavItem

                    icon={LayoutDashboard}

                    label="Dashboard"

                    to="/admin"

                />

                <AdminNavItem

                    icon={Clock3}

                    label="Pending Resources"

                    to="/admin/pending"

                />

                <AdminNavItem

                    icon={FolderOpen}

                    label="All Resources"

                    to="/admin/resources"

                />

                <AdminNavItem

                    icon={Users}

                    label="Users"

                    to="/admin/users"

                />

                <AdminNavItem

                    icon={Flag}

                    label="Reports"

                    to="/admin/reports"

                />

                <AdminNavItem

                    icon={FolderTree}

                    label="Categories"

                    to="/admin/categories"

                />

                <AdminNavItem

                    icon={BarChart3}

                    label="Analytics"

                    to="/admin/analytics"

                />

                <AdminNavItem

                    icon={Settings}

                    label="Settings"

                    to="/admin/settings"

                />

            </nav>

            <div className="p-5">

                <button

                    className="
                        flex
                        items-center
                        gap-3

                        text-red-300

                        hover:text-red-200

                        transition-all
                    "

                >

                    <LogOut size={20}/>

                    Logout

                </button>

            </div>

        </aside>

    );

};

export default AdminSidebar;