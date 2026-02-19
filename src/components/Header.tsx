'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Navigation component - Case Studies and Insights hidden per client request
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/brightTorchLogoV1.png"
                alt="Bright Torch Consulting"
                width={200}
                height={101}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link 
              href="/" 
              className="text-slate-blue hover:text-knoxville-orange transition-colors duration-200 font-medium py-2"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-slate-blue hover:text-knoxville-orange transition-colors duration-200 font-medium py-2"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-slate-blue hover:text-knoxville-orange transition-colors duration-200 font-medium py-2"
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="text-slate-blue hover:text-knoxville-orange transition-colors duration-200 font-medium py-2"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block ml-8">
            <Link 
              href="/contact" 
              className="btn-primary inline-block"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile menu button - large touch target for accessibility */}
          <div className="md:hidden flex items-center justify-end">
            <button 
              type="button" 
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="p-3 -mr-2 text-slate-blue hover:text-knoxville-orange focus:outline-none focus:ring-2 focus:ring-knoxville-orange focus:ring-offset-2 rounded-lg touch-manipulation"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={mobileMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
          role="dialog"
          aria-label="Main navigation"
        >
          <nav className="px-4 py-4 space-y-1">
            <Link 
              href="/" 
              className="block py-3 px-3 text-slate-blue hover:text-knoxville-orange hover:bg-gray-50 rounded-lg font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block py-3 px-3 text-slate-blue hover:text-knoxville-orange hover:bg-gray-50 rounded-lg font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="block py-3 px-3 text-slate-blue hover:text-knoxville-orange hover:bg-gray-50 rounded-lg font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="block py-3 px-3 text-slate-blue hover:text-knoxville-orange hover:bg-gray-50 rounded-lg font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="block py-3 px-3 mt-2 btn-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}



