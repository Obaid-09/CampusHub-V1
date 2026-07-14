import ReportRow from "./ReportRow";

const ReportsTable = ({
    reports,
    onView,
    onResolve,
    onDismiss,
}) => {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                shadow-card
                overflow-x-auto
            "
        >

            <table className="w-full min-w-[1000px]">

                <thead>

                    <tr className="border-b">

                        <th className="px-6 py-5 text-left">

                            Report

                        </th>

                        <th>

                            Reporter

                        </th>

                        <th>

                            Reason

                        </th>

                        <th>

                            Status

                        </th>

                        <th>

                            Date

                        </th>

                        <th>

                            Actions

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        reports.map(report=>(

                            <ReportRow

                                key={report._id}

                                report={report}

                                onView={onView}

                                onResolve={onResolve}

                                onDismiss={onDismiss}

                            />

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default ReportsTable;