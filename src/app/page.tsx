import Link from 'next/link';



export default function Home() {



  return (
    <div className="container mx-auto px-4 py-12 text-center">
       <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-blue-800">
          This is an assessment submitted by <span className="font-semibold">Balaji Kamalesan</span> for{' '}
          <span className="font-semibold">Bright Edge</span>
        </p>
      </div>
    <h1 className="text-4xl font-bold mb-6">Website Performance Analyzer</h1>
    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      Analyze any website's performance using real-world Chrome UX Report data
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
      <Link 
        href="/search" 
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg font-medium"
      >
        Start Analyzing
      </Link>
      <Link 
        href="/documentation" 
        className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 text-lg font-medium"
      >
        Documentation
      </Link>
    </div>

    <div className="max-w-4xl mx-auto bg-gray-50 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg">
          <h3 className="text-xl font-medium mb-2">1. Search</h3>
          <p className="text-gray-600 mb-3">
            Enter any website URL in our search page to analyze its performance.
          </p>
          <Link 
            href="/search" 
            className="text-blue-600 hover:underline"
          >
            Try the search page →
          </Link>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="text-xl font-medium mb-2">2. View Results</h3>
          <p className="text-gray-600 mb-3">
            See detailed performance metrics including Core Web Vitals scores.
          </p>
          <Link 
            href="/results?url=https://en.wikipedia.org" 
            className="text-blue-600 hover:underline"
          >
            Example: Wikipedia results →
          </Link>
        </div>
      </div>
    </div>
  </div>
);
}
