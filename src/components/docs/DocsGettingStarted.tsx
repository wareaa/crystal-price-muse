
import React from 'react';

const DocsGettingStarted = () => {
  return (
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
  );
};

export default DocsGettingStarted;
