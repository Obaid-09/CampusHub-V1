import { useState } from "react";

import AdminLayout from "../../components/admin/AdminLayout";

import MyResourcesToolbar from "../../components/dashboard/MyResourcesToolbar";

import AdminResourcesGrid from "../../components/admin/AdminResourceGrid";

import DeleteResourceModal from "../../components/dashboard/DeleteResourceModal";

import { dummyResources } from "../../constants/resources";

const AllResources = () => {

    const [resources] = useState(dummyResources);

    const [search, setSearch] = useState("");

    const [sort, setSort] = useState("latest");

    const [selectedResource, setSelectedResource] = useState(null);

    const [showDelete, setShowDelete] = useState(false);

    const filtered = resources.filter((resource)=>

        resource.title
            .toLowerCase()
            .includes(search.toLowerCase())

    );

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

                        All Resources

                    </h1>

                    <p className="mt-2 text-gray600">

                        Manage every resource uploaded on CampusHub.

                    </p>

                </div>

                <MyResourcesToolbar

                    search={search}

                    setSearch={setSearch}

                    sort={sort}

                    setSort={setSort}

                />

                <AdminResourcesGrid

                  resources={filtered}

                  onDelete={(resource) => {

                      setSelectedResource(resource);

                      setShowDelete(true);

                  }}

                  onApprove={(resource) => {

                      console.log("Approve", resource);

                  }}

                  onReject={(resource) => {

                      console.log("Reject", resource);

                  }}

              />

                <DeleteResourceModal

                    open={showDelete}

                    onClose={()=>
                        setShowDelete(false)
                    }

                    onConfirm={()=>
                        console.log(selectedResource)
                    }

                />

            </div>

        </AdminLayout>

    );

};

export default AllResources;