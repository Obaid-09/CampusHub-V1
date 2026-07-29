import { Bell } from "lucide-react";

const EmptyNotifications = () => {
  return (
    <div className="py-24 text-center">
      <Bell
        size={72}
        className="
                    mx-auto
                    text-primary
                "
      />

      <h2
        className="
                    mt-6
                    text-4xl
                    font-heading
                    font-bold
                    text-secondary
                "
      >
        No Notifications
      </h2>

      <p
        className="
                    mt-4
                    text-gray600
                "
      >
        You're all caught up!
      </p>
    </div>
  );
};

export default EmptyNotifications;
