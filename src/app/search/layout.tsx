// app/search/layout.js

export default function SearchLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-6 bg-gray-50">
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-center">Search URL Performance</h2>
          {children}
        </div>
      </main>
    </div>
  );
}
