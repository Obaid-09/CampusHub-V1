import CardSkeleton from "./CardSkeleton";

const ResourceCardSkeleton = () => {

    return (

        <div
            className="
                grid
                md:grid-cols-2
                xl:grid-cols-3
                gap-8
            "
        >

            <CardSkeleton/>

            <CardSkeleton/>

            <CardSkeleton/>

            <CardSkeleton/>

            <CardSkeleton/>

            <CardSkeleton/>

        </div>

    );

};

export default ResourceCardSkeleton;