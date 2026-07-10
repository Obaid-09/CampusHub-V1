import { X } from "lucide-react";

const labels = {
    branch: "Branch",
    semester: "Semester",
    type: "Type",
};

const ActiveFilters = ({
    filters,
    setFilters,
    setSelectedFilters,
}) => {

    const active = Object.entries(filters).filter(
        ([key, value]) =>
            value &&
            key !== "search" &&
            key !== "sort"
    );

    if (active.length === 0) return null;

    const removeFilter = (key) => {
        setSelectedFilters(prev => ({
            ...prev,
            [key]: "",
        }));

        setFilters(prev => ({
            ...prev,
            [key]: "",
        }));
    };

    return (

        <div className="flex flex-wrap gap-3 mb-6">

            {active.map(([key, value]) => (

                <button
                    key={key}
                    onClick={() => removeFilter(key)}
                    className="
                        flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-full
                        bg-primaryLight
                        text-primary
                        text-sm
                        font-medium
                        hover:bg-primary
                        hover:text-white
                        transition-all
                    "
                >
                    <span>
                        {labels[key]} : {value}
                    </span>

                    <X size={16} />
                </button>

            ))}

        </div>

    );

};

export default ActiveFilters;