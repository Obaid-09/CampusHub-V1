const ReportCard = ({
    report,
}) => {

    const statusColor =

        report.status === "Resolved"

            ? "bg-green-100 text-green-700"

            : "bg-yellow-100 text-yellow-700";

    return (

        <div

            className="
                border
                border-gray100
                rounded-xl
                p-5
            "

        >

            <div
                className="
                    flex
                    justify-between
                    items-center
                "
            >

                <h3

                    className="
                        font-semibold
                        text-secondary
                    "

                >

                    {report.reason}

                </h3>

                <span

                    className={`
                        px-3
                        py-1
                        rounded-full
                        text-sm

                        ${statusColor}
                    `}

                >

                    {report.status}

                </span>

            </div>

            <p className="mt-3 text-gray500">

                Reported by {report.reportedBy}

            </p>

            <p className="text-gray500">

                {report.date}

            </p>

        </div>

    );

};

export default ReportCard;