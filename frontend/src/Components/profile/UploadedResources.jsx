import { useEffect, useState } from "react";
import MiniResourceCard from "../dashboard/MiniResourceCard";
import { userAPI } from "../../api/user.api";

const UploadedResources = () => {
  const [resources, setResources] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchUploads = async () => {
    try {
      const response = await userAPI.getMyUploads();
      setResources(response.data.data.uploads || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUploads();
  }, []);

  if (loading) {
    return (
      <section className="mt-12">
        <h2
          className="
                        text-3xl
                        font-heading
                        font-bold
                        text-secondary
                    "
        >
          Uploaded Resources
        </h2>

        <p className="mt-6 text-gray500">Loading...</p>
      </section>
    );
  }

  if (!resources.length) {
    return (
      <section className="mt-12">
        <h2
          className="
                        text-3xl
                        font-heading
                        font-bold
                        text-secondary
                    "
        >
          Uploaded Resources
        </h2>

        <p className="mt-6 text-gray500">
          You haven't uploaded any resources yet.
        </p>
      </section>
    );
  }

  return (
    <section className="mt-12">
      <div
        className="
                    flex
                    justify-between
                    items-center
                    mb-6
                "
      >
        <h2
          className="
                        text-3xl
                        font-heading
                        font-bold
                        text-secondary
                    "
        >
          Uploaded Resources
        </h2>

        <button
          className="
                        text-primary
                        font-medium
                        hover:underline
                    "
        >
          View All
        </button>
      </div>

      {/* <div
        className="
                    grid
                    grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    gap-6
                "
      > */}
      <div className="overflow-hidden">
        <div
          className="
                        flex
                        gap-6
                        overflow-x-auto
                        pb-4
                        scrollbar-thin
                        scrollbar-thumb-primary/40
                        scrollbar-track-transparent
                    "
        >
        {resources.map((resource) => (
          <MiniResourceCard key={resource._id} resource={resource} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default UploadedResources;
