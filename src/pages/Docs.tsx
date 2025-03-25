
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Docs = () => {
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
              <p className="text-xs font-medium">Resources</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Documentation
            </h1>
            <p className="text-muted-foreground text-lg">
              Learn how to use BitPredict's algorithms and APIs in your applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <div className="sticky top-28">
                <h3 className="text-lg font-semibold mb-4">Contents</h3>
                <ul className="space-y-3">
                  <li><a href="#getting-started" className="text-muted-foreground hover:text-foreground transition-colors">Getting Started</a></li>
                  <li><a href="#api-reference" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</a></li>
                  <li><a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">Examples</a></li>
                  <li><a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <section id="getting-started" className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
                <p className="mb-6">Welcome to the BitPredict documentation. This guide will help you get started with our API for Bitcoin price predictions.</p>
                
                <h3 className="text-xl font-semibold mb-4">Authentication</h3>
                <p className="mb-4">To use the BitPredict API, you need an API key. You can get one by signing up for an account.</p>
                <pre className="bg-background p-4 rounded overflow-x-auto mb-6">
                  <code>
{`# Example API request with authentication
curl -X GET "https://api.bitpredict.com/v1/predictions/daily" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                  </code>
                </pre>
                
                <h3 className="text-xl font-semibold mb-4">Rate Limits</h3>
                <p>Depending on your plan, you will have different rate limits for API calls. Check your dashboard for your current limits.</p>
              </section>
              
              <Separator className="my-10" />
              
              <section id="api-reference" className="mb-16">
                <h2 className="text-3xl font-bold mb-6">API Reference</h2>
                
                <Tabs defaultValue="daily">
                  <TabsList className="mb-6">
                    <TabsTrigger value="daily">Daily Predictions</TabsTrigger>
                    <TabsTrigger value="hourly">Hourly Predictions</TabsTrigger>
                    <TabsTrigger value="realtime">Real-time Data</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="daily">
                    <h3 className="text-xl font-semibold mb-4">Daily Predictions Endpoint</h3>
                    <p className="mb-4">Get Bitcoin price predictions for the next 24 hours.</p>
                    <pre className="bg-background p-4 rounded overflow-x-auto mb-6">
                      <code>
{`GET https://api.bitpredict.com/v1/predictions/daily

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
                  </TabsContent>
                  
                  <TabsContent value="hourly">
                    <h3 className="text-xl font-semibold mb-4">Hourly Predictions Endpoint</h3>
                    <p className="mb-4">Get Bitcoin price predictions for the next hour.</p>
                    <pre className="bg-background p-4 rounded overflow-x-auto mb-6">
                      <code>
{`GET https://api.bitpredict.com/v1/predictions/hourly

Response:
{
  "predictions": [
    {
      "timestamp": "2023-06-15T01:00:00Z",
      "price": 39820.18,
      "confidence": 0.82,
      "trend": "bullish"
    },
    {
      "timestamp": "2023-06-15T02:00:00Z",
      "price": 39867.32,
      "confidence": 0.78,
      "trend": "bullish"
    }
  ]
}`}
                      </code>
                    </pre>
                  </TabsContent>
                  
                  <TabsContent value="realtime">
                    <h3 className="text-xl font-semibold mb-4">Real-time Data Endpoint</h3>
                    <p className="mb-4">Connect to our WebSocket to get real-time predictions as market conditions change.</p>
                    <pre className="bg-background p-4 rounded overflow-x-auto mb-6">
                      <code>
{`WebSocket: wss://api.bitpredict.com/v1/predictions/realtime
Authorization Header: Bearer YOUR_API_KEY

Example Message:
{
  "event": "prediction_update",
  "data": {
    "timestamp": "2023-06-15T12:34:56Z",
    "price": 39912.67,
    "confidence": 0.91,
    "trend": "bullish"
  }
}`}
                      </code>
                    </pre>
                  </TabsContent>
                </Tabs>
              </section>
              
              <Separator className="my-10" />
              
              <section id="examples" className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Examples</h2>
                
                <h3 className="text-xl font-semibold mb-4">JavaScript Example</h3>
                <pre className="bg-background p-4 rounded overflow-x-auto mb-6">
                  <code>
{`// Fetch daily prediction
async function fetchDailyPrediction() {
  const response = await fetch('https://api.bitpredict.com/v1/predictions/daily', {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  });
  
  const data = await response.json();
  console.log(data.prediction);
  
  // Use the prediction data
  if (data.prediction.trend === 'bullish') {
    console.log('Consider buying Bitcoin');
  } else {
    console.log('Consider selling Bitcoin');
  }
}`}
                  </code>
                </pre>
                
                <h3 className="text-xl font-semibold mb-4">Python Example</h3>
                <pre className="bg-background p-4 rounded overflow-x-auto mb-6">
                  <code>
{`import requests

def get_daily_prediction():
    url = "https://api.bitpredict.com/v1/predictions/daily"
    headers = {
        "Authorization": "Bearer YOUR_API_KEY"
    }
    
    response = requests.get(url, headers=headers)
    data = response.json()
    
    prediction = data["prediction"]
    print(f"Bitcoin price prediction: ${prediction['price']}")
    print(f"Confidence: {prediction['confidence']}")
    print(f"Trend: {prediction['trend']}")
    
    return prediction

# Call the function
prediction = get_daily_prediction()`}
                  </code>
                </pre>
              </section>
              
              <Separator className="my-10" />
              
              <section id="faq">
                <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">How accurate are the predictions?</h3>
                    <p>Our model has achieved 82% accuracy over the past year when predicting daily price trends.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">What machine learning techniques do you use?</h3>
                    <p>We use a combination of recurrent neural networks (RNN), transformer models, and ensemble methods to generate our predictions.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Can I use the API for automated trading?</h3>
                    <p>Yes, many of our customers integrate our API with their trading platforms. However, we recommend thoroughly testing any automated trading strategy.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">What if I exceed my rate limit?</h3>
                    <p>Requests that exceed your rate limit will receive a 429 Too Many Requests response. You can upgrade your plan for higher limits.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Docs;
