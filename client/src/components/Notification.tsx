import { NotificationType } from '@/lib/types';

interface NotificationProps {
  message: string;
  type: NotificationType;
}

export default function Notification({ message, type }: NotificationProps) {
  const getBgClass = () => {
    switch (type) {
      case 'success':
        return 'bg-success bg-opacity-20 border-success';
      case 'error':
        return 'bg-destructive bg-opacity-20 border-destructive';
      case 'info':
      default:
        return 'bg-primary bg-opacity-20 border-primary';
    }
  };

  return (
    <div className={`mb-6 p-4 rounded-md border ${getBgClass()} text-foreground`}>
      {message}
    </div>
  );
}
