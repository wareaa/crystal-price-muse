
import React from 'react';
import HistoricalPredictions from '@/components/HistoricalPredictions';

const DocsHistoricalData = () => {
  return (
    <section id="historical-data" className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Historical Prediction Performance</h2>
      <p className="mb-6">
        Our machine learning models have been making Bitcoin price predictions for over 5 years. 
        Below you can see our historical prediction accuracy and performance over time.
      </p>
      
      <HistoricalPredictions />
    </section>
  );
};

export default DocsHistoricalData;
