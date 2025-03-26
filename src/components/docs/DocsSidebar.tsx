
import React from 'react';

const DocsSidebar = () => {
  return (
    <div className="md:col-span-1">
      <div className="sticky top-28">
        <h3 className="text-lg font-semibold mb-4">Contents</h3>
        <ul className="space-y-3">
          <li><a href="#getting-started" className="text-muted-foreground hover:text-foreground transition-colors">Getting Started</a></li>
          <li><a href="#api-reference" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</a></li>
          <li><a href="#historical-data" className="text-muted-foreground hover:text-foreground transition-colors">Historical Performance</a></li>
          <li><a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">Examples</a></li>
          <li><a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
        </ul>
      </div>
    </div>
  );
};

export default DocsSidebar;
