// components/ErrorComponent.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ErrorComponent({ message }) {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();  // Use useRouter to programmatically navigate

  // Optional: you can hide the error message if needed
  const closeError = () => {
    setIsVisible(false);  // Hide error
    router.push('/search');  // Redirect to the search page
  };

  if (!isVisible) return null;

  return (
    <div className="bg-red-100 text-red-700 p-4 rounded-md shadow-md">
      <h3 className="font-semibold text-lg">Error</h3>
      <p>{message}</p>
      <button
        className="text-sm text-blue-500 mt-2"
        onClick={closeError}
      >
        Close
      </button>
    </div>
  );
}
