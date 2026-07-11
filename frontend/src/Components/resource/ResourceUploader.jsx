import Button from "../ui/Button";

const ResourceUploader = ({ uploader }) => {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100
                p-6
            "
        >

            <h2 className="text-2xl font-heading font-bold text-secondary">
                Uploaded By
            </h2>

            <div className="flex items-center gap-5 mt-6">

                <img
                    src={uploader.avatar}
                    alt={uploader.fullname}
                    className="w-20 h-20 rounded-full object-cover"
                />

                <div>
                    <h3 className="text-xl font-semibold text-secondary">

                        {uploader.fullname}

                    </h3>

                    <p className="text-gray500">

                        {uploader.branch} • Year {uploader.year}

                    </p>

                    <p className="text-gray500">

                        {uploader.college}

                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="bg-background rounded-xl p-4 text-center">
                    <h3 className="text-2xl font-bold text-primary">

                        {uploader.uploads}

                    </h3>
                    <p className="text-gray500">
                        Uploads
                    </p>
                </div>
                <div className="bg-background rounded-xl p-4 text-center">
                    <h3 className="text-2xl font-bold text-primary">
                        ⭐ 4.9
                    </h3>
                    <p className="text-gray500">

                        Rating
                    </p>
                </div>
            </div>

            <Button
                variant="outline"
                className="w-full mt-8"
            >
                View Profile
            </Button>
        </div>
    );
};

export default ResourceUploader;