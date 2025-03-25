
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Api = () => {
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
              <p className="text-xs font-medium">Developer Tools</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              BitPredict API
            </h1>
            <p className="text-muted-foreground text-lg">
              Integrate our powerful Bitcoin prediction algorithms into your applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>For small projects and individuals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">$19<span className="text-sm text-muted-foreground font-normal">/month</span></p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>1,000 API calls per day</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Daily price predictions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Basic documentation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
            
            <Card className="border-bitcoin">
              <CardHeader className="bg-bitcoin/10">
                <CardTitle>Professional</CardTitle>
                <CardDescription>For businesses and developers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">$49<span className="text-sm text-muted-foreground font-normal">/month</span></p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>10,000 API calls per day</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Hourly price predictions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Advanced documentation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Email support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-bitcoin hover:bg-bitcoin/90">Get Started</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">$199<span className="text-sm text-muted-foreground font-normal">/month</span></p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Unlimited API calls</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Real-time predictions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Custom integration support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>SLA guarantees</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="bg-secondary/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">API Documentation Preview</h2>
            <pre className="bg-background p-4 rounded overflow-x-auto mb-6">
              <code>
{`GET https://api.bitpredict.com/v1/predictions/daily
Authorization: Bearer YOUR_API_KEY

Response:
{
  "prediction": {
    "timestamp": "2023-06-15T00:00:00Z",
    "price": 39785.42,
    "confidence": 0.87,
    "trend": "bullish"
  }
}`}
              </code>
            </pre>
            <Button variant="outline">View Full Documentation</Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Api;
