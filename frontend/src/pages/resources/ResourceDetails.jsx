import ResourceBreadcrumb from "../../Components/resource/ResourceBreadcrumb.jsx";
import ResourcePreview from "../../Components/resource/ResourcePreview";
import ResourceInfo from "../../Components/resource/ResourceInfo";
import ResourceDescription from "../../Components/resource/ResourceDescription";
import ResourceActions from "../../Components/resource/ResourceActions.jsx";
import ResourceStats from "../../Components/resource/ResourceStats.jsx";
import ResourceUploader from "../../components/resource/ResourceUploader";
import RelatedResources from "../../components/resource/RelatedResources";
import RatingSection from "../../components/resource/RatingSection";
import { useParams } from "react-router-dom";
import { dummyResources } from "../../constants/resources";
import { useEffect } from "react";

const ResourceDetails = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    const { id } = useParams();
    
    const resource = dummyResources.find(
        item => String(item._id) === id
    );
    console.log(id);
    console.log(dummyResources);
    console.log(resource);
    return (
        <section className="bg-background min-h-screen py-10">

            <div className="max-w-7xl mx-auto px-6">

                <ResourceBreadcrumb
                    resource={resource}
                />

                <div
                    className="
                        mt-8
                        grid
                        lg:grid-cols-2
                        gap-12
                    "
                >

                    <ResourcePreview
                        resource={resource}
                    />

                    <ResourceInfo
                        resource={resource}
                    />

                    <ResourceStats
                        resource={resource}
                    />

                    <ResourceActions />

                    <ResourceDescription
                        resource={resource}
                    />

                    <ResourceUploader
                        uploader={resource.uploadedBy}
                    />

                    <RatingSection
                        reviews={resource.reviews}
                    />

                    {/* <RelatedResources resources={dummyResources} /> */}

                    <RelatedResources
                        resources={dummyResources.filter(
                            (item) =>
                                item._id !== resource._id &&
                                item.branch === resource.branch
                        ).slice(0,4)}
                    />

                </div>

            </div>

        </section>

    );

};

export default ResourceDetails;
