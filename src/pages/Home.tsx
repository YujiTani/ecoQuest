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

  function handleError() {
    try {
      throw Error('テスト:エラー発生');
    } catch (error) {
      // エラーを通知として追加
      addNotification({
        type: 'error' as const,
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleClick}>通知</button>
      <button
        onClick={handleError}
      >
        error
      </button>
    </>
  );
}

export default Home;
