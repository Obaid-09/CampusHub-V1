import MiniResourceCard from "../dashboard/MiniResourceCard";

const RecentlyViewed = ({ resources, loading }) => {
  if (loading) {
    return (
      <section className="mt-12">
        <h2
          className="
                        text-3xl
                        font-heading
                        font-bold
                        text-secondary
                        mb-6
                    "
        >
          Recently Viewed
        </h2>

        <div>Loading...</div>
      </section>
    );
  }

  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2
          className="
                        text-3xl
                        font-heading
                        font-bold
                        text-secondary
                    "
        >
          Recently Viewed
        </h2>
      </div>

      <div className="overflow-hidden">
        <div
          className="
                        flex
                        gap-6
                        overflow-x-auto
                        pb-4
                        scrollbar-thin
                        scrollbar-thumb-primary/40
                        scrollbar-track-transparent
                    "
        >
          {resources.map((item) => (
            <MiniResourceCard
              key={item.resource._id}
              resource={item.resource}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
