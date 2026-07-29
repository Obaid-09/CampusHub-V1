import { upcomingEvents } from "../../constants/dashboard";

const UpcomingEvents = () => {
  return (
    <div
      className="
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100
                p-6
            "
    >
      <h2
        className="
                    text-2xl
                    font-heading
                    font-bold
                    text-secondary
                    mb-6
                "
      >
        Upcoming Events
      </h2>

      <div className="space-y-4">
        {upcomingEvents.map((item) => (
          <div
            key={item.id}
            className="
                            flex
                            justify-between
                        "
          >
            <p className="text-secondary">{item.title}</p>

            <span className="text-primary">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
