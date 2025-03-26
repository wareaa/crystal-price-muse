
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
  showFixedDayPrice?: boolean;
}

const PriceCard = ({
  currentPrice,
  previousPrice,
  isLive = false,
  isPrediction = false,
  predictionDate,
  className,
  showFixedDayPrice = false
}: PriceCardProps) => {
  const [animateValue, setAnimateValue] = useState(false);
  const [fixedDayPrice, setFixedDayPrice] = useState(0);
  
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
  
  useEffect(() => {
    // Set a fixed day price when component mounts - this will stay the same all day
    // In a real app, this would be fetched from an API and cached
    if (showFixedDayPrice) {
      // Get today's date at midnight to use as a consistent seed
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      // Use the day of month as a simple way to generate a consistent daily price
      // that's close to the current price but fixed for the day
      const seed = today.getDate() / 31; // 0-1 value based on day of month
      const variation = (seed - 0.5) * 2000; // -1000 to +1000 variation
      
      setFixedDayPrice(Math.round(currentPrice + variation));
    }
  }, [showFixedDayPrice, currentPrice]);
  
  // Format price without decimal places for the main display
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(currentPrice);
  
  // For fixed day price, also format without decimal places
  const formattedFixedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(fixedDayPrice);
  
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
        
        {showFixedDayPrice && (
          <div className="mt-2 p-2 bg-secondary/20 rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Today's Fixed Price</div>
            <div className="text-xl font-semibold">{formattedFixedPrice}</div>
          </div>
        )}
        
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
