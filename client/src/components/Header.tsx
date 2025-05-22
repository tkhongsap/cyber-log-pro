import { ShieldCheck, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onIngestLog: () => void;
}

export default function Header({ onIngestLog }: HeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-8 sticky top-0 bg-background z-10 py-4 border-b border-gray-700">
      <div className="flex items-center mb-4 sm:mb-0">
        <div className="bg-primary p-2 rounded-md mr-3">
          <ShieldCheck className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-2xl font-semibold text-foreground">Cybersecurity Log Review</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <span className="text-muted-foreground text-sm">SOC Team Dashboard</span>
        <Button 
          className="bg-primary hover:bg-blue-600 text-white flex items-center font-medium"
          onClick={onIngestLog}
        >
          <Download className="h-5 w-5 mr-2" />
          Simulate Incoming Log
        </Button>
      </div>
    </header>
  );
}
