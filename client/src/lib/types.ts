export interface Log {
  log_id: string;
  timestamp: string;
  username: string;
  "user domain": string;
  "source ip": string;
  "privilege list": string[];
  reason: string;
  "model type": string;
}

export interface LogStats {
  reviewed: number;
  truePositives: number;
  falsePositives: number;
  pending: number;
}

export type NotificationType = 'info' | 'success' | 'error';
