const ResourceUploader = ({
    uploader,
}) => {

    return (

        <div
            className="
                flex
                items-center
                gap-3
            "
        >

            <img

                src={
                    uploader.avatar ||
                    "https://i.pravatar.cc/100"
                }

                alt=""

                className="
                    w-10
                    h-10
                    rounded-full
                "

            />

            <div>

                <p
                    className="
                        font-medium
                        text-secondary
                    "
                >

                    {uploader.name}

                </p>

                <p
                    className="
                        text-xs
                        text-gray500
                    "
                >

                    Uploader

                </p>

            </div>

        </div>

    );

};

export default ResourceUploader;