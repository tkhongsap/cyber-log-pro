import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import LogStatistics from '@/components/LogStatistics';
import EmptyState from '@/components/EmptyState';
import LogCard from '@/components/LogCard';
import Notification from '@/components/Notification';
import { useLogStore } from '@/hooks/useLogStore';
import { Log, NotificationType } from '@/lib/types';

export default function Home() {
  const { logs, stats, addLog, removeLog, markAsReviewed } = useLogStore();
  const [notification, setNotification] = useState<{ message: string; type: NotificationType } | null>(null);

  const showNotification = (message: string, type: NotificationType) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleIngestLog = () => {
    const randomLog = generateRandomLog();
    addLog(randomLog);
    showNotification('New log entry received for review', 'info');
  };

  const handleLogReview = (logId: string, isTrue: boolean) => {
    markAsReviewed(logId, isTrue);
    showNotification(
      `Log marked as ${isTrue ? 'True Positive' : 'False Positive'}`,
      isTrue ? 'success' : 'error'
    );
    
    // Remove log after delay for animation
    setTimeout(() => {
      removeLog(logId);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-screen-2xl">
        <Header onIngestLog={handleIngestLog} />
        
        <main>
          <LogStatistics stats={stats} />
          
          {notification && (
            <Notification 
              message={notification.message} 
              type={notification.type} 
            />
          )}
          
          {logs.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
              {logs.map(log => (
                <LogCard 
                  key={log.log_id} 
                  log={log} 
                  onReview={handleLogReview} 
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// Helper function to generate random logs for demo purposes
function generateRandomLog(): Log {
  const logId = Math.random().toString(36).substring(2, 8);
  
  // Exact data format from the provided image, including correct timestamp
  return {
    "log_id": logId,
    "timestamp": new Date().toISOString(),
    "username": "i123456789",
    "user domain": "THAIBEV",
    "source ip": "10.7.143.136",
    "privilege list": [
      "SeDelegateSessionUserImpersonatePrivilege",
      "SeTakeOwnershipPrivilege",
      "SeDebugPrivilege",
      "SeImpersonatePrivilege",
      "SeEnableDelegationPrivilege",
      "SeSecurityPrivilege",
      "SeBackupPrivilege",
      "SeRestorePrivilege",
      "SeLoadDriverPrivilege",
      "SeSystemEnvironmentPrivilege"
    ],
    "reason": "New user detected",
    "model type": "Anomaly detection model from 4672 event id."
  };
}
