import { Edit3, Trash2, BarChart3 } from "lucide-react";

const ResourceActions = ({
    onEdit,
    onDelete,
    onAnalytics,
}) => {

    return (

        <div className="flex gap-3 mt-5">
            <button
                onClick={onEdit}
                className="
                    flex-1
                    flex
                    justify-center
                    items-center
                    gap-2
                    py-2
                    rounded-xl
                    bg-primary/10
                    text-primary
                    hover:bg-primary
                    hover:text-white
                    transition-all
                "
            >
                <Edit3 size={18}/>
                Edit
            </button>

            <button
                onClick={onAnalytics}
                className="
                    flex-1
                    flex
                    justify-center
                    items-center
                    gap-2
                    py-2
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                    hover:bg-blue-600
                    hover:text-white
                    transition-all
                "
            >
                <BarChart3 size={18}/>
                Analytics
            </button>

            <button
                onClick={onDelete}
                className="
                    w-12
                    flex-1
                    flex
                    justify-center
                    items-center
                    rounded-xl
                    bg-red-50
                    text-red-600
                    hover:bg-red-600
                    hover:text-white
                    transition-all
                "
            >
                <Trash2 size={18}/>
            </button>
        </div>
    );
};

export default ResourceActions;