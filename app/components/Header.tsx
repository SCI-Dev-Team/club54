'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold text-red uppercase tracking-wider">
              CLUB54
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/office-leasing" className="text-black hover:text-red transition-colors font-medium">
              Office Leasing
            </Link>
            <Link href="/coworking" className="text-black hover:text-red transition-colors font-medium">
              Coworking
            </Link>
            <Link href="/events" className="text-black hover:text-red transition-colors font-medium">
              Event Hosting
            </Link>
            <Link href="/community" className="text-black hover:text-red transition-colors font-medium">
              Community
            </Link>
            <Link href="/contact" className="bg-red text-white px-6 py-2.5 rounded-lg hover:bg-plum transition-colors font-medium">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-biscuit transition-colors"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-biscuit">
            <div className="flex flex-col space-y-4">
              <Link
                href="/office-leasing"
                className="text-black hover:text-red transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Office Leasing
              </Link>
              <Link
                href="/coworking"
                className="text-black hover:text-red transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Coworking
              </Link>
              <Link
                href="/events"
                className="text-black hover:text-red transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Event Hosting
              </Link>
              <Link
                href="/community"
                className="text-black hover:text-red transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                href="/contact"
                className="bg-red text-white px-6 py-2.5 rounded-lg hover:bg-plum transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
