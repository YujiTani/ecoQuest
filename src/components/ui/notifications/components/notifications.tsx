import { useNotificationStore } from "../notification-store";
import Notification from "./notification";

function Notifications() {
  const { notifications, dismissNotification } = useNotificationStore();

  return (
    <div>
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
