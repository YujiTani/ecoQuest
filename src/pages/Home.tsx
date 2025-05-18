import Notification, {
  NotificationProps,
} from '@/components/ui/notifications/notification';
import NotFoundRoute from './NotFound';

function Home() {
  const notificationObj: NotificationProps = {
    notification: {
      id: '1',
      type: 'error',
      message: 'test',
    },
    onDismiss: () => {},
  };

  return (
    <>
      <h1>Home</h1>
      <Notification
        notification={notificationObj.notification}
        onDismiss={notificationObj.onDismiss}
      />
      <NotFoundRoute />
    </>
  );
}

export default Home;
