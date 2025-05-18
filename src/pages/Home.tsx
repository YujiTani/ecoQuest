import { useNotificationStore } from '@/components/ui/notifications/notification-store';

function Home() {
  const { addNotification } = useNotificationStore();
  const notification = {
    type: 'success' as const,
    message: '通知があります',
  };

  function handleClick() {
    addNotification(notification);
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleClick}>通知</button>
      <button
        onClick={() => {
          throw new Error('テスト:エラー発生');
        }}
      >
        error
      </button>
    </>
  );
}

export default Home;
