import Skeleton from "./Skeleton";

const ProfileSkeleton = () => {
  return (
    <div
      className="
                bg-white
                rounded-2xl
                shadow-card
                p-8
            "
    >
      <div
        className="
                    flex
                    gap-6
                    items-center
                "
      >
        <Skeleton className="w-24 h-24 rounded-full" />

        <div>
          <Skeleton className="w-56 h-8" />

          <Skeleton className="w-36 h-5 mt-3" />
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
