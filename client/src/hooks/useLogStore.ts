import { useState } from 'react';
import { Log, LogStats } from '@/lib/types';

export function useLogStore() {
  const [logs, setLogs] = useState<Log[]>([]);
  const [stats, setStats] = useState<LogStats>({
    reviewed: 42,
    truePositives: 28,
    falsePositives: 14,
    pending: 0
  });

  const addLog = (log: Log) => {
    setLogs(prev => [...prev, log]);
    setStats(prev => ({
      ...prev,
      pending: prev.pending + 1
    }));
  };

  const removeLog = (logId: string) => {
    setLogs(prev => prev.filter(log => log.log_id !== logId));
  };

  const markAsReviewed = (logId: string, isTrue: boolean) => {
    setStats(prev => ({
      reviewed: prev.reviewed + 1,
      truePositives: isTrue ? prev.truePositives + 1 : prev.truePositives,
      falsePositives: isTrue ? prev.falsePositives : prev.falsePositives + 1,
      pending: prev.pending - 1
    }));
  };

  return {
    logs,
    stats,
    addLog,
    removeLog,
    markAsReviewed
  };
}
