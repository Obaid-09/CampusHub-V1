const AnalyticsInfo = ({ resource }) => {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                border
                border-gray100
                shadow-card
                p-8
            "
        >

            <h2
                className="
                    text-2xl
                    font-heading
                    font-bold
                    text-secondary
                "
            >

                Resource Information

            </h2>

            <div
                className="
                    grid
                    md:grid-cols-2
                    gap-6
                    mt-8
                "
            >

                <Info
                    label="Subject"
                    value={resource.subject}
                />

                <Info
                    label="Course Code"
                    value={resource.courseCode}
                />

                <Info
                    label="Branch"
                    value={resource.branch}
                />

                <Info
                    label="Semester"
                    value={resource.semester}
                />

                <Info
                    label="Pages"
                    value={resource.totalPages}
                />

                <Info
                    label="Size"
                    value={resource.fileSize}
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

        <h3
            className="
                mt-2
                text-xl
                font-semibold
                text-secondary
            "
        >

            {value}

        </h3>

    </div>

);

export default AnalyticsInfo;