import Badge from "../ui/Badge";
import {
    Star,
    GraduationCap,
    BookOpen,
    Building2,
    Calendar,
    User,
    Hash,
} from "lucide-react";

const ResourceInfo = ({ resource }) => {

    return (

        <div className="space-y-8">

            {/* Type Badge */}
            <Badge>
                {resource.type}
            </Badge>

            {/* Title */}
            <div>
                <h1
                    className="
                        text-4xl
                        font-heading
                        font-bold
                        text-secondary
                        leading-tight
                    "
                >
                    {resource.title}
                </h1>
                <div
                    className="
                        flex
                        items-center
                        gap-2
                        mt-4
                    "
                >
                    <Star
                        size={20}
                        className="text-yellow-500 fill-yellow-500"
                    />

                    <span className="font-semibold text-secondary">
                        {resource.rating}
                    </span>

                    <span className="text-gray500">
                        (126 Ratings)
                    </span>
                </div>
            </div>

            {/* Information Card */}
            <div
                className="
                    bg-white
                    rounded-2xl
                    shadow-card
                    border
                    border-gray100
                    p-6
                    space-y-5
                "
            >

                <InfoRow
                    icon={<BookOpen size={18} />}
                    label="Subject"
                    value={resource.subject}
                />

                <InfoRow
                    icon={<Hash size={18} />}
                    label="Course Code"
                    value={resource.courseCode}
                />

                <InfoRow
                    icon={<GraduationCap size={18} />}
                    label="Branch"
                    value={resource.branch}
                />

                <InfoRow
                    icon={<Calendar size={18} />}
                    label="Semester"
                    value={`Semester ${resource.semester}`}
                />

                <InfoRow
                    icon={<Calendar size={18} />}
                    label="Year"
                    value={`${resource.year} Year`}
                />

                <InfoRow
                    icon={<Building2 size={18} />}
                    label="College"
                    value={resource.college}
                />

                <InfoRow
                    icon={<User size={18} />}
                    label="Uploaded By"
                    value={resource.uploadedBy.fullname}
                />

                <InfoRow
                    icon={<Calendar size={18} />}
                    label="Uploaded"
                    value="12 July 2026"
                />
            </div>
        </div>
    );
};

const InfoRow = ({
    icon,
    label,
    value,
}) => {
    return (
        <div
            className="
                flex
                items-center
                justify-between
                gap-6
            "
        >
            <div
                className="
                    flex
                    items-center
                    gap-3
                    text-gray600
                "
            >
                {icon}
                <span className="font-medium">
                    {label}
                </span>
            </div>
            <span
                className="
                    text-secondary
                    font-semibold
                    text-right
                "
            >
                {value}
            </span>
        </div>
    );
};

export default ResourceInfo;