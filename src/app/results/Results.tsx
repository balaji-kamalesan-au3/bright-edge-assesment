'use client';

import React from 'react';

export default function Results({ performanceData }) {
  // Destructure the response data for easy access
  const { record, urlNormalizationDetails } = performanceData;
  const metrics = record?.metrics || {};
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Performance Data for {urlNormalizationDetails?.normalizedUrl}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Metrics display */}
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="font-semibold text-lg">{key.replace(/_/g, ' ')}</h2>
            <pre className="text-sm text-gray-600 mt-2">{JSON.stringify(value, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
