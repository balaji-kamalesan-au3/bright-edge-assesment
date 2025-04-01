import Image from 'next/image';

export default function DocumentationPage() {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Documentation</h1>
        
        <div className="prose prose-lg prose-blue">
          {/* App Overview Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">App Overview</h2>
            <p className="text-gray-700">
              This application helps you analyze website performance using Google's Chrome UX Report (CrUX) data. 
              It provides detailed metrics to evaluate the loading experience, user interactions, and overall performance of any given URL.
            </p>
          </section>
  
          {/* Technology Stack Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Technology Stack</h2>
            <div className="flex space-x-4 items-center">
              <Image src="/nextjs.png" alt="Next.js" width={75} height={75} />
              <Image src="/Vercel-logo.jpg" alt="Vercel" width={75} height={75} />
            </div>
            <p className="text-gray-700">
              The app is built using Next.js 15 for optimal performance and scalability. It’s deployed on Vercel to leverage edge computing for faster response times.
            </p>
          </section>
  
          {/* How to Use Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">How to Use</h2>
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-2 text-gray-800">1. Search Page</h3>
                <p className="text-gray-600">Enter a website URL to begin analyzing its performance metrics.</p>
                <a 
                  href="/search" 
                  className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Go to Search Page
                </a>
              </div>
  
              <div className="p-4 bg-gray-50 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-2 text-gray-800">2. Results Page</h3>
                <p className="text-gray-600">View detailed performance metrics for the website you searched.</p>
                <div className="mt-2 space-x-2">
                  <a 
                    href="/results?url=https://en.wikipedia.org" 
                    className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                  >
                    Example: Wikipedia Results
                  </a>
                  <a 
                    href="/search" 
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Search Another Site
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* How Search Page and Results Page Work */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">How Search Page and Results Page Work</h2>
            <p className="text-gray-700">
              The Search Page and Results Page are tightly integrated to provide a seamless user experience with real-time performance metrics.
            </p>
            <div className="space-y-4">
              {/* Search Page Explanation */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg text-gray-800">Step 1: Search Page (Server Component)</h3>
                <p className="text-gray-600">
                  The Search Page is a Server Component that handles the user input for URL search. A controlled input component (Client Component) is used for URL entry. Once the user enters a URL, the app uses the Next.js router to push the search parameters (URL) to the results page via a URL query.
                </p>
              </div>

              {/* Results Page Explanation */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg text-gray-800">Step 2: Results Page (Server Component)</h3>
                <p className="text-gray-600">
                  The Results Page is a Server Component that fetches performance data at the time of the request. While the data is being fetched, a skeleton loader is displayed to provide visual feedback. Once the data is successfully fetched, it is streamed to the client and the page is populated dynamically.
                </p>
                <p className="text-gray-600">
                  In case of errors such as API failures or invalid URLs, the error component is shown with a relevant error message.
                </p>
              </div>

              {/* Displaying Data */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg text-gray-800">Step 3: Displaying Data</h3>
                <p className="text-gray-600">
                  The performance data is displayed in both a table and chart format. Users can compare various performance metrics across different formats for an enriched understanding of the data.
                </p>
              </div>
            </div>
          </section>

          {/* Streaming Feature */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Streaming Feature</h2>
            <p className="text-gray-700">
              The app uses Next.js 15's streaming capabilities to enhance user experience by showing a loading skeleton while the data is being fetched. The skeleton gives the user partial content instantly, improving perceived performance and making the app feel faster.
            </p>
          </section>
  
          {/* Resources Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Resources</h2>
            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2 text-gray-800">GitHub Repository</h3>
              <p className="text-gray-600">Check out the source code or contribute to the project:</p>
              <a 
                href="https://github.com/balaji-kamalesan-au3/bright-edge-assesment" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors"
              >
                View on GitHub
              </a>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-md mt-4">
              <h3 className="text-xl font-medium mb-2 text-gray-800">Run the App Locally</h3>
              <p className="text-gray-600">To run the app on your local machine, follow these steps:</p>
              <ol className="list-decimal pl-6 text-gray-700">
                <li>Clone the repository: <code className="bg-gray-200 px-2 py-1 rounded-md">git clone https://github.com/yourusername/your-repo.git</code></li>
                <li>Navigate to the project directory: <code className="bg-gray-200 px-2 py-1 rounded-md">cd your-repo</code></li>
                <li>Install dependencies: <code className="bg-gray-200 px-2 py-1 rounded-md">npm install</code></li>
                <li>Start the development server: <code className="bg-gray-200 px-2 py-1 rounded-md">npm run dev</code></li>
              </ol>
              <p className="text-gray-600 mt-4">
                <strong>Note:</strong> Make sure to use the latest version of Node.js for the best performance and compatibility. You can download it from <a href="https://nodejs.org/" target="_blank" className="text-blue-600 hover:underline">here</a>.
              </p>
            </div>
          </section>
  
          {/* Acknowledgments Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Acknowledgments</h2>
            <div className="flex space-x-4 items-center">
              <Image src="/chatgpt.png" alt="ChatGPT" width={75} height={75} />
              <Image src="/deepseek.png" alt="DeepSeek" width={75} height={75} />
            </div>
            <p className="text-gray-700">
              Some parts of this project, such as debugging and code generation, were assisted by ChatGPT and DeepSeek. These tools helped with minor optimizations, but the core implementation was handled manually.
            </p>
          </section>
        </div>
      </div>
    );
}
