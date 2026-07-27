import { useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import NotificationsFilter from "../../components/dashboard/NotificationsFilter";
import NotificationCard from "../../components/dashboard/NotificationCard";
import EmptyNotifications from "../../components/dashboard/EmptyNotifications";

import { dummyNotifications } from "../../constants/dashboard";

const Notifications = () => {
  const [notifications] = useState(dummyNotifications);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1
            className="
                            text-4xl
                            font-heading
                            font-bold
                            text-secondary
                        "
          >
            Notifications
          </h1>

          <p className="mt-2 text-gray600">
            Stay updated with your resources and account.
          </p>
        </div>

        <NotificationsFilter />

        {notifications.length === 0 ? (
          <EmptyNotifications />
        ) : (
          <div className="space-y-5">
            {notifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
