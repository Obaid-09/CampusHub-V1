import AdminLayout from "../../Components/admin/AdminLayout";

import ResourceHeader from "../../Components/admin/resource/ResourceHeader";
import ResourcePreview from "../../Components/admin/resource/ResourcePreview";
import ResourceInformation from "../../Components/admin/resource/ResourceInformation";
import UploaderCard from "../../Components/admin/resource/UploaderCard";
import ResourceStatistics from "../../Components/admin/resource/ResourceStatistics";
import ReportsSection from "../../Components/admin/resource/ReportsSection";

import ModerationHistory from "../../Components/admin/resource/ModerationHistory";
import ResourceActions from "../../Components/admin/resource/ResourceActions";
import useAdminResource from "../../hooks/useAdminResource";
import Loader from "../../Components/ui/Loader";
const AdminResourceDetails = () => {
  const { resource, loading } = useAdminResource();

  if (loading) {
    return (
      <AdminLayout>
        <Loader />
      </AdminLayout>
    );
  }

  if (!resource) {
    return <AdminLayout>Resource not found.</AdminLayout>;
  }
  return (
    <AdminLayout>
      <div className="space-y-8">
        <ResourceHeader resource={resource} />

        <ResourcePreview resource={resource} />

        <div
          className="
                        grid
                        xl:grid-cols-3
                        gap-8
                    "
        >
          <div className="xl:col-span-2">
            <ResourceInformation resource={resource} />
          </div>

          <UploaderCard uploader={resource.uploadedBy} />
        </div>

        <ResourceStatistics resource={resource} />
        <ReportsSection />

        <ModerationHistory />

        <ResourceActions resource={resource} />
      </div>
    </AdminLayout>
  );
};

export default AdminResourceDetails;
