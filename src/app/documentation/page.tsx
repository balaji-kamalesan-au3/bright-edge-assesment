import Image from 'next/image';

export default function DocumentationPage() {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Documentation</h1>
        
        <div className="prose prose-lg prose-blue">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">App Overview</h2>
            <p>
              This application helps you analyze website performance using Google's Chrome UX Report (CrUX) data.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
            <div className="flex space-x-4 items-center">
              <Image src="/nextjs.png" alt="Next.js" width={75} height={75} />
              <Image src="/Vercel-logo.jpg" alt="Vercel" width={75} height={75} />
            </div>
            <p>
              The app is built using Next.js 15 for performance optimization and is deployed on Vercel.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">1. Search Page</h3>
                <p>Enter any website URL to view its performance metrics.</p>
                <a 
                  href="/search" 
                  className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Go to Search Page
                </a>
              </div>
  
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">2. Results Page</h3>
                <p>View detailed performance metrics for any analyzed website.</p>
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
            <h2 className="text-2xl font-semibold mb-4">Streaming Feature</h2>
            <p>
              The results page uses Next.js 15's streaming capabilities to show a loading skeleton for the chart 
              while fetching data. This enhances the user experience by displaying partial content instantly instead 
              of waiting for the entire response.
            </p>
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
  
          <section>
            <h2 className="text-2xl font-semibold mb-4">Acknowledgments</h2>
            <div className="flex space-x-4 items-center">
              <Image src="/chatgpt.png" alt="ChatGPT" width={75} height={75} />
              <Image src="/deepseek.png" alt="DeepSeek" width={75} height={75} />
            </div>
            <p>
              Some parts of the project, such as debugging and simple code generation, were assisted by ChatGPT and DeepSeek. 
              However, these tools were only used for minor optimizations and not for the entire implementation.
            </p>
          </section>
        </div>
      </div>
    );
}
