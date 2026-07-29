// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ResourceBreadcrumb from "../../components/resource/ResourceBreadcrumb.jsx.jsx";
// import ResourcePreview from "../../components/resource/ResourcePreview.jsx";
// import ResourceInfo from "../../components/resource/ResourceInfo.jsx";
// import ResourceDescription from "../../components/resource/ResourceDescription.jsx";
// import ResourceActions from "../../components/resource/ResourceActions.jsx";
// import ResourceStats from "../../components/resource/ResourceStats.jsx";
// import ResourceUploader from "../../components/resource/ResourceUploader.jsx";
// import RelatedResources from "../../components/resource/RelatedResources.jsx";
// import RatingSection from "../../components/resource/RatingSection.jsx";
// import Loader from "../../components/ui/Loader";
// import EmptyState from "../../components/ui/EmptyState";
// import { resourceAPI } from "../../api/resource.api";

// import ReportResourceModal from "../../components/resource/ReportResourceModal";
// import { successToast, errorToast } from "../../utils/toast";
// const ResourceDetails = () => {
//   const { id } = useParams();
//   const [resource, setResource] = useState(null);
//   const [relatedResources, setRelatedResources] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showReport, setShowReport] = useState(false);
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [id]);

//   useEffect(() => {
//     const fetchResource = async () => {
//       try {
//         setLoading(true);
//         const response = await resourceAPI.getResourceById(id);
//         const currentResource = response.data.data;
//         setResource(currentResource);
//         resourceAPI.viewResource(id).catch(() => {});

//         const relatedResponse = await resourceAPI.getResources({
//           branch: currentResource.branch,
//           limit: 5,
//           sort: "latest",
//         });
//         setRelatedResources(
//           relatedResponse.data.data.resources
//             .filter((item) => item._id !== id)
//             .slice(0, 4),
//         );
//       } catch {
//         setResource(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchResource();
//   }, [id]);

//   const handleReport = async (data) => {
//     try {
//       await resourceAPI.reportResource(resource._id, data);

//       successToast("Report submitted successfully.");

//       setShowReport(false);
//     } catch (error) {
//       errorToast(error.response?.data?.message || "Failed to submit report.");
//     }
//   };
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <Loader />
//       </div>
//     );
//   }

//   if (!resource) {
//     return (
//       <div className="min-h-screen flex items-center justify-center px-6">
//         <EmptyState title="Resource not found" />
//       </div>
//     );
//   }

//   return (
//     <section className="bg-background min-h-screen py-10">
//       <div className="max-w-7xl mx-auto px-6">
//         <ResourceBreadcrumb resource={resource} />
//         <div className="mt-8 grid lg:grid-cols-2 gap-12">
//           <ResourcePreview resource={resource} />
//           <ResourceInfo resource={resource} />
//           <ResourceStats resource={resource} />
//           <ResourceActions
//             resource={resource}
//             onReport={() => setShowReport(true)}
//           />
//           <ResourceDescription resource={resource} />
//           <ResourceUploader uploader={resource.uploadedBy} />
//           <RatingSection reviews={resource.reviews || []} />
//           <RelatedResources resources={relatedResources} />
//         </div>
//       </div>
//       <ReportResourceModal
//         open={showReport}
//         onClose={() => setShowReport(false)}
//         onSubmit={handleReport}
//       />
//     </section>
//   );
// };

// export default ResourceDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ResourceBreadcrumb from "../../Components/resource/ResourceBreadcrumb.jsx.jsx";
import ResourcePreview from "../../Components/resource/ResourcePreview.jsx";
import ResourceInfo from "../../Components/resource/ResourceInfo.jsx";
import ResourceDescription from "../../Components/resource/ResourceDescription.jsx";
import ResourceActions from "../../Components/resource/ResourceActions.jsx";
import ResourceStats from "../../Components/resource/ResourceStats.jsx";
import ResourceUploader from "../../Components/resource/ResourceUploader.jsx";
import RelatedResources from "../../Components/resource/RelatedResources.jsx";
import RatingSection from "../../Components/resource/RatingSection.jsx";
import ReportResourceModal from "../../Components/resource/ReportResourceModal.jsx";

import Loader from "../../Components/ui/Loader.jsx";
import EmptyState from "../../Components/ui/EmptyState.jsx";

import { resourceAPI } from "../../api/resource.api";
import { successToast, errorToast } from "../../utils/toast";

import useReviews from "../../hooks/useReviews";

const ResourceDetails = () => {
  const { id } = useParams();

  const [resource, setResource] = useState(null);
  const [relatedResources, setRelatedResources] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showReport, setShowReport] = useState(false);

  const {
    reviews,
    averageRating,
    totalRatings,
    loading: reviewsLoading,
    refreshReviews,
  } = useReviews(id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const fetchResource = async () => {
    try {
      setLoading(true);

      const response = await resourceAPI.getResourceById(id);

      const currentResource = response.data.data;

      setResource(currentResource);

      resourceAPI.viewResource(id).catch(() => {});

      const relatedResponse = await resourceAPI.getResources({
        branch: currentResource.branch,
        limit: 5,
        sort: "latest",
      });

      setRelatedResources(
        relatedResponse.data.data.resources
          .filter((item) => item._id !== id)
          .slice(0, 4),
      );
    } catch {
      setResource(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResource();
  }, [id]);

  const handleReport = async (data) => {
    try {
      await resourceAPI.reportResource(resource._id, data);

      successToast("Report submitted successfully.");

      setShowReport(false);
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to submit report.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader text="Loading resource..." />
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <EmptyState title="Resource not found" />
      </div>
    );
  }

  return (
    <section className="bg-background min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        <ResourceBreadcrumb resource={resource} />

        <div className="mt-8 grid lg:grid-cols-2 gap-12">
          <ResourcePreview resource={resource} />

          <ResourceInfo resource={resource} />

          <ResourceStats resource={resource} />

          <ResourceActions
            resource={resource}
            onReport={() => setShowReport(true)}
          />

          <ResourceDescription resource={resource} />

          <ResourceUploader uploader={resource.uploadedBy} />

          <RatingSection
            resourceId={id}
            reviews={reviews}
            averageRating={averageRating}
            totalRatings={totalRatings}
            loading={reviewsLoading}
            refreshReviews={async () => {
              await refreshReviews();
              await fetchResource();
            }}
          />

          <RelatedResources resources={relatedResources} />
        </div>
      </div>

      <ReportResourceModal
        open={showReport}
        onClose={() => setShowReport(false)}
        onSubmit={handleReport}
      />
    </section>
  );
};

export default ResourceDetails;
