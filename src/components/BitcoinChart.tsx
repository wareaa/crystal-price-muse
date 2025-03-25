
import { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps,
  Legend, ReferenceArea
} from 'recharts';
import { AreaChart, Area } from 'recharts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getHistoricalData } from '@/lib/priceData';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ChartData {
  date: string;
  price: number;
}

type TimeRange = '1D' | '1W' | '1M' | '3M' | '1Y' | '5Y' | 'ALL';

const timeRangeOptions: TimeRange[] = ['1D', '1W', '1M', '3M', '1Y', '5Y', 'ALL'];

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
        {payload.length > 1 && (
          <p className="text-sm font-bold text-indigo-500 mt-1">
            {formatCurrency(payload[1].value as number)}
          </p>
        )}
      </div>
    );
  }
  return null;
};

const BitcoinChart = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('1M');
  const [viewMode, setViewMode] = useState<'single' | 'comparison'>('single');
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [comparisonData, setComparisonData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getHistoricalData(timeRange);
      setChartData(data);
      
      // If in comparison mode, fetch data for previous period
      if (viewMode === 'comparison') {
        let comparisonTimeRange: string;
        switch (timeRange) {
          case '1D': comparisonTimeRange = '1D_previous'; break;
          case '1W': comparisonTimeRange = '1W_previous'; break;
          case '1M': comparisonTimeRange = '1M_previous'; break;
          case '3M': comparisonTimeRange = '3M_previous'; break;
          case '1Y': comparisonTimeRange = '1Y_previous'; break;
          case '5Y': comparisonTimeRange = '5Y_previous'; break;
          default: comparisonTimeRange = '1M_previous';
        }
        
        const previousData = await getHistoricalData(comparisonTimeRange);
        setComparisonData(previousData);
      }
      
      setIsLoading(false);
    };
    
    fetchData();
  }, [timeRange, viewMode]);

  // Calculate price change metrics
  const calculatePriceChange = () => {
    if (chartData.length < 2) return { change: 0, percentage: 0 };
    
    const firstPrice = chartData[0].price;
    const lastPrice = chartData[chartData.length - 1].price;
    const change = lastPrice - firstPrice;
    const percentage = (change / firstPrice) * 100;
    
    return { change, percentage };
  };

  const { change, percentage } = calculatePriceChange();
  const isIncreasing = change >= 0;

  return (
    <Card className="shadow-soft overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Bitcoin Price History</CardTitle>
        <CardDescription>
          Historical price data with interactive chart
        </CardDescription>
      </CardHeader>
      
      <div className="px-6 pb-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
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
          
          <Tabs 
            defaultValue="single" 
            value={viewMode} 
            onValueChange={(value) => setViewMode(value as 'single' | 'comparison')}
            className="w-fit"
          >
            <TabsList>
              <TabsTrigger value="single">Single View</TabsTrigger>
              <TabsTrigger value="comparison">Comparison</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {!isLoading && (
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="p-3 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">Price Change</p>
              <p className={cn(
                "text-lg font-bold",
                isIncreasing ? "text-green-500" : "text-red-500"
              )}>
                {isIncreasing ? "+" : ""}{formatCurrency(change)}
              </p>
            </div>
            <div className="p-3 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">Percentage</p>
              <p className={cn(
                "text-lg font-bold",
                isIncreasing ? "text-green-500" : "text-red-500"
              )}>
                {isIncreasing ? "+" : ""}{percentage.toFixed(2)}%
              </p>
            </div>
          </div>
        )}
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
            {viewMode === 'single' ? (
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
            ) : (
              <LineChart
                data={chartData.map((item, index) => ({
                  ...item,
                  previousPrice: comparisonData[index]?.price || null
                }))}
                margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
              >
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
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#F7931A" 
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6 }}
                  name="Current Period"
                />
                <Line 
                  type="monotone" 
                  dataKey="previousPrice" 
                  stroke="#6366F1" 
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6 }}
                  name="Previous Period"
                  strokeDasharray="5 5"
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default BitcoinChart;
