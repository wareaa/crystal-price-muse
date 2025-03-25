
// This is a mock ML prediction model that would be replaced with an actual ML model
// in a production environment. The actual model would likely be running on a server
// and accessed via API calls.

type TimeFrame = '1D' | '1W' | '1M' | '3M' | '1Y';

// Mock function to generate a prediction based on current price
export const getPrediction = (timeFrame: TimeFrame): number => {
  const currentPrice = getCurrentMockPrice();
  let predictedChange = 0;
  
  // Different timeframes have different volatility assumptions
  switch (timeFrame) {
    case '1D':
      // Daily prediction - small changes
      predictedChange = (Math.random() * 0.05) - 0.02; // -2% to +3%
      break;
    case '1W':
      // Weekly prediction - medium changes
      predictedChange = (Math.random() * 0.12) - 0.04; // -4% to +8%
      break;
    case '1M':
      // Monthly prediction - larger changes
      predictedChange = (Math.random() * 0.30) - 0.10; // -10% to +20%
      break;
    case '3M':
      // Quarterly prediction - significant changes
      predictedChange = (Math.random() * 0.50) - 0.15; // -15% to +35%
      break;
    case '1Y':
      // Yearly prediction - major changes
      predictedChange = (Math.random() * 1.00) - 0.20; // -20% to +80%
      break;
    default:
      predictedChange = (Math.random() * 0.10) - 0.03; // -3% to +7%
  }
  
  // Apply the predicted change to the current price
  return currentPrice * (1 + predictedChange);
};

// Mock function to generate current price (would be replaced with API call)
const getCurrentMockPrice = (): number => {
  const basePrice = 50000; // Base BTC price in USD
  const randomFactor = Math.random() * 2000 - 1000; // Random fluctuation
  return basePrice + randomFactor;
};

// Mock function to get prediction accuracy (would be replaced with actual historical data)
export const getPredictionAccuracy = (): number => {
  // Returns a value between 85% and 95%
  return 85 + (Math.random() * 10);
};

// Mock model confidence score (would be calculated based on model metrics)
export const getModelConfidence = (timeFrame: TimeFrame): number => {
  // Different timeframes have different confidence levels
  // Shorter predictions tend to be more accurate
  switch (timeFrame) {
    case '1D':
      return 85 + (Math.random() * 10); // 85-95%
    case '1W':
      return 80 + (Math.random() * 10); // 80-90%
    case '1M':
      return 75 + (Math.random() * 10); // 75-85%
    case '3M':
      return 65 + (Math.random() * 15); // 65-80%
    case '1Y':
      return 50 + (Math.random() * 20); // 50-70%
    default:
      return 70 + (Math.random() * 15); // 70-85%
  }
};

// In a real implementation, we would have more complex models like:
// - ARIMA (Autoregressive Integrated Moving Average)
// - LSTM (Long Short-Term Memory) neural networks
// - Random Forest or Gradient Boosting for regression
// - Sentiment analysis from news and social media
// - Technical indicators (RSI, MACD, Bollinger Bands, etc.)
