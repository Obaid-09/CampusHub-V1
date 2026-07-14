import Badge from "../ui/Badge";
import Button from "../ui/Button";

const PendingCard = ({ resource }) => {

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

            <Badge>

                {resource.type}

            </Badge>

            <h2
                className="
                    mt-5
                    text-2xl
                    font-semibold
                    text-secondary
                "
            >

                {resource.title}

            </h2>

            <p className="mt-2 text-gray500">

                {resource.subject}

            </p>

            <p className="mt-1 text-gray400">

                {resource.branch}

            </p>

            <div className="mt-6 space-y-1">

                <p>

                    <span className="font-medium">

                        Uploader:

                    </span>

                    {" "}

                    {resource.uploader}

                </p>

                <p className="text-gray500">

                    {resource.uploadedOn}

                </p>

            </div>

            <div
                className="
                    mt-8
                    grid
                    grid-cols-3
                    gap-3
                "
            >

                <Button
                    variant="outline"
                >

                    Preview

                </Button>

                <Button>

                    Approve

                </Button>

                <Button
                    variant="danger"
                >

                    Reject

                </Button>

            </div>

        </div>

    );

};

export default PendingCard;