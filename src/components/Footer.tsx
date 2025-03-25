
import { Github, Twitter, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-bitcoin flex items-center justify-center rotate-12 transform hover:rotate-0 transition-transform duration-300">
                <span className="text-white font-bold text-lg">₿</span>
              </div>
              <span className="text-xl font-bold">BitPredict</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Using advanced machine learning algorithms to predict Bitcoin price movements with exceptional accuracy.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Github size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Predictions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} BitPredict. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
