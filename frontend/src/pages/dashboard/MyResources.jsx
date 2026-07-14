import { useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import MyResourcesToolbar from "../../components/dashboard/MyResourcesToolbar";
import MyResourcesGrid from "../../components/dashboard/MyResourcesGrid";
import DeleteResourceModal from "../../Components/dashboard/DeleteResourceModal";
import { dummyResources } from "../../constants/resources";

const MyResources = () => {

    const [resources] = useState(dummyResources);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("latest");
    const [selectedResource, setSelectedResource] = useState(null);
    const [showDelete, setShowDelete] = useState(false);
    const handleDelete = (resource) => {
        setSelectedResource(resource);
        setShowDelete(true);
    };

    const confirmDelete = () => {
        console.log(selectedResource);
        setShowDelete(false);
    };
    const filteredResources = resources.filter((resource) =>
        resource.title
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (

        <DashboardLayout>

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
                        My Resources
                    </h1>

                    <p className="mt-2 text-gray600">
                        Manage all your uploaded resources.
                    </p>

                </div>

                <MyResourcesToolbar

                    search={search}

                    setSearch={setSearch}

                    sort={sort}

                    setSort={setSort}

                />

                <MyResourcesGrid

                    resources={filteredResources}

                    onDelete={handleDelete}

                />

                <DeleteResourceModal

                    open={showDelete}

                    onClose={() => setShowDelete(false)}

                    onConfirm={confirmDelete}

                />

            </div>

        </DashboardLayout>

    );

};

export default MyResources;