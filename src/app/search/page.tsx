'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // To navigate to Search Results page

export default function SearchPage() {
  const [url, setUrl] = useState('');
  const router = useRouter();

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to the search results page and pass the URL as a query parameter
    router.push(`/results?url=${encodeURIComponent(url)}`);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white ">
    
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-lg font-medium">Enter URL</label>
          <input
            type="url"
            id="url"
            name="url"
            value={url}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="https://example.com"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </div>
  );
}
