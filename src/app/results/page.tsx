// app/results/page.js
import { Suspense } from 'react';
import ErrorComponent from '../Components/ErrorComponent';
import PerformanceChart from '../Components/PerformanceChat';
import ChartSkeleton from '../Components/ChartSkeleton';
import { fetchCruxData } from '@/lib/fetchPerformanceData';

async function ChartsContainer({ url }) {
  try {
    const data = await fetchCruxData(url);
    
    // Check if data exists and has metrics
    if (!data?.record?.metrics) {
      return <ErrorComponent message="No performance data available for this URL" />;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(data.record.metrics).map(([metric, metricData]) => (
          <PerformanceChart 
            key={metric}
            metric={metric}
            data={metricData}
          />
        ))}
      </div>
    );
  } catch (error) {
    // Handle specific 404 error differently
    if (error.message.includes('404')) {
      return <ErrorComponent message="No performance data found for this URL. Try a more popular website." />;
    }
    return <ErrorComponent message={error.message || "Failed to load performance data"} />;
  }
}

export default function ResultsPage({ searchParams }) {
  const url = searchParams.url;
  
  if (!url) {
    return <ErrorComponent message="Please provide a URL parameter (?url=...)" />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Performance Results</h1>
      <p className="mb-8 text-gray-600">Showing results for: {url}</p>
      
      <Suspense fallback={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChartSkeleton />
          <ChartSkeleton />
          <ChartSkeleton />
          <ChartSkeleton />
        </div>
      }>
        <ChartsContainer url={url} />
      </Suspense>
    </div>
  );
}