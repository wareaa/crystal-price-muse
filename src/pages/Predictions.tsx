
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import PredictionSection from '@/components/PredictionSection';

const Predictions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block rounded-full px-3 py-1 border border-border bg-secondary/50 mb-4">
              <p className="text-xs font-medium">Bitcoin Price Predictions</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Bitcoin Price Forecasts
            </h1>
            <p className="text-muted-foreground text-lg">
              Using advanced machine learning to provide accurate Bitcoin price predictions.
            </p>
          </div>
          
          <PredictionSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Predictions;
