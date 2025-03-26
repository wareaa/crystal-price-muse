
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DocsExamples = () => {
  return (
    <div id="examples" className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Code Examples</h2>
      <p className="mb-6">
        Here are examples of how to use our API and SDK to get Bitcoin price predictions
        in various programming languages.
      </p>
      
      <Tabs defaultValue="python" className="w-full mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="python">Python</TabsTrigger>
          <TabsTrigger value="javascript">JavaScript</TabsTrigger>
          <TabsTrigger value="php">PHP</TabsTrigger>
        </TabsList>
        
        <TabsContent value="python" className="p-4 rounded-lg bg-secondary/30 border border-border">
          <pre className="text-sm overflow-x-auto p-2">
            <code>{`import requests

# Set up the API request
api_key = "YOUR_API_KEY"
url = "https://api.bitpredict.io/v1/predictions"

# Request parameters
params = {
    "timeframe": "1W",  # 1D, 1W, 1M, 3M, 1Y
    "confidence": True  # Include model confidence score
}

# Add authorization header
headers = {
    "Authorization": f"Bearer {api_key}"
}

# Make the request
response = requests.get(url, params=params, headers=headers)
data = response.json()

# Process the response
predicted_price = data["prediction"]
confidence = data["confidence"]

print(f"Predicted BTC price: ${predicted_price:,.2f}")
print(f"Model confidence: {confidence}%")
`}</code>
          </pre>
        </TabsContent>
        
        <TabsContent value="javascript" className="p-4 rounded-lg bg-secondary/30 border border-border">
          <pre className="text-sm overflow-x-auto p-2">
            <code>{`// Using fetch API
const fetchPrediction = async () => {
  const API_KEY = 'YOUR_API_KEY';
  const url = 'https://api.bitpredict.io/v1/predictions';
  
  // Request parameters
  const params = new URLSearchParams({
    timeframe: '1W',  // 1D, 1W, 1M, 3M, 1Y
    confidence: 'true'  // Include model confidence score
  });
  
  try {
    const response = await fetch(\`\${url}?\${params.toString()}\`, {
      method: 'GET',
      headers: {
        'Authorization': \`Bearer \${API_KEY}\`
      }
    });
    
    const data = await response.json();
    
    const predictedPrice = data.prediction;
    const confidence = data.confidence;
    
    console.log(\`Predicted BTC price: $\${predictedPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\`);
    console.log(\`Model confidence: \${confidence}%\`);
    
    return data;
  } catch (error) {
    console.error('Error fetching prediction:', error);
  }
};

// Call the function
fetchPrediction();
`}</code>
          </pre>
        </TabsContent>
        
        <TabsContent value="php" className="p-4 rounded-lg bg-secondary/30 border border-border">
          <pre className="text-sm overflow-x-auto p-2">
            <code>{`<?php
// Set up the API request
$api_key = "YOUR_API_KEY";
$url = "https://api.bitpredict.io/v1/predictions";

// Request parameters
$params = array(
    "timeframe" => "1W",  // 1D, 1W, 1M, 3M, 1Y
    "confidence" => "true"  // Include model confidence score
);

// Setup cURL
$curl = curl_init();

// Add authorization header
$headers = array(
    "Authorization: Bearer " . $api_key
);

// Set cURL options
curl_setopt_array($curl, array(
    CURLOPT_URL => $url . "?" . http_build_query($params),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => $headers
));

// Make the request
$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo "cURL Error: " . $err;
} else {
    $data = json_decode($response, true);
    
    $predicted_price = $data["prediction"];
    $confidence = $data["confidence"];
    
    echo "Predicted BTC price: $" . number_format($predicted_price, 2) . "\\n";
    echo "Model confidence: " . $confidence . "%\\n";
}
?>`}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocsExamples;
