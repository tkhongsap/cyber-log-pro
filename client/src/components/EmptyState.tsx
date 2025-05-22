import { Shield } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center bg-card rounded-lg p-12 text-center shadow-md">
      <Shield className="h-16 w-16 text-muted-foreground mb-4" />
      <h2 className="text-xl font-semibold mb-2">No suspicious logs pending review</h2>
      <p className="text-muted-foreground mb-6">Monitoring in progress...</p>
      <p className="text-sm text-muted-foreground">Click "Simulate Incoming Log" to generate sample data for review</p>
    </div>
  );
}
