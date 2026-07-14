const ReporterCard = ({ report }) => {

    return (

        <div
            className="
                bg-background
                rounded-2xl
                p-6
            "
        >

            <h3
                className="
                    text-xl
                    font-semibold
                    text-secondary
                "
            >

                Reporter

            </h3>

            <div className="mt-6 space-y-4">

                <Info
                    label="Name"
                    value={report.reporter}
                />

                <Info
                    label="Email"
                    value={report.reporterEmail}
                />

                <Info
                    label="Reported At"
                    value={report.reportedAt}
                />

            </div>

        </div>

    );

};

const Info = ({ label, value }) => (

    <div>

        <p className="text-gray500">

            {label}

        </p>

        <p className="font-semibold">

            {value}

        </p>

    </div>

);

export default ReporterCard;