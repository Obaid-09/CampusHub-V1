import { useState } from "react";

import AdminLayout from "../../Components/admin/AdminLayout";
import MyResourcesToolbar from "../../Components/dashboard/MyResourcesToolbar";
import AdminResourcesGrid from "../../Components/admin/AdminResourceGrid";

import useDeletedResources from "../../hooks/useDeletedResources";
import { adminAPI } from "../../api/admin.api";
import { successToast, errorToast } from "../../utils/toast";

const DeletedResources = () => {
  const { resources, loading, filters, setFilters, removeResources } =
    useDeletedResources();

  const handleRestore = async (resource) => {
    try {
      await adminAPI.restoreResource(resource._id);

      successToast("Resource restored successfully.");

      removeResources(resource._id);
    } catch (error) {
      errorToast(
        error.response?.data?.message || "Failed to restore resource.",
      );
    }
  };
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-heading font-bold text-secondary">
            Deleted Resources
          </h1>

          <p className="mt-2 text-gray600">
            Restore previously deleted resources.
          </p>
        </div>

        <MyResourcesToolbar filters={filters} setFilters={setFilters} />

        <AdminResourcesGrid
          resources={resources}
          loading={loading}
          onRestore={handleRestore}
        />
      </div>
    </AdminLayout>
  );
};

export default DeletedResources;
