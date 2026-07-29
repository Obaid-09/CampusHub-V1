import Skeleton from "./Skeleton";

const CardSkeleton = () => {
  return (
    <div
      className="
                bg-white
                rounded-2xl
                shadow-card
                p-6
            "
    >
      <Skeleton className="h-48 w-full rounded-xl" />

      <Skeleton className="h-6 w-32 mt-6" />

      <Skeleton className="h-4 w-full mt-4" />

      <Skeleton className="h-4 w-3/4 mt-3" />

      <Skeleton className="h-10 w-full mt-8" />
    </div>
  );
};

export default CardSkeleton;
