import PendingToolbar from "../../Components/admin/PendingToolbar";
import PendingGrid from "../../Components/admin/PendingGrid";
import usePendingResources from "../../hooks/usePendingResources";
import AdminLayout from "../../Components/admin/AdminLayout";

const PendingResources = () => {
  const { resources, loading, removeResources } = usePendingResources();

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
          loading={loading}
          removeResources={removeResources}
        />
      </div>
    </AdminLayout>
  );
};

export default PendingResources;
