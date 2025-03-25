
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import BitcoinChart from '@/components/BitcoinChart';
import PredictionSection from '@/components/PredictionSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        <Hero />
        
        <section id="how-it-works" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <div className="inline-block rounded-full px-3 py-1 border border-border bg-background mb-4">
                <p className="text-xs font-medium">Historical Data</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Track Bitcoin Performance
              </h2>
              <p className="text-muted-foreground text-lg">
                Visualize historical price data to identify trends and patterns.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto animate-fade-up">
              <BitcoinChart />
            </div>
          </div>
        </section>
        
        <PredictionSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
