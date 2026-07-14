import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

const AdminLayout = ({
    children,
}) => {

    return (

        <div
            className="
                flex

                min-h-screen

                bg-background
            "
        >

            <AdminSidebar/>

            <main
                className="
                    flex-1

                    p-8

                    overflow-y-auto
                "
            >

                <AdminTopbar/>

                <div className="mt-8">

                    {children}

                </div>

            </main>

        </div>

    );

};

export default AdminLayout;