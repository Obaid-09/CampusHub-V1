const ResourceSkeleton = () => {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-card
                animate-pulse
            "
        >
            <div className="h-48 bg-gray200"></div>
            <div className="p-6 space-y-4">
                <div className="w-20 h-6 rounded-full bg-gray200"></div>
                <div className="h-6 bg-gray200 rounded w-4/5"></div>
                <div className="h-4 bg-gray200 rounded w-3/5"></div>
                <div className="h-4 bg-gray200 rounded w-2/5"></div>

                <div className="flex justify-between pt-4">
                    <div className="w-10 h-4 bg-gray200 rounded"></div>
                    <div className="w-10 h-4 bg-gray200 rounded"></div>
                    <div className="w-10 h-4 bg-gray200 rounded"></div>
                    <div className="w-10 h-4 bg-gray200 rounded"></div>
                </div>
                <div className="h-11 rounded-xl bg-gray200"></div>
            </div>
        </div>

    );

};

export default ResourceSkeleton;