import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InfoIcon, ChevronDown, Check, X } from 'lucide-react';
import { Log } from '@/lib/types';
import { formatTimestamp, syntaxHighlight } from '@/lib/utils';

interface LogCardProps {
  log: Log;
  onReview: (logId: string, isTrue: boolean) => void;
}

export default function LogCard({ log, onReview }: LogCardProps) {
  const [isPrivilegesVisible, setPrivilegesVisible] = useState(false);
  const [isJsonVisible, setJsonVisible] = useState(false);
  const [reviewDecision, setReviewDecision] = useState<'true' | 'false' | null>(null);

  const handleReview = (isTrue: boolean) => {
    setReviewDecision(isTrue ? 'true' : 'false');
    onReview(log.log_id, isTrue);
  };

  return (
    <Card className={`bg-card border border-gray-700 overflow-hidden shadow-md transition-all duration-300 ${reviewDecision ? 'fade-out' : ''}`}>
      <div className="p-4 bg-gray-800 border-b border-gray-700 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-[hsl(var(--json-bg))] p-1.5 rounded mr-3">
            <InfoIcon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="flex items-center">
              <span className="text-xs text-muted-foreground mr-2">LOG ID:</span>
              <span className="text-sm font-semibold">{log.log_id}</span>
            </div>
            <div className="flex items-center mt-1">
              <span className="text-xs text-muted-foreground mr-2">TIMESTAMP:</span>
              <span className="text-sm">{formatTimestamp(log.timestamp)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-[hsl(var(--json-bg))]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Username</div>
            <div className="text-sm font-medium">{log.username}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">User Domain</div>
            <div className="text-sm font-medium">{log["user domain"]}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Source IP</div>
            <div className="text-sm font-medium">{log["source ip"]}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Model Type</div>
            <div className="text-sm font-medium">{log["model type"]}</div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="text-xs text-muted-foreground mb-1">Reason</div>
          <div className="text-sm font-medium">{log.reason}</div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <div className="text-xs text-muted-foreground">Privilege List</div>
            <button 
              className="p-1 hover:bg-gray-700 rounded text-xs text-muted-foreground flex items-center"
              onClick={() => setPrivilegesVisible(!isPrivilegesVisible)}
            >
              <span className="mr-1">{isPrivilegesVisible ? 'Hide' : 'Show'}</span>
              <ChevronDown 
                className={`h-3 w-3 transition-transform ${isPrivilegesVisible ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
          
          {isPrivilegesVisible && (
            <div className="privileges-container">
              <ul className="list-disc pl-5 text-xs space-y-1">
                {log["privilege list"].map((privilege, index) => (
                  <li key={index} className="text-json-string">
                    {privilege}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <div className="text-xs text-muted-foreground">JSON Data</div>
            <button 
              className="p-1 hover:bg-gray-700 rounded text-xs text-muted-foreground flex items-center"
              onClick={() => setJsonVisible(!isJsonVisible)}
            >
              <span className="mr-1">{isJsonVisible ? 'Hide' : 'Show'}</span>
              <ChevronDown 
                className={`h-3 w-3 transition-transform ${isJsonVisible ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
          
          {isJsonVisible && (
            <pre 
              className="json-viewer bg-[hsl(var(--json-bg))] p-3 rounded text-xs overflow-x-auto font-mono leading-relaxed"
              dangerouslySetInnerHTML={{ __html: syntaxHighlight(JSON.stringify(log, null, 2)) }}
            ></pre>
          )}
        </div>
      </div>
      
      <div className="p-4 bg-card border-t border-gray-700 flex justify-between">
        <Button
          disabled={reviewDecision !== null}
          className={`w-[48%] bg-success bg-opacity-10 hover:bg-success hover:bg-opacity-20 text-success border border-success border-opacity-30 ${
            reviewDecision === 'true' ? 'bg-success bg-opacity-100 text-white' : 
            reviewDecision === 'false' ? 'opacity-30' : ''
          }`}
          onClick={() => handleReview(true)}
        >
          <Check className="h-5 w-5 mr-2" />
          True Positive
        </Button>
        
        <Button
          disabled={reviewDecision !== null}
          className={`w-[48%] bg-destructive bg-opacity-10 hover:bg-destructive hover:bg-opacity-20 text-destructive border border-destructive border-opacity-30 ${
            reviewDecision === 'false' ? 'bg-destructive bg-opacity-100 text-white' : 
            reviewDecision === 'true' ? 'opacity-30' : ''
          }`}
          onClick={() => handleReview(false)}
        >
          <X className="h-5 w-5 mr-2" />
          False Positive
        </Button>
      </div>
    </Card>
  );
}
