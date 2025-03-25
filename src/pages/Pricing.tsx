
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricingPlans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "For individual investors",
      features: [
        "Daily Bitcoin price predictions",
        "Email alerts for major price movements",
        "Basic historical data access",
        "Weekly market analysis report",
        "Email support"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      description: "For serious traders",
      features: [
        "Hourly Bitcoin price predictions",
        "Real-time price movement alerts",
        "Full historical data access",
        "Daily market analysis reports",
        "API access with 1,000 calls/day",
        "Priority email support",
        "Trading strategy recommendations"
      ],
      buttonText: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For professional trading firms",
      features: [
        "Real-time Bitcoin price predictions",
        "Custom alert configurations",
        "Full historical data with advanced analytics",
        "Real-time market analysis",
        "Unlimited API access",
        "24/7 priority support",
        "Custom prediction models",
        "Dedicated account manager",
        "Trading algorithm consultations"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block rounded-full px-3 py-1 border border-border bg-secondary/50 mb-4">
              <p className="text-xs font-medium">Pricing Plans</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-muted-foreground text-lg">
              Choose the plan that best fits your Bitcoin prediction needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-lg border ${plan.popular ? 'border-bitcoin shadow-lg relative' : 'border-border'} p-8 flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-bitcoin text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start mb-3">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-bitcoin hover:bg-bitcoin/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
          
          <div className="bg-secondary/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We offer custom prediction models and enterprise integrations for hedge funds, financial institutions, and large trading operations.
            </p>
            <Button variant="outline" size="lg">Contact Our Sales Team</Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
