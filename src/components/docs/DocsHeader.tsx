
import React from 'react';

const DocsHeader = () => {
  return (
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
  );
};

export default DocsHeader;
