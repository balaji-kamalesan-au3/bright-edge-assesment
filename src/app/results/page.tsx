import { Suspense } from 'react';
import ErrorComponent from '../Components/ErrorComponent';
import ResultsContainer from '../Components/ResultsContainer';
import { fetchCruxData } from '@/lib/fetchPerformanceData';
import ChartSkeleton from '../Components/ChartSkeleton';

// Fetch data server-side before passing to the client component
export default async function ResultsPage({ searchParams }) {
  const url = searchParams?.url;

  if (!url) {
    return <ErrorComponent message="Please provide a URL parameter (?url=...)" />;
  }

  try {
    // Fetching performance data on the server side
    const data = await fetchCruxData(url);

    // If no metrics are found, show error
    if (!data?.record?.metrics) {
      return <ErrorComponent message="No performance data available for this URL" />;
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Performance Results</h1>
        <p className="mb-4 text-gray-600">Showing results for: {url}</p>

        {/* Use streaming to load results only when available */}
        <Suspense fallback={<ChartSkeleton />}>
          <ResultsContainer url={url} data={data} />
        </Suspense>
      </div>
    );
  } catch (error) {
    return <ErrorComponent message={error.message || "Failed to load performance data"} />;
  }
}
