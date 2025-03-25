
import { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps 
} from 'recharts';
import { 
  AreaChart, Area, Button, Card, CardContent, CardDescription, CardHeader, CardTitle 
} from '@/components/ui';
import { getHistoricalData } from '@/lib/priceData';
import { cn } from '@/lib/utils';

interface ChartData {
  date: string;
  price: number;
}

type TimeRange = '1D' | '1W' | '1M' | '3M' | '1Y' | 'ALL';

const timeRangeOptions: TimeRange[] = ['1D', '1W', '1M', '3M', '1Y', 'ALL'];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass p-3 rounded-lg shadow-sm border border-border">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm font-bold text-bitcoin">
          {formatCurrency(payload[0].value as number)}
        </p>
      </div>
    );
  }
  return null;
};

const BitcoinChart = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('1M');
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getHistoricalData(timeRange);
      setChartData(data);
      setIsLoading(false);
    };
    
    fetchData();
  }, [timeRange]);

  return (
    <Card className="shadow-soft overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Bitcoin Price History</CardTitle>
        <CardDescription>
          Historical price data with interactive chart
        </CardDescription>
      </CardHeader>
      
      <div className="px-6 pb-2">
        <div className="flex space-x-1 rounded-lg border p-1 w-fit">
          {timeRangeOptions.map((option) => (
            <Button
              key={option}
              variant="ghost"
              size="sm"
              onClick={() => setTimeRange(option)}
              className={cn(
                'text-xs px-2.5 py-1 h-auto',
                timeRange === option && 'bg-secondary'
              )}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
      
      <CardContent className="p-0 pt-4 h-80">
        {isLoading ? (
          <div className="h-full flex items-center justify-center">
            <div className="animate-pulse flex space-x-2">
              <div className="h-3 w-3 bg-muted rounded-full"></div>
              <div className="h-3 w-3 bg-muted rounded-full animation-delay-200"></div>
              <div className="h-3 w-3 bg-muted rounded-full animation-delay-400"></div>
            </div>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F7931A" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#F7931A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis 
                dataKey="date" 
                tick={{fontSize: 12}} 
                tickLine={false}
                axisLine={{stroke: '#E5E7EB'}}
              />
              <YAxis 
                tick={{fontSize: 12}} 
                tickLine={false}
                axisLine={false}
                tickFormatter={formatCurrency}
                domain={['dataMin - 1000', 'dataMax + 1000']}
                width={80}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="price" 
                stroke="#F7931A" 
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorPrice)" 
                dot={false}
                activeDot={{ r: 6, strokeWidth: 0, fill: '#F7931A' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default BitcoinChart;
