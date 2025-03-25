
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'glass py-3 shadow-medium' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/"
          className="flex items-center gap-2"
        >
          <div className="h-8 w-8 rounded-full bg-bitcoin flex items-center justify-center rotate-12 transform hover:rotate-0 transition-transform duration-300">
            <span className="text-white font-bold text-lg">₿</span>
          </div>
          <span className="text-xl font-bold">BitPredict</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {isHomePage ? (
            <>
              <a 
                href="#home" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                Home
              </a>
              <a 
                href="#predictions" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('predictions');
                }}
              >
                Predictions
              </a>
              <a 
                href="#how-it-works" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('how-it-works');
                }}
              >
                How It Works
              </a>
            </>
          ) : (
            <>
              <Link 
                to="/" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/predictions" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Predictions
              </Link>
              <Link 
                to="/blog" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                About
              </Link>
            </>
          )}
          
          <Button 
            variant="default" 
            size="sm" 
            className="ml-4 bg-gradient-to-r from-bitcoin to-bitcoin-dark hover:shadow-glow transition-all duration-300"
            onClick={() => isHomePage ? scrollToSection('predictions') : window.location.href = '/predictions'}
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Trigger */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
          {isHomePage ? (
            <>
              <a 
                href="#home" 
                className="text-xl font-medium py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                Home
              </a>
              <a 
                href="#predictions" 
                className="text-xl font-medium py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('predictions');
                }}
              >
                Predictions
              </a>
              <a 
                href="#how-it-works" 
                className="text-xl font-medium py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('how-it-works');
                }}
              >
                How It Works
              </a>
            </>
          ) : (
            <>
              <Link 
                to="/" 
                className="text-xl font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/predictions" 
                className="text-xl font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Predictions
              </Link>
              <Link 
                to="/blog" 
                className="text-xl font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="text-xl font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </>
          )}
          
          <Button 
            variant="default" 
            size="lg" 
            className="mt-6 w-full sm:w-auto bg-gradient-to-r from-bitcoin to-bitcoin-dark"
            onClick={() => {
              setIsMobileMenuOpen(false);
              if (isHomePage) {
                scrollToSection('predictions');
              } else {
                window.location.href = '/predictions';
              }
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
