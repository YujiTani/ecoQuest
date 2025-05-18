import Notification from "./notification";
import { useNotificationStore } from "./notification-store";

function Notifications() {
    const {notifications, dismissNotification} = useNotificationStore()

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
    )
}

export default Notifications