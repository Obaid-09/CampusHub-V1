import AdminLayout from "../../components/admin/AdminLayout";

import ResourceHeader from "../../components/admin/resource/ResourceHeader";
import ResourcePreview from "../../components/admin/resource/ResourcePreview";
import ResourceInformation from "../../components/admin/resource/ResourceInformation";
import UploaderCard from "../../components/admin/resource/UploaderCard";
import ResourceStatistics from "../../components/admin/resource/ResourceStatistics";
import ReportsSection from "../../components/admin/resource/ReportsSection";

import ModerationHistory from "../../components/admin/resource/ModerationHistory";
import ResourceActions from "../../components/admin/resource/ResourceActions";
import useAdminResource from "../../hooks/useAdminResource";
import Loader from "../../components/ui/Loader";
const AdminResourceDetails = () => {
  const { resource, loading } = useAdminResource();

  if (loading) {
    return <AdminLayout><Loader/></AdminLayout>;
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
