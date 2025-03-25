
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'glass py-3 shadow-medium' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-bitcoin flex items-center justify-center rotate-12 transform hover:rotate-0 transition-transform duration-300">
            <span className="text-white font-bold text-lg">₿</span>
          </div>
          <span className="text-xl font-bold">BitPredict</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
          <a href="#predictions" className="text-sm font-medium hover:text-primary transition-colors">Predictions</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</a>
          <Button variant="default" size="sm" className="ml-4 bg-gradient-to-r from-bitcoin to-bitcoin-dark hover:shadow-glow transition-all duration-300">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Trigger */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container mx-auto px-6 pt-24 pb-12 flex flex-col items-center gap-8">
          <a 
            href="#home" 
            className="text-xl font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#predictions" 
            className="text-xl font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Predictions
          </a>
          <a 
            href="#how-it-works" 
            className="text-xl font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <Button variant="default" size="lg" className="mt-6 w-full sm:w-auto bg-gradient-to-r from-bitcoin to-bitcoin-dark">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
