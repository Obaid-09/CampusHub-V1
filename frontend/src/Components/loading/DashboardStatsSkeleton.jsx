import Skeleton from "./Skeleton";

const DashboardStatsSkeleton = () => {
  return (
    <div
      className="
                grid
                md:grid-cols-2
                xl:grid-cols-4
                gap-6
            "
    >
      {Array.from({
        length: 4,
      }).map((_, index) => (
        <div
          key={index}
          className="
                            bg-white
                            rounded-2xl
                            shadow-card
                            p-6
                        "
        >
          <Skeleton className="w-10 h-10" />

          <Skeleton className="w-24 h-5 mt-5" />

          <Skeleton className="w-16 h-8 mt-4" />
        </div>
      ))}
    </div>
  );
};

export default DashboardStatsSkeleton;
