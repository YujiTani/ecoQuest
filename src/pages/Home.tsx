import { useNotificationStore } from '@/components/ui/notifications/notification-store';

function Home() {
  const { addNotification } = useNotificationStore();
  const notification = {
    type: 'error' as const,
    message: 'まじでやばいエラーが発生しました',
  };

  function handleClick() {
    addNotification(notification);
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleClick}>click</button>
    </>
  );
}

export default Home;
