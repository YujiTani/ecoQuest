import { useNotificationStore } from "../notification-store";
import Notification from "./notification";

function Notifications() {
  const { notifications, dismissNotification } = useNotificationStore();

  return (
    <div className="fixed bottom-4 left-4 flex flex-col gap-2 z-50">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onDismiss={dismissNotification}
        />
      ))}
    </div>
  );
}

export default Notifications;
