import PendingCard from "./PendingCard";

const PendingGrid = ({ resources }) => {

    return (

        <div
            className="
                grid
                lg:grid-cols-2
                xl:grid-cols-3
                gap-6
            "
        >

            {

                resources.map((resource)=>(

                    <PendingCard

                        key={resource.id}

                        resource={resource}

                    />

                ))

            }

        </div>

    );

};

export default PendingGrid;