import { useState } from "react";


import PendingToolbar from "../../components/admin/PendingToolbar";
import PendingGrid from "../../components/admin/PendingGrid";

import { pendingResources } from "../../constants/admin";
import AdminLayout from "../../components/admin/AdminLayout";

const PendingResources = () => {

    const [resources] = useState(pendingResources);

    return (

        <AdminLayout>

            <div className="space-y-8">

                <div>

                    <h1
                        className="
                            text-4xl
                            font-heading
                            font-bold
                            text-secondary
                        "
                    >

                        Pending Resources

                    </h1>

                    <p className="mt-2 text-gray600">

                        Review uploaded resources before publishing them.

                    </p>

                </div>

                <PendingToolbar />

                <PendingGrid
                    resources={resources}
                />

            </div>

        </AdminLayout>

    );

};

export default PendingResources;