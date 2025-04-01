// app/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        <h1 className="text-xl font-semibold mb-4 md:mb-0">CrUX Dashboard</h1>
        
        <div className="flex space-x-6">
          <Link 
            href="/" 
            className="hover:text-blue-200 transition-colors"
            aria-label="Home"
          >
            Home
          </Link>
          <Link 
            href="/search" 
            className="hover:text-blue-200 transition-colors"
            aria-label="Search"
          >
            Search
          </Link>
          <Link 
            href="/documentation" 
            className="hover:text-blue-200 transition-colors"
            aria-label="Documentation"
          >
            Documentation
          </Link>
        </div>
      </div>
    </nav>
  );
}