
// This is a mock service that would be replaced with actual API calls
// to a Bitcoin price API like CoinGecko, Binance, etc.

interface PriceDataPoint {
  date: string;
  price: number;
}

// Mock current price in the range of $30,000 to $70,000
export const getCurrentPrice = (): number => {
  const basePrice = 50000;
  const fluctuation = Math.random() * 1000 - 500; // Random number between -500 and 500
  return basePrice + fluctuation;
};

// Generate mock historical data for different time ranges
export const getHistoricalData = async (timeRange: string): Promise<PriceDataPoint[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  const now = new Date();
  const data: PriceDataPoint[] = [];
  let dataPoints = 0;
  let interval = 0;
  let basePrice = 50000;
  let isPrevious = timeRange.includes('_previous');
  
  // If it's a previous period, extract the actual time range
  const actualTimeRange = isPrevious ? timeRange.split('_')[0] : timeRange;
  
  // Set number of data points and interval based on time range
  switch (actualTimeRange) {
    case '1D':
      dataPoints = 24;
      interval = 60 * 60 * 1000; // 1 hour in milliseconds
      break;
    case '1W':
      dataPoints = 7;
      interval = 24 * 60 * 60 * 1000; // 1 day in milliseconds
      break;
    case '1M':
      dataPoints = 30;
      interval = 24 * 60 * 60 * 1000;
      break;
    case '3M':
      dataPoints = 90;
      interval = 24 * 60 * 60 * 1000;
      break;
    case '1Y':
      dataPoints = 12;
      interval = 30 * 24 * 60 * 60 * 1000; // ~1 month in milliseconds
      break;
    case '5Y':
      dataPoints = 60;
      interval = 30 * 24 * 60 * 60 * 1000; // ~1 month in milliseconds
      basePrice = 8000; // Start from a lower price for long-term view
      break;
    case 'ALL':
      dataPoints = 60;
      interval = 30 * 24 * 60 * 60 * 1000;
      basePrice = 10000; // Start from a lower price for long-term view
      break;
    default:
      dataPoints = 30;
      interval = 24 * 60 * 60 * 1000;
  }
  
  // Adjust the starting date for previous periods
  const startDate = new Date(now);
  if (isPrevious) {
    // Move back an additional time period for previous comparison
    switch (actualTimeRange) {
      case '1D': startDate.setDate(startDate.getDate() - 1); break;
      case '1W': startDate.setDate(startDate.getDate() - 7); break;
      case '1M': startDate.setMonth(startDate.getMonth() - 1); break;
      case '3M': startDate.setMonth(startDate.getMonth() - 3); break;
      case '1Y': startDate.setFullYear(startDate.getFullYear() - 1); break;
      case '5Y': startDate.setFullYear(startDate.getFullYear() - 5); break;
      default: startDate.setMonth(startDate.getMonth() - 1);
    }
  }
  
  // Generate data points with more realistic patterns
  const trendFactor = Math.random() > 0.5 ? 1 : -1; // Random overall trend direction
  const trendStrength = Math.random() * 0.01; // Random trend strength

  // Create some pattern cycles for more natural looking data
  const createCycle = (day: number, amplitude: number, period: number) => {
    return amplitude * Math.sin((day / period) * Math.PI * 2);
  };
  
  for (let i = 0; i < dataPoints; i++) {
    const date = new Date(startDate.getTime() - ((dataPoints - 1 - i) * interval));
    
    // Base price modified by previous point to create trend
    const prevPrice = i > 0 ? data[i - 1].price : basePrice;
    
    // Random volatility factor
    const volatility = 0.02; // 2% volatility
    const randomChange = (Math.random() * 2 - 1) * volatility;
    
    // Trend component
    const trendComponent = trendFactor * trendStrength * i;
    
    // Cyclical components (multiple cycles of different lengths)
    const cycleComponent1 = createCycle(i, prevPrice * 0.05, dataPoints / 3);
    const cycleComponent2 = createCycle(i, prevPrice * 0.02, dataPoints / 7);
    
    // Combine components for a realistic price
    const newPrice = prevPrice * (1 + randomChange + trendComponent) + cycleComponent1 + cycleComponent2;
    
    data.push({
      date: formatDate(date, actualTimeRange),
      price: newPrice
    });
  }
  
  return data;
};

// Format date based on time range
const formatDate = (date: Date, timeRange: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    month: 'short', 
    day: 'numeric'
  };
  
  switch (timeRange) {
    case '1D':
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    case '1W':
    case '1M':
    case '3M':
      return date.toLocaleDateString(undefined, options);
    case '1Y':
    case '5Y':
      return date.toLocaleDateString(undefined, { 
        month: 'short', 
        year: 'numeric' 
      });
    case 'ALL':
      return date.toLocaleDateString(undefined, { 
        year: 'numeric' 
      });
    default:
      return date.toLocaleDateString();
  }
};
