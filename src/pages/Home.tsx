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
    <div className="w-full min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Home</h1>
      <div className="flex gap-4">
        <button 
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90" 
          onClick={handleClick}>通知</button>
        <button 
          className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:opacity-90" 
          onClick={handleError}>error</button>
      </div>
    </div>
  );
}

export default Home;
