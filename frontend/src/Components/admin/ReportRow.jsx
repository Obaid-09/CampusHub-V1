import Button from "../ui/Button";

const ReportRow = ({
    report,
    onView,
    onResolve,
    onDismiss,
}) => {

    return (

        <tr className="border-b last:border-none">

            <td className="px-6 py-5">

                <div>

                    <h3
                        className="
                            font-semibold
                            text-secondary
                        "
                    >

                        {report.target}

                    </h3>

                    <p className="text-sm text-gray500">

                        {report.type}

                    </p>

                </div>

            </td>

            <td>

                {report.reporter}

            </td>

            <td>

                {report.reason}

            </td>

            <td>

                <span

                    className={`
                        px-3
                        py-1
                        rounded-full
                        text-sm

                        ${
                            report.status==="Pending"

                            ?

                            "bg-amber-100 text-amber-700"

                            :

                            "bg-green-100 text-green-700"

                        }

                    `}

                >

                    {report.status}

                </span>

            </td>

            <td>

                {report.reportedAt}

            </td>

            <td>

                <div className="flex gap-2">

                    <Button

                        size="sm"

                        variant="outline"

                        onClick={() => onView(report)}

                    >

                        View

                    </Button>

                    <Button

                        size="sm"

                        onClick={() => onResolve(report)}

                    >

                        Resolve

                    </Button>

                    <Button

                        size="sm"

                        variant="danger"

                        onClick={() => onDismiss(report)}

                    >

                        Dismiss

                    </Button>

                </div>

            </td>

        </tr>

    );

};

export default ReportRow;
