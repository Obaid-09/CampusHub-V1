import MiniResourceCard from "../dashboard/MiniResourceCard";
import { uploadedResources } from "../../constants/profile";

const UploadedResources = () => {

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

            <div
                className="
                    grid
                    grid-cols-2
                    sm:grid-cols-3
                    lg:grid-cols-4
                    gap-6
                "
            >
                {uploadedResources.map(resource => (
                    <MiniResourceCard
                        key={resource._id}
                        resource={resource}
                    />
                ))}
            </div>
        </section>
    );
};
export default UploadedResources;