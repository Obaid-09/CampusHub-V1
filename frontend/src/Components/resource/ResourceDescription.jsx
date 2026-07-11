import Badge from "../ui/Badge";

const ResourceDescription = ({ resource }) => {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100
                p-8
            "
        >

            {/* Heading */}
            <h2
                className="
                    text-2xl
                    font-heading
                    font-bold
                    text-secondary
                "
            >
                Description
            </h2>

            {/* Description */}
            <p
                className="
                    mt-5
                    text-gray600
                    leading-8
                "
            >
                {resource.description}
            </p>

            {/* Divider */}

            <div className="my-8 border-t border-gray100"></div>

            {/* Tags */}
            <h3
                className="
                    text-xl
                    font-semibold
                    text-secondary
                "
            >
                Tags
            </h3>

            <div
                className="
                    flex
                    flex-wrap
                    gap-3
                    mt-5
                "
            >
                {resource.tags.map(tag => (
                    <Badge key={tag}>
                        #{tag}
                    </Badge>
                ))}
            </div>

            {/* Divider */}

            <div className="my-8 border-t border-gray100"></div>

            {/* Metadata */}
            <h3
                className="
                    text-xl
                    font-semibold
                    text-secondary
                "
            >
                Resource Information
            </h3>

            <div
                className="
                    grid
                    md:grid-cols-2
                    gap-6
                    mt-6
                "
            >
                <MetaItem
                    title="Subject"
                    value={resource.subject}
                />

                <MetaItem
                    title="Course Code"
                    value={resource.courseCode}
                />

                <MetaItem
                    title="Branch"
                    value={resource.branch}
                />

                <MetaItem
                    title="Semester"
                    value={`Semester ${resource.semester}`}
                />

                <MetaItem
                    title="Year"
                    value={`${resource.year} Year`}
                />

                <MetaItem
                    title="College"
                    value={resource.college}
                />
            </div>
        </div>
    );
};

const MetaItem = ({
    title,
    value,
}) => {

    return (
        <div
            className="
                bg-background
                rounded-xl
                p-4
            "
        >

            <p
                className="
                    text-sm
                    text-gray500
                "
            >
                {title}
            </p>

            <h4
                className="
                    mt-2
                    font-semibold
                    text-secondary
                "
            >
                {value}
            </h4>
        </div>
    );
};
export default ResourceDescription;