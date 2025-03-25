
import { useState, useEffect } from 'react';
import { ArrowRight, DollarSign, Euro, PoundSterling } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PriceCard from './PriceCard';
import { getCurrentPrice } from '@/lib/priceData';

const Hero = () => {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [previousPrice, setPreviousPrice] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const exchangeRates = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.78
  };

  useEffect(() => {
    // Initial price
    const initialPrice = getCurrentPrice();
    setCurrentPrice(initialPrice);
    
    // Update price every 5 seconds
    const interval = setInterval(() => {
      setPreviousPrice(currentPrice);
      setCurrentPrice(getCurrentPrice());
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentPrice]);

  const convertedPrice = currentPrice * exchangeRates[selectedCurrency as keyof typeof exchangeRates];
  const convertedPreviousPrice = previousPrice * exchangeRates[selectedCurrency as keyof typeof exchangeRates];

  const getCurrencySymbol = () => {
    switch(selectedCurrency) {
      case 'USD': return '$';
      case 'EUR': return '€';
      case 'GBP': return '£';
      default: return '$';
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-[5%] w-[400px] h-[400px] bg-bitcoin/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-6 items-center">
          <div className="flex flex-col items-start space-y-8 animate-fade-up">
            <div className="inline-block rounded-full px-3 py-1 border border-border bg-secondary/50">
              <p className="text-xs font-medium">Powered by Machine Learning</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Bitcoin Price Predictions with 
              <span className="text-gradient"> ML Precision</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Leverage advanced machine learning algorithms to predict Bitcoin prices with exceptional accuracy and make informed investment decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="bg-gradient-to-r from-bitcoin to-bitcoin-dark hover:shadow-glow transition-all duration-300" onClick={() => document.getElementById('predictions')?.scrollIntoView({ behavior: 'smooth' })}>
                View Predictions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center md:justify-end space-y-6">
            <div className="w-full max-w-md animate-fade-in animation-delay-200">
              <PriceCard 
                currentPrice={currentPrice} 
                previousPrice={previousPrice}
                isLive={true}
                className="w-full"
              />
            </div>
            
            <div className="w-full max-w-md bg-secondary/30 p-4 rounded-xl border border-border animate-fade-in animation-delay-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Currency Comparison</h3>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={selectedCurrency === 'USD' ? 'default' : 'outline'}
                    className={selectedCurrency === 'USD' ? 'bg-bitcoin hover:bg-bitcoin-dark' : ''}
                    onClick={() => setSelectedCurrency('USD')}
                  >
                    <DollarSign className="h-4 w-4 mr-1" /> USD
                  </Button>
                  <Button
                    size="sm"
                    variant={selectedCurrency === 'EUR' ? 'default' : 'outline'}
                    className={selectedCurrency === 'EUR' ? 'bg-bitcoin hover:bg-bitcoin-dark' : ''}
                    onClick={() => setSelectedCurrency('EUR')}
                  >
                    <Euro className="h-4 w-4 mr-1" /> EUR
                  </Button>
                  <Button
                    size="sm"
                    variant={selectedCurrency === 'GBP' ? 'default' : 'outline'}
                    className={selectedCurrency === 'GBP' ? 'bg-bitcoin hover:bg-bitcoin-dark' : ''}
                    onClick={() => setSelectedCurrency('GBP')}
                  >
                    <PoundSterling className="h-4 w-4 mr-1" /> GBP
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground">1 Bitcoin equals</p>
                  <p className="text-xl font-bold">{getCurrencySymbol()}{convertedPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
                <div className="bg-background p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground">24h Change</p>
                  <p className={`text-xl font-bold ${convertedPrice > convertedPreviousPrice ? 'text-green-500' : 'text-red-500'}`}>
                    {getCurrencySymbol()}{Math.abs(convertedPrice - convertedPreviousPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    {convertedPrice > convertedPreviousPrice ? ' ↑' : ' ↓'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
