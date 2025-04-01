// app/documentation/page.js
export default function DocumentationPage() {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Documentation</h1>
        
        <div className="prose prose-lg prose-blue">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">App Overview</h2>
            <p>
              This application analyzes website performance using Google's Chrome UX Report (CrUX) data. Built with Next.js 15, it optimizes performance through server components, streaming, and SEO-friendly architecture.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">1. Search Page</h3>
                <p>Enter any website URL to fetch and analyze performance metrics.</p>
                <a 
                  href="/search" 
                  className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Go to Search Page
                </a>
              </div>
  
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">2. Results Page</h3>
                <p>
                  The results page leverages Next.js streaming to enhance user experience. While data loads, a skeleton chart is displayed, and the full chart appears once the data is ready. This improves perceived performance and keeps users engaged.
                </p>
                <div className="mt-2 space-x-2">
                  <a 
                    href="/results?url=https://en.wikipedia.org" 
                    className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Example: Wikipedia Results
                  </a>
                  <a 
                    href="/search" 
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Search Another Site
                  </a>
                </div>
              </div>
            </div>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-5">
              <li><strong>Next.js 15:</strong> Optimized for performance and SEO.</li>
              <li><strong>Streaming:</strong> Uses Next.js streaming to progressively load data.</li>
              <li><strong>Server Components:</strong> Enhances performance by reducing client-side JavaScript.</li>
              <li><strong>Client Components:</strong> Used selectively for interactive elements like search.</li>
              <li><strong>Deployed on Vercel:</strong> Ensures fast, global availability.</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Resources</h2>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-medium mb-2">GitHub Repository</h3>
              <p>View the source code and contribute to the project:</p>
              <a 
                href="https://github.com/yourusername/your-repo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
              >
                View on GitHub
              </a>
            </div>
          </section>
  
        </div>
      </div>
    );
  }
