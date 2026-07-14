import Button from "../ui/Button";
import ReporterCard from "./ReporterCard";
import ReportedEntityCard from "./ReportedEntityCard";
import ReportEvidenceCard from "./ReportEvidenceCard";
import AdminNotes from "./AdminNotes";

const ReportDetailsModal = ({
    open,
    report,
    onClose,
    onResolve,
    onDismiss,
}) => {

    if (!open || !report) return null;

    return (

        <div
            className="
                fixed
                inset-0
                z-50
                bg-black/60
                flex
                justify-center
                items-center
                p-6
            "
        >

            <div
                className="
                    bg-white
                    rounded-3xl
                    w-full
                    max-w-6xl
                    max-h-[90vh]
                    overflow-y-auto
                    p-8
                "
            >

                <div
                    className="
                        flex
                        justify-between
                        items-center
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

                        Report Details

                    </h2>

                    <Button
                        variant="outline"
                        onClick={onClose}
                    >
                        Close
                    </Button>

                </div>

                <div
                    className="
                        grid
                        lg:grid-cols-2
                        gap-8
                        mt-8
                    "
                >

                    <ReporterCard
                        report={report}
                    />

                    <ReportedEntityCard
                        report={report}
                    />

                </div>

                <div className="mt-8">

                    <ReportEvidenceCard
                        report={report}
                    />

                </div>

                <div className="mt-8">

                    <AdminNotes/>

                </div>

                <div
                    className="
                        mt-10
                        flex
                        justify-end
                        gap-4
                    "
                >

                    <Button
                        variant="danger"
                        onClick={onDismiss}
                    >
                        Dismiss
                    </Button>

                    <Button
                        onClick={onResolve}
                    >
                        Resolve
                    </Button>

                </div>

            </div>

        </div>

    );

};

export default ReportDetailsModal;
