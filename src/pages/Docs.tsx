
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";
import DocsHeader from '@/components/docs/DocsHeader';
import DocsSidebar from '@/components/docs/DocsSidebar';
import DocsGettingStarted from '@/components/docs/DocsGettingStarted';
import DocsApiReference from '@/components/docs/DocsApiReference';
import DocsHistoricalData from '@/components/docs/DocsHistoricalData';
import DocsExamples from '@/components/docs/DocsExamples';
import DocsFaq from '@/components/docs/DocsFaq';

const Docs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <DocsHeader />
          
          <div className="grid md:grid-cols-4 gap-10">
            <DocsSidebar />
            
            <div className="md:col-span-3">
              <DocsGettingStarted />
              
              <Separator className="my-10" />
              
              <DocsApiReference />
              
              <Separator className="my-10" />
              
              <DocsHistoricalData />
              
              <Separator className="my-10" />
              
              <DocsExamples />
              
              <Separator className="my-10" />
              
              <DocsFaq />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Docs;
