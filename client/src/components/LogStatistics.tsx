import { Card, CardContent } from '@/components/ui/card';
import { LogStats } from '@/lib/types';

interface LogStatisticsProps {
  stats: LogStats;
}

export default function LogStatistics({ stats }: LogStatisticsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Card className="bg-card shadow-md">
        <CardContent className="p-4">
          <h3 className="text-muted-foreground text-sm mb-1">Logs Reviewed</h3>
          <p className="text-2xl font-semibold">{stats.reviewed}</p>
        </CardContent>
      </Card>
      
      <Card className="bg-card shadow-md">
        <CardContent className="p-4">
          <h3 className="text-muted-foreground text-sm mb-1">True Positives</h3>
          <p className="text-2xl font-semibold text-success">{stats.truePositives}</p>
        </CardContent>
      </Card>
      
      <Card className="bg-card shadow-md">
        <CardContent className="p-4">
          <h3 className="text-muted-foreground text-sm mb-1">False Positives</h3>
          <p className="text-2xl font-semibold text-destructive">{stats.falsePositives}</p>
        </CardContent>
      </Card>
      
      <Card className="bg-card shadow-md">
        <CardContent className="p-4">
          <h3 className="text-muted-foreground text-sm mb-1">Pending Review</h3>
          <p className="text-2xl font-semibold text-primary">{stats.pending}</p>
        </CardContent>
      </Card>
    </div>
  );
}
