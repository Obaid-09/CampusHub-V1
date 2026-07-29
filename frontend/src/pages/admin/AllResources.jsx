import { useState } from "react";

import AdminLayout from "../../Components/admin/AdminLayout";
import { adminAPI } from "../../api/admin.api";
import { successToast, errorToast } from "../../utils/toast";
import MyResourcesToolbar from "../../Components/dashboard/MyResourcesToolbar";
import AdminResourcesGrid from "../../Components/admin/AdminResourceGrid";
import DeleteResourceModal from "../../Components/dashboard/DeleteResourceModal";
import useAdminResources from "../../hooks/useAdminResources";
const AllResources = () => {
  const {
    resources,
    loading,
    filters,
    setFilters,
    pagination,
    refreshResources,
  } = useAdminResources();

  const [selectedResource, setSelectedResource] = useState(null);

  const [showDelete, setShowDelete] = useState(false);
  const handleDelete = async () => {
    if (!selectedResource) return;
    try {
      await adminAPI.deleteResource(selectedResource._id);

      successToast("Resource deleted successfully.");

      setShowDelete(false);
      setSelectedResource(null);

      refreshResources();
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to delete resource.");
    }
  };

  // const handleRestore = async (resource) => {
  //   try {
  //     await adminAPI.restoreResource(resource._id);
  //     successToast("Resource restored successfully.");
  //     refreshResources(resource._id);
  //   } catch (error) {
  //     errorToast(
  //       error.response?.data?.message || "Failed to restore resource.",
  //     );
  //   }
  // };

  const handleRestore = async (resource) => {
    try {
      await adminAPI.restoreResource(resource._id);
      successToast("Resource restored successfully.");
      await refreshResources();
    } catch (error) {
      console.error(error);
    }
  };
  const handleApprove = async (resource) => {
    try {
      await adminAPI.approveResource(resource._id);
      successToast("Resource approved successfully.");
      refreshResources();
    } catch (error) {
      errorToast(
        error.response?.data?.message || "Failed to approve resource.",
      );
    }
  };

  const handleReject = async (resource) => {
    try {
      await adminAPI.rejectResource(resource._id);
      successToast("Resource rejected successfully.");
      refreshResources();
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to reject resource.");
    }
  };
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

        <MyResourcesToolbar filters={filters} setFilters={setFilters} />

        <AdminResourcesGrid
          resources={resources}
          loading={loading}
          onDelete={(resource) => {
            setSelectedResource(resource);
            setShowDelete(true);
          }}
          onRestore={handleRestore}
          onApprove={handleApprove}
          onReject={handleReject}
        />

        <DeleteResourceModal
          open={showDelete}
          onClose={() => {
            setShowDelete(false);
            setSelectedResource(null);
          }}
          onConfirm={handleDelete}
        />
      </div>
    </AdminLayout>
  );
};

export default AllResources;
