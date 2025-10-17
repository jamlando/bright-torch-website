import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-slate-blue hover:text-knoxville-orange transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-slate-blue hover:text-knoxville-orange transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-slate-blue hover:text-knoxville-orange transition-colors duration-200 font-medium"
            >
              Services
            </Link>
            <Link 
              href="/case-studies" 
              className="text-slate-blue hover:text-knoxville-orange transition-colors duration-200 font-medium"
            >
              Case Studies
            </Link>
            <Link 
              href="/insights" 
              className="text-slate-blue hover:text-knoxville-orange transition-colors duration-200 font-medium"
            >
              Insights
            </Link>
            <Link 
              href="/contact" 
              className="text-slate-blue hover:text-knoxville-orange transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="btn-primary inline-block"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-slate-blue hover:text-knoxville-orange focus:outline-none focus:text-knoxville-orange"
              aria-label="Open main menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
