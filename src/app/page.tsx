import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/backgroundV1.jpg)' }}>
          <div className="absolute inset-0 bg-slate-blue bg-opacity-60"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Illuminate what&apos;s possible.
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Helping organizations turn strategy into results through people, process, and purpose.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/about" className="btn-secondary">
                  Learn More
                </Link>
                <Link href="/contact" className="btn-primary">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive support across four key areas to ensure your transformation succeeds.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Strategy */}
              <div className="card text-center">
                <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Strategy</h3>
                <p className="text-gray-600 mb-4">
                  Clear direction and actionable plans that align with your organization&apos;s vision.
                </p>
                <Link href="/services" className="text-malibu-blue hover:text-knoxville-orange font-medium">
                  Learn More →
                </Link>
              </div>

              {/* Change Management */}
              <div className="card text-center">
                <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Change</h3>
                <p className="text-gray-600 mb-4">
                  Structured approaches to transformation that minimize disruption and maximize adoption.
                </p>
                <Link href="/services" className="text-malibu-blue hover:text-knoxville-orange font-medium">
                  Learn More →
                </Link>
              </div>

              {/* Operations */}
              <div className="card text-center">
                <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Operations</h3>
                <p className="text-gray-600 mb-4">
                  Streamlined processes and systems that drive efficiency and sustainable results.
                </p>
                <Link href="/services" className="text-malibu-blue hover:text-knoxville-orange font-medium">
                  Learn More →
                </Link>
              </div>

              {/* Leadership */}
              <div className="card text-center">
                <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Leadership</h3>
                <p className="text-gray-600 mb-4">
                  Empowering leaders to guide their teams through transformation with confidence.
                </p>
                <Link href="/services" className="text-malibu-blue hover:text-knoxville-orange font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Bright Torch</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded by Nicholas Hymer, Bright Torch Consulting specializes in bridging the gap between 
                  strategy and execution during organizational transformations. We believe that sustainable 
                  change happens when people, process, and purpose align.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our approach combines deep expertise in change management with practical, results-driven 
                  methodologies that respect both the human and operational aspects of transformation.
                </p>
                <Link href="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="/images/nickImage.jpg"
                  alt="Nicholas Hymer, Founder of Bright Torch Consulting"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}