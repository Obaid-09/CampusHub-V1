// import { useEffect, useMemo, useState } from "react";

// import DashboardLayout from "../../components/dashboard/DashboardLayout";
// import MyResourcesToolbar from "../../components/dashboard/MyResourcesToolbar";
// import MyResourcesGrid from "../../components/dashboard/MyResourcesGrid";
// import DeleteResourceModal from "../../components/dashboard/DeleteResourceModal";
// import Loader from "../../components/ui/Loader";
// import { resourceAPI } from "../../api/resource.api";
// import { errorToast, successToast } from "../../utils/toast";
// import useMyResources from "../../hooks/useMyResources";const MyResources = () => {
//   const [resources, setResources] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [deleting, setDeleting] = useState(false);
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("latest");
//   const [selectedResource, setSelectedResource] = useState(null);
//   const [showDelete, setShowDelete] = useState(false);
//   const handleDelete = (resource) => {
//     setSelectedResource(resource);
//     setShowDelete(true);
//   };
//   const {filters, setFilters} = useResources()
//   useEffect(() => {
//     const fetchUploads = async () => {
//       try {
//         const response = await resourceAPI.getMyUploads();
//         setResources(response.data.data.uploads || []);
//       } catch (error) {
//         errorToast(
//           error.response?.data?.message || "Could not load your resources.",
//         );
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUploads();
//   }, []);

//   const confirmDelete = async () => {
//     if (!selectedResource || deleting) return;
//     try {
//       setDeleting(true);
//       const response = await resourceAPI.deleteResource(selectedResource._id);
//       setResources((current) =>
//         current.filter((resource) => resource._id !== selectedResource._id),
//       );
//       successToast(response.data.message);
//       setShowDelete(false);
//       setSelectedResource(null);
//     } catch (error) {
//       errorToast(
//         error.response?.data?.message || "Could not delete this resource.",
//       );
//     } finally {
//       setDeleting(false);
//     }
//   };
//   const filteredResources = useMemo(
//     () =>
//       resources
//         .filter((resource) =>
//           resource.title.toLowerCase().includes(search.toLowerCase()),
//         )
//         .sort((first, second) => {
//           if (sort === "downloads") return second.downloads - first.downloads;
//           if (sort === "views") return second.views - first.views;
//           return new Date(second.createdAt) - new Date(first.createdAt);
//         }),
//     [resources, search, sort],
//   );

//   return (
//     <DashboardLayout>
//       <div className="space-y-8">
//         <div>
//           <h1
//             className="
//                             text-4xl
//                             font-heading
//                             font-bold
//                             text-secondary
//                         "
//           >
//             My Resources
//           </h1>

//           <p className="mt-2 text-gray600">
//             Manage all your uploaded resources.
//           </p>
//         </div>

//         <MyResourcesToolbar
//           search={search}
//           setSearch={setSearch}
//           sort={sort}
//           setSort={setSort}
//         />

//         {loading ? (
//           <Loader text="Loading your resources..." />
//         ) : (
//           <MyResourcesGrid
//             resources={filteredResources}
//             onDelete={handleDelete}
//           />
//         )}

//         <DeleteResourceModal
//           open={showDelete}
//           onClose={() => setShowDelete(false)}
//           onConfirm={confirmDelete}
//           deleting={deleting}
//         />
//       </div>
//     </DashboardLayout>
//   );
// };

// export default MyResources;

import { useState } from "react";

import DashboardLayout from "../../Components/dashboard/DashboardLayout";
import MyResourcesToolbar from "../../Components/dashboard/MyResourcesToolbar";
import MyResourcesGrid from "../../Components/dashboard/MyResourcesGrid";
import DeleteResourceModal from "../../Components/dashboard/DeleteResourceModal";
import Loader from "../../Components/ui/Loader";

import { resourceAPI } from "../../api/resource.api";
import { successToast, errorToast } from "../../utils/toast";

import useMyResources from "../../hooks/useMyResources";

const MyResources = () => {
  const { resources, loading, filters, setFilters, refreshResources } =
    useMyResources();

  const [deleting, setDeleting] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  const handleDelete = (resource) => {
    setSelectedResource(resource);
    setShowDelete(true);
  };

  const confirmDelete = async () => {
    if (!selectedResource || deleting) return;

    try {
      setDeleting(true);

      const response = await resourceAPI.deleteResource(selectedResource._id);

      successToast(response.data.message);

      await refreshResources();

      setShowDelete(false);
      setSelectedResource(null);
    } catch (error) {
      errorToast(
        error.response?.data?.message || "Could not delete this resource.",
      );
    } finally {
      setDeleting(false);
    }
  };

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

        <MyResourcesToolbar filters={filters} setFilters={setFilters} />

        {loading ? (
          <Loader text="Loading your resources..." />
        ) : (
          <MyResourcesGrid resources={resources} onDelete={handleDelete} />
        )}

        <DeleteResourceModal
          open={showDelete}
          onClose={() => {
            setShowDelete(false);
            setSelectedResource(null);
          }}
          onConfirm={confirmDelete}
          deleting={deleting}
        />
      </div>
    </DashboardLayout>
  );
};

export default MyResources;
