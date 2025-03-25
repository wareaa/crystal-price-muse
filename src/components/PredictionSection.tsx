
import { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Calculator, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import PriceCard from './PriceCard';
import { getPrediction } from '@/lib/predictionModel';
import { getCurrentPrice } from '@/lib/priceData';

const PredictionSection = () => {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [predictions, setPredictions] = useState({
    nextDay: 0,
    nextWeek: 0,
    nextMonth: 0
  });
  const [showDetails, setShowDetails] = useState(false);
  
  useEffect(() => {
    setCurrentPrice(getCurrentPrice());
    
    // Get predictions for different time periods
    setPredictions({
      nextDay: getPrediction('1D'),
      nextWeek: getPrediction('1W'),
      nextMonth: getPrediction('1M')
    });
  }, []);

  const handleLearnMore = () => {
    setShowDetails(!showDetails);
  };

  const features = [
    {
      icon: <TrendingUp className="h-5 w-5 text-bitcoin" />,
      title: "Advanced Price Analysis",
      description: "Our model analyzes hundreds of market indicators to identify patterns."
    },
    {
      icon: <Calculator className="h-5 w-5 text-bitcoin" />,
      title: "Statistical Modeling",
      description: "Utilizing ARIMA, LSTM, and other statistical models for accuracy."
    },
    {
      icon: <Brain className="h-5 w-5 text-bitcoin" />,
      title: "Neural Network Learning",
      description: "Self-improving algorithms that adapt to changing market conditions."
    }
  ];

  return (
    <section id="predictions" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block rounded-full px-3 py-1 border border-border bg-secondary/50 mb-4">
            <p className="text-xs font-medium">ML-Powered Insights</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Accurate Bitcoin Price Predictions
          </h2>
          <p className="text-muted-foreground text-lg">
            Our machine learning algorithms analyze massive amounts of historical data, market trends, and sentiment indicators to deliver highly accurate price forecasts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <PriceCard 
            currentPrice={predictions.nextDay} 
            previousPrice={currentPrice}
            isPrediction={true}
            predictionDate="Tomorrow"
            className="animate-fade-in"
          />
          <PriceCard 
            currentPrice={predictions.nextWeek} 
            previousPrice={currentPrice}
            isPrediction={true}
            predictionDate="Next Week"
            className="animate-fade-in animation-delay-200"
          />
          <PriceCard 
            currentPrice={predictions.nextMonth} 
            previousPrice={currentPrice}
            isPrediction={true}
            predictionDate="Next Month"
            className="animate-fade-in animation-delay-400"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass rounded-2xl overflow-hidden shadow-medium p-8 animate-fade-up">
            <h3 className="text-2xl font-bold mb-6">How Our ML Model Works</h3>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-bitcoin/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button className="bg-gradient-to-r from-bitcoin to-bitcoin-dark hover:shadow-glow transition-all duration-300" onClick={handleLearnMore}>
                {showDetails ? "Hide Details" : "Learn More About Our Technology"} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {showDetails && (
              <div className="mt-6 p-4 border border-border rounded-lg bg-secondary/10 animate-fade-in">
                <h4 className="font-bold mb-2">Technical Details</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Our machine learning pipeline leverages a combination of deep learning models, including LSTM networks and transformer architectures, to process high-dimensional time series data. 
                </p>
                <p className="text-sm text-muted-foreground">
                  We also incorporate NLP for sentiment analysis from news sources and social media, allowing our models to detect market sentiment shifts before they reflect in price movements.
                </p>
              </div>
            )}
          </div>
          
          <div className="space-y-6 animate-fade-up animation-delay-200">
            <h3 className="text-2xl font-bold">Why Trust Our Predictions?</h3>
            <p className="text-muted-foreground">
              Our machine learning models have been trained on years of historical Bitcoin data, incorporating over 30 different market indicators and sentiment analysis from social media and news sources.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl font-bold">94%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Directional accuracy for daily predictions</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl font-bold">±2.8%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Average margin of error for weekly forecasts</p>
                </CardContent>
              </Card>
              
              <Card className="col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold">Real-Time Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our models update every hour to incorporate the latest market data, ensuring you always have the most current predictions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                    View Performance History
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictionSection;
