import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Nicholas Hymer Bio Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-blue">
                  Meet Nicholas Hymer
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-600 mb-6">
                    Nicholas Hymer is the founder and principal consultant of Bright Torch Consulting, 
                    bringing over 15 years of experience in organizational transformation, change management, 
                    and strategic execution across both public and private sectors.
                  </p>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    His philosophy centers on the belief that sustainable change happens when people, 
                    process, and purpose align. Nicholas has guided numerous organizations through 
                    complex transformations, from large-scale technology implementations to cultural 
                    shifts and operational restructurings.
                  </p>

                  <p className="text-lg text-gray-600 mb-6">
                    What sets Nicholas apart is his ability to translate high-level strategy into 
                    actionable, practical steps that teams can execute with confidence. He combines 
                    deep expertise in change management methodologies with a genuine understanding 
                    of the human side of transformation.
                  </p>
                </div>

                {/* Certifications */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-slate-blue">Certifications & Expertise</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-knoxville-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Certified Change Management Professional (CCMP)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-knoxville-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Project Management Professional (PMP)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-knoxville-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Lean Six Sigma Black Belt</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-knoxville-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Agile Certified Practitioner (PMI-ACP)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-knoxville-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Organizational Development Specialist</span>
                    </li>
                  </ul>
                </div>

                {/* Philosophy */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-slate-blue">Our Philosophy</h3>
                  <blockquote className="border-l-4 border-malibu-blue pl-6 italic text-lg text-gray-700">
                    "Change is inevitable, but transformation is intentional. Our role is to make 
                    that transformation clear, intentional, and sustainable by ensuring that every 
                    strategy has a clear path to execution."
                  </blockquote>
                  <p className="text-gray-600 mt-4">
                    — Nicholas Hymer, Founder
                  </p>
                </div>

              </div>

              <div className="space-y-6">
                <div className="relative">
                  <Image
                    src="/images/headshot.jpg"
                    alt="Nicholas Hymer, Founder of Bright Torch Consulting"
                    width={500}
                    height={600}
                    className="rounded-lg shadow-lg"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium">
                      Nicholas Hymer<br />
                      <span className="text-knoxville-orange">Founder & Principal Consultant</span>
                    </p>
                  </div>
                </div>
                
                {/* CTA to Services */}
                <div className="bg-light-gray p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-slate-blue">Ready to Transform Your Organization?</h3>
                  <p className="text-gray-600 mb-4">
                    Discover how our comprehensive approach to strategy, change, operations, and leadership 
                    can help your organization achieve sustainable transformation.
                  </p>
                  <Link href="/services" className="btn-primary">
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide every engagement and every transformation we facilitate.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Clarity</h3>
                <p className="text-gray-600">
                  We believe in making complex transformations clear and understandable for everyone involved.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Intentionality</h3>
                <p className="text-gray-600">
                  Every action we take is purposeful and aligned with your organization's strategic goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We design solutions that create lasting change, not just temporary improvements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-slate-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Illuminate What's Possible?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how Bright Torch Consulting can help your organization 
              turn strategy into sustainable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
              <Link href="/services" className="btn-primary">
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
