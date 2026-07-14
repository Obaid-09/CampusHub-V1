import ResourceMetadata from "./ResourceMetadata";
import Button from "../ui/Button";

const PDFPreviewModal = ({
    open,
    onClose,
    resource,
    onApprove,
    onReject,
}) => {

    if (!open) return null;

    return (

        <div
            className="
                fixed
                inset-0
                z-50

                bg-black/60

                flex
                items-center
                justify-center

                p-6
            "
        >

            <div
                className="
                    bg-white

                    rounded-3xl

                    w-full
                    max-w-7xl

                    h-[90vh]

                    overflow-hidden

                    grid
                    lg:grid-cols-[2fr_1fr]
                "
            >

                <div className="p-6">

                    <iframe

                        title="preview"

                        src={resource.pdfUrl}

                        className="
                            w-full
                            h-full
                            rounded-xl
                        "

                    />

                </div>

                <div
                    className="
                        border-l
                        border-gray100

                        flex
                        flex-col
                    "
                >

                    <div className="flex-1 overflow-y-auto p-6">

                        <ResourceMetadata
                            resource={resource}
                        />

                    </div>

                    <div
                        className="
                            p-6
                            border-t
                            border-gray100

                            flex
                            gap-3
                        "
                    >

                        <Button

                            className="flex-1"

                            onClick={onApprove}

                        >

                            Approve

                        </Button>

                        <Button

                            variant="danger"

                            className="flex-1"

                            onClick={onReject}

                        >

                            Reject

                        </Button>

                        <Button

                            variant="outline"

                            onClick={onClose}

                        >

                            Close

                        </Button>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default PDFPreviewModal;