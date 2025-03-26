
import React from 'react';

const DocsExamples = () => {
  return (
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
  );
};

export default DocsExamples;
