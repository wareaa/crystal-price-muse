
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DocsApiReference = () => {
  return (
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
  );
};

export default DocsApiReference;
