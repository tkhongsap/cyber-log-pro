import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get sample logs (for future expansion)
  app.get('/api/logs', (req, res) => {
    res.json([
      {
        "log_id": "LOG-7821-4569",
        "timestamp": "2025-04-20T14:32:24.555Z",
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
      }
    ]);
  });

  const httpServer = createServer(app);
  return httpServer;
}
