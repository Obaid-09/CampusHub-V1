import { useState } from "react";

import AdminLayout from "../../components/admin/AdminLayout";

import AdminResourcesToolbar from "../../components/admin/AdminResourcesToolbar";
import AdminResourceGrid from "../../components/admin/AdminResourceGrid";

import { dummyResources } from "../../constants/resources";

const AllResources = () => {
  const [resources] = useState(dummyResources);

  const [search, setSearch] = useState("");

  const [branch, setBranch] = useState("");

  const [type, setType] = useState("");

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesBranch = !branch || resource.branch === branch;

    const matchesType = !type || resource.type === type;

    return matchesSearch && matchesBranch && matchesType;
  });

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

        <AdminResourcesToolbar
          search={search}
          setSearch={setSearch}
          branch={branch}
          setBranch={setBranch}
          type={type}
          setType={setType}
        />
        <AdminResourceGrid resources={filteredResources} />
      </div>
    </AdminLayout>
  );
};

export default AllResources;
