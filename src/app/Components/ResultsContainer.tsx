"use client";

import PerformanceChart from "./PerformanceChart";
import PerformanceTable from "./PerformanceTable";
import ErrorComponent from "./ErrorComponent";

export default function ResultsContainer({ url, data }) {
  if (!data?.record?.metrics) {
    return <ErrorComponent message="No performance data available for this URL" />;
  }

  return (
    <div>
      {/* Table at the top */}
      <div className="mb-6">
        <PerformanceTable metrics={data.record.metrics} />
      </div>

      {/* Chart below the table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(data.record.metrics).map(([metric, metricData]) => (
          <PerformanceChart key={metric} metric={metric} data={metricData} />
        ))}
      </div>
    </div>
  );
}
