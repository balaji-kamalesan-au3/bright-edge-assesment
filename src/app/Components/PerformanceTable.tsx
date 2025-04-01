// components/PerformanceTable.js
'use client';

import { useState } from 'react';

export default function PerformanceTable({ metrics }) {
  const [expandedMetric, setExpandedMetric] = useState(null);

  return (
    <div className="overflow-x-auto border rounded-lg shadow-md p-4 bg-white">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Metric</th>
            <th className="p-3 text-left">75th Percentile</th>
            <th className="p-3 text-left">Histogram</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(metrics).map(([metric, data]) => (
            <tr key={metric} className="border-b">
              <td className="p-3 font-medium">{metric}</td>
              <td className="p-3">{data.percentiles?.p75 || 'N/A'}</td>
              <td className="p-3">
                <button
                  className="text-blue-500 underline"
                  onClick={() => setExpandedMetric(expandedMetric === metric ? null : metric)}
                >
                  {expandedMetric === metric ? 'Hide' : 'Show'} Details
                </button>
                {expandedMetric === metric && (
                  <div className="mt-2 p-2 bg-gray-50 rounded">
                    {data.histogram.map((entry, index) => (
                      <div key={index} className="text-sm text-gray-700">
                        {entry.start} - {entry.end || '∞'}: {entry.density}
                      </div>
                    ))}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}