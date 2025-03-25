
import { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDownRight, Bitcoin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PriceCardProps {
  currentPrice: number;
  previousPrice?: number;
  isLive?: boolean;
  isPrediction?: boolean;
  predictionDate?: string;
  className?: string;
}

const PriceCard = ({
  currentPrice,
  previousPrice,
  isLive = false,
  isPrediction = false,
  predictionDate,
  className
}: PriceCardProps) => {
  const [animateValue, setAnimateValue] = useState(false);
  const percentageChange = previousPrice 
    ? ((currentPrice - previousPrice) / previousPrice) * 100 
    : 0;
  const isIncreasing = percentageChange >= 0;
  
  useEffect(() => {
    if (previousPrice && currentPrice !== previousPrice) {
      setAnimateValue(true);
      const timer = setTimeout(() => setAnimateValue(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [currentPrice, previousPrice]);
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(currentPrice);
  
  return (
    <div className={cn(
      'glass rounded-2xl p-6 transition-all duration-300 hover:shadow-medium',
      className
    )}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Bitcoin className="h-5 w-5 text-bitcoin" />
          <span className="text-sm font-medium">
            {isPrediction ? 'BTC Prediction' : 'BTC Price'}
          </span>
        </div>
        {isLive && (
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-success animate-pulse-subtle" />
            <span className="text-xs text-muted-foreground">Live</span>
          </div>
        )}
        {isPrediction && predictionDate && (
          <div className="text-xs text-muted-foreground">
            {predictionDate}
          </div>
        )}
      </div>
      
      <div className="mt-3">
        <div className={cn(
          'text-3xl font-bold tracking-tight transition-all',
          animateValue && (isIncreasing ? 'text-success' : 'text-destructive')
        )}>
          {formattedPrice}
        </div>
        
        {previousPrice && (
          <div className="flex items-center mt-1.5">
            <div className={cn(
              'flex items-center gap-1',
              isIncreasing ? 'text-success' : 'text-destructive' 
            )}>
              {isIncreasing ? (
                <ArrowUpRight className="h-4 w-4" />
              ) : (
                <ArrowDownRight className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">
                {Math.abs(percentageChange).toFixed(2)}%
              </span>
            </div>
            <span className="text-xs text-muted-foreground ml-2">
              24h change
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceCard;
