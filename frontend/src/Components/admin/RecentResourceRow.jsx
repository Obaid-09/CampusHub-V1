const RecentResourceRow = ({ resource }) => {

    return (

        <div

            className="
                flex
                items-center
                justify-between

                py-4

                border-b
                border-gray100

                last:border-none
            "

        >

            <div>
                <h4
                    className="
                        font-semibold
                        text-secondary
                    "
                >
                    {resource.title}

                </h4>

                <p className="text-sm text-gray500">
                    by {resource.uploader}
                </p>

            </div>

            <span

                className={`
                    px-3
                    py-1

                    rounded-full

                    text-sm

                    ${
                        resource.status === "Approved"

                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }
                `}
            >
                {resource.status}
            </span>
        </div>
    );
};

export default RecentResourceRow;