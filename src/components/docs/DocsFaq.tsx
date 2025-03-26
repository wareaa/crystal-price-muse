
import React from 'react';

const DocsFaq = () => {
  return (
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
  );
};

export default DocsFaq;
