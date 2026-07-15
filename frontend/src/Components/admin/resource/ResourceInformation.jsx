import ResourceInfoRow from "./ResourceInfoRow";

const ResourceInformation = ({
    resource,
})=>{

    return(

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
                    font-bold
                    text-secondary
                    mb-6
                "

            >

                Resource Information

            </h2>

            <ResourceInfoRow

                label="Subject"

                value={resource.subject}

            />

            <ResourceInfoRow

                label="Branch"

                value={resource.branch}

            />

            <ResourceInfoRow

                label="Semester"

                value={resource.semester}

            />

            <ResourceInfoRow

                label="Course Code"

                value={resource.courseCode}

            />

            <ResourceInfoRow

                label="Type"

                value={resource.type}

            />

            <ResourceInfoRow

                label="Status"

                value={resource.status}

            />

            <div className="mt-6">

                <h3

                    className="
                        font-semibold
                        text-secondary
                        mb-3
                    "

                >

                    Tags

                </h3>

                <div

                    className="
                        flex
                        gap-2
                        flex-wrap
                    "

                >

                    {

                        resource.tags.map(tag=>(

                            <span

                                key={tag}

                                className="
                                    px-3
                                    py-1
                                    rounded-full
                                    bg-primary/10
                                    text-primary
                                "

                            >

                                #{tag}

                            </span>

                        ))

                    }

                </div>

            </div>

        </div>

    );

};

export default ResourceInformation;