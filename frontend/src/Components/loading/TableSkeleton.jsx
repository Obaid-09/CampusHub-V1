import Skeleton from "./Skeleton";

const TableSkeleton = () => {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                shadow-card
                p-6
            "
        >

            {

                Array.from({

                    length: 8,

                }).map((_,index)=>(

                    <div

                        key={index}

                        className="
                            flex
                            justify-between
                            py-5
                        "

                    >

                        <Skeleton className="h-5 w-48"/>

                        <Skeleton className="h-5 w-24"/>

                        <Skeleton className="h-5 w-20"/>

                        <Skeleton className="h-5 w-28"/>

                    </div>

                ))

            }

        </div>

    );

};

export default TableSkeleton;