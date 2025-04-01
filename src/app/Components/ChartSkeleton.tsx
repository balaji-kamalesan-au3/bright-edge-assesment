// components/ChartSkeleton.js
export default function ChartSkeleton() {
    return (
      <div className="bg-white p-4 rounded-lg shadow h-[420px]">
        <div className="h-6 w-3/4 mb-4 bg-gray-200 rounded animate-pulse mx-auto"></div>
        <div className="h-64 bg-gray-100 rounded animate-pulse"></div>
        <div className="mt-4 h-4 w-1/2 bg-gray-200 rounded animate-pulse mx-auto"></div>
      </div>
    );
  }