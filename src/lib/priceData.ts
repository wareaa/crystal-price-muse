
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
  
  // Set number of data points and interval based on time range
  switch (timeRange) {
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
    case 'ALL':
      dataPoints = 60;
      interval = 30 * 24 * 60 * 60 * 1000;
      basePrice = 10000; // Start from a lower price for long-term view
      break;
    default:
      dataPoints = 30;
      interval = 24 * 60 * 60 * 1000;
  }
  
  // Generate data points
  for (let i = dataPoints - 1; i >= 0; i--) {
    const date = new Date(now.getTime() - (i * interval));
    
    // Generate realistic price movements
    const volatility = 0.02; // 2% volatility
    const changePercent = (Math.random() * 2 - 1) * volatility;
    
    if (i === dataPoints - 1) {
      // First data point
      data.push({
        date: formatDate(date, timeRange),
        price: basePrice
      });
    } else {
      // Subsequent data points based on previous price
      const prevPrice = data[data.length - 1].price;
      const newPrice = prevPrice * (1 + changePercent);
      
      data.push({
        date: formatDate(date, timeRange),
        price: newPrice
      });
    }
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
    case 'ALL':
      return date.toLocaleDateString(undefined, { 
        month: 'short', 
        year: 'numeric' 
      });
    default:
      return date.toLocaleDateString();
  }
};
