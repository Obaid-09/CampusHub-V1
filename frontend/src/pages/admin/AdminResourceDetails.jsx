import AdminLayout from "../../components/admin/AdminLayout";

import ResourceHeader from "../../components/admin/resource/ResourceHeader";
import ResourcePreview from "../../components/admin/resource/ResourcePreview";
import ResourceInformation from "../../components/admin/resource/ResourceInformation";
import UploaderCard from "../../components/admin/resource/UploaderCard";
import ResourceStatistics from "../../components/admin/resource/ResourceStatistics";
import ReportsSection from "../../components/admin/resource/ReportsSection";

import ModerationHistory from "../../components/admin/resource/ModerationHistory";
import ResourceActions from "../../components/admin/resource/ResourceActions";
import { adminResource } from "../../constants/admin";

const AdminResourceDetails = ()=>{

    return(

        <AdminLayout>

            <div className="space-y-8">

                <ResourceHeader

                    resource={adminResource}

                />

                <ResourcePreview

                    resource={adminResource}

                />

                <div
                    className="
                        grid
                        xl:grid-cols-3
                        gap-8
                    "
                >

                    <div className="xl:col-span-2">

                        <ResourceInformation
                            resource={adminResource}
                        />

                    </div>

                    <UploaderCard
                        uploader={adminResource.uploader}
                    />

                </div>

                <ResourceStatistics
                    resource={adminResource}
                />
                <ReportsSection/>

                <ModerationHistory/>

                <ResourceActions

                    resource={adminResource}

                />

            </div>

        </AdminLayout>

    );

};

export default AdminResourceDetails;
