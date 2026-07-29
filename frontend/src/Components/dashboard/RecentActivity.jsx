const RecentActivity = ({ activities, loading }) => {
  if (loading) {
    return (
      <div
        className="
                    bg-white
                    rounded-2xl
                    border
                    border-gray100
                    shadow-card
                    p-6
                "
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      className="
                bg-white
                rounded-2xl
                border
                border-gray100
                shadow-card
                p-6
            "
    >
      <h2
        className="
                    text-2xl
                    font-heading
                    font-bold
                    text-secondary
                "
      >
        Recent Activity
      </h2>

      <div className="mt-6 space-y-5">
        {activities.map((item) => (
          <div
            key={item._id}
            className="
                            flex
                            justify-between
                            items-center
                            border-b
                            border-gray100
                            pb-4
                        "
          >
            <div>
              <p className="text-gray700 font-medium">{item.resource.title}</p>

              <p className="text-sm text-gray500">{item.resource.subject}</p>
            </div>

            <span
              className="
                                text-sm
                                text-gray500
                            "
            >
              {new Date(item.viewedAt).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
