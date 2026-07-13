import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({ children }) => {

    return (

        <section className="min-h-screen bg-background">

            <div className="flex">

                <Sidebar />

                <main
                    className="
                        flex-1
                        min-h-screen
                        overflow-x-hidden
                    "
                >

                    <Topbar />

                    <div className="p-8">

                        {children}

                    </div>

                </main>

            </div>

        </section>

    );

};

export default DashboardLayout;