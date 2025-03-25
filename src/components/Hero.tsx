
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PriceCard from './PriceCard';
import { getCurrentPrice } from '@/lib/priceData';

const Hero = () => {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [previousPrice, setPreviousPrice] = useState(0);

  useEffect(() => {
    // Initial price
    setCurrentPrice(getCurrentPrice());
    
    // Update price every 5 seconds
    const interval = setInterval(() => {
      setPreviousPrice(currentPrice);
      setCurrentPrice(getCurrentPrice());
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentPrice]);

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
              <Button size="lg" className="bg-gradient-to-r from-bitcoin to-bitcoin-dark hover:shadow-glow transition-all duration-300">
                View Predictions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-end">
            <div className="w-full max-w-md animate-fade-in animation-delay-200">
              <PriceCard 
                currentPrice={currentPrice} 
                previousPrice={previousPrice}
                isLive={true}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
