import { useState } from "react";
import AdminLayout from "../../Components/admin/AdminLayout";
import CategoryTabs from "../../Components/admin/CategoryTabs";
import CategoryToolbar from "../../Components/admin/CategoryToolbar";
import CategoryTable from "../../Components/admin/CategoryTable";
import AddCategoryModal from "../../Components/admin/AddCategoryModal";
import EditCategoryModal from "../../Components/admin/EditCategoryModal";
import DeleteCategoryModal from "../../Components/admin/DeleteCategoryModal";

import useAdminCategories from "../../hooks/useAdminCategories";
import { adminAPI } from "../../api/admin.api";
import { successToast, errorToast } from "../../utils/toast";

const Categories = () => {
  const { categories, loading, filters, setFilters, refreshCategories } =
    useAdminCategories();

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const tabs = [
    {
      label: "Branches",
      value: "branch",
    },
    {
      label: "Subjects",
      value: "subject",
    },
    {
      label: "Resource Types",
      value: "resourceType",
    },
  ];

  const handleCreateCategory = async (data) => {
    try {
      await adminAPI.createCategory(data);

      successToast("Category created successfully.");

      setShowAdd(false);

      refreshCategories();
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to create category.");
    }
  };

  const handleUpdateCategory = async (data) => {
    try {
      await adminAPI.updateCategory(selectedCategory._id, data);

      successToast("Category updated successfully.");

      setShowEdit(false);
      setSelectedCategory(null);

      refreshCategories();
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to update category.");
    }
  };

  const handleDeleteCategory = async () => {
    try {
      await adminAPI.deleteCategory(selectedCategory._id);

      successToast("Category deleted successfully.");

      setShowDelete(false);
      setSelectedCategory(null);

      refreshCategories();
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to delete category.");
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-heading font-bold text-secondary">
            Categories
          </h1>

          <p className="mt-2 text-gray600">
            Manage branches, subjects and resource types.
          </p>
        </div>

        <CategoryToolbar
          search={filters.search}
          setSearch={(value) =>
            setFilters((prev) => ({
              ...prev,
              search: value,
              page: 1,
            }))
          }
          onAdd={() => setShowAdd(true)}
        />

        <CategoryTabs
          tabs={tabs}
          active={filters.type}
          setActive={(type) =>
            setFilters((prev) => ({
              ...prev,
              type,
              page: 1,
            }))
          }
        />

        <CategoryTable
          categories={categories}
          loading={loading}
          onEdit={(category) => {
            setSelectedCategory(category);
            setShowEdit(true);
          }}
          onDelete={(category) => {
            setSelectedCategory(category);
            setShowDelete(true);
          }}
        />

        <AddCategoryModal
          open={showAdd}
          onClose={() => setShowAdd(false)}
          onCreate={handleCreateCategory}
        />

        <EditCategoryModal
          open={showEdit}
          category={selectedCategory}
          onClose={() => {
            setShowEdit(false);
            setSelectedCategory(null);
          }}
          onSave={handleUpdateCategory}
        />

        <DeleteCategoryModal
          open={showDelete}
          category={selectedCategory}
          onClose={() => {
            setShowDelete(false);
            setSelectedCategory(null);
          }}
          onDelete={handleDeleteCategory}
        />
      </div>
    </AdminLayout>
  );
};

export default Categories;
