import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Image
              src="/images/brightTorchLogoV1.png"
              alt="Bright Torch Consulting"
              width={200}
              height={101}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Helping organizations turn strategy into results through people, process, and purpose. 
              Making change clear, intentional, and sustainable.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://linkedin.com/in/nicholas-hymer" 
                className="text-gray-300 hover:text-knoxville-orange transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-knoxville-orange transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-knoxville-orange transition-colors duration-200">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Nicholas Hymer</p>
              <p>Founder & Principal</p>
              <p>
                <Link 
                  href="/contact" 
                  className="hover:text-knoxville-orange transition-colors duration-200"
                >
                  Get in Touch
                </Link>
              </p>
            </div>
            <div className="mt-6">
              <Link 
                href="/contact" 
                className="btn-primary inline-block"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Bright Torch Consulting. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-2 md:mt-0">
              Website by <Link href="https://whalesharksolutions.com" className="hover:text-knoxville-orange transition-colors duration-200" target="_blank" rel="noopener noreferrer">Whale Shark Solutions</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}



