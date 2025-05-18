import { CircleX } from 'lucide-react';

const icons = {
  error: <CircleX className="size-6 text-red-500" aria-hidden="true" />,
};

export type NotificationProps = {
  notification: {
    id: string;
    type: keyof typeof icons;
    message: string;
  };
  onDismiss: (id: string) => void;
};

function Notification({
  notification: { id, type, message },
  onDismiss,
}: NotificationProps) {
  return (
    <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
      <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5">
      <div className='flex justify-between'>
        <div className="flex items-center">
          <div className="ml-2 shrink-0">{icons[type]}</div>
          <p className="ml-2 text-sm text-gray-500">{message}</p>
        </div>
        <button
          className="inline-flex rounded-lg bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
          onClick={() => {
              onDismiss(id);
            }}
            >
          <CircleX className="size-5" aria-hidden="true" />
        </button>
            </div>
      </div>
    </div>
  );
}

export default Notification;
