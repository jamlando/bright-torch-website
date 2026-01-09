'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = [
    {
      id: 'change',
      title: 'Change Management',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      shortDescription: 'Structured approaches to transformation that minimize disruption and maximize adoption.',
      fullDescription: 'Change management is at the heart of successful organizational transformation. We provide structured, evidence-based approaches that help organizations navigate change while minimizing disruption and maximizing adoption across all levels.',
      benefits: [
        'Reduced resistance to change through structured communication',
        'Faster adoption rates and improved change sustainability',
        'Minimized productivity loss during transition periods',
        'Enhanced employee engagement and morale',
        'Proven methodologies based on industry best practices'
      ],
      deliverables: [
        'Change management strategy and communication plan',
        'Training and development programs',
        'Resistance management and mitigation strategies',
        'Change readiness assessment and action plan',
        'Post-implementation support and reinforcement'
      ]
    },
    {
      id: 'operations',
      title: 'Operations',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      shortDescription: 'Streamlined processes and systems that drive efficiency and sustainable results.',
      fullDescription: 'Operational excellence is the foundation of sustainable transformation. We help organizations optimize their processes, systems, and workflows to drive efficiency, reduce waste, and create sustainable operational improvements that support long-term success.',
      benefits: [
        'Improved operational efficiency and reduced waste',
        'Standardized processes and best practice implementation',
        'Enhanced system integration and workflow optimization',
        'Increased productivity and cost savings',
        'Sustainable operational improvements that last'
      ],
      deliverables: [
        'Process mapping and optimization recommendations',
        'System integration and workflow design',
        'Standard operating procedures and documentation',
        'Performance monitoring and improvement systems',
        'Training programs for operational excellence'
      ]
    },
    {
      id: 'strategy',
      title: 'Strategy',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      shortDescription: 'Clear direction and actionable plans that align with your organization\'s vision.',
      fullDescription: 'Our strategy services help organizations develop clear, actionable plans that bridge the gap between vision and execution. We work with leadership teams to create comprehensive roadmaps that align people, processes, and purpose with strategic objectives.',
      benefits: [
        'Comprehensive strategic planning and roadmap development',
        'Alignment of organizational vision with operational capabilities',
        'Stakeholder engagement and buy-in strategies',
        'Risk assessment and mitigation planning',
        'Performance metrics and success measurement frameworks'
      ],
      deliverables: [
        'Strategic roadmap with clear milestones',
        'Stakeholder analysis and engagement plan',
        'Risk assessment and mitigation strategies',
        'Performance measurement framework',
        'Implementation timeline and resource requirements'
      ]
    },
    {
      id: 'leadership',
      title: 'Leadership Development',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      shortDescription: 'Empowering leaders to guide their teams through transformation with confidence.',
      fullDescription: 'Leadership is the catalyst that makes transformation possible. We develop leaders at all levels to guide their teams through change with confidence, clarity, and purpose. Our leadership development programs focus on both individual growth and team effectiveness.',
      benefits: [
        'Enhanced leadership capabilities and confidence',
        'Improved team performance and engagement',
        'Better change communication and influence skills',
        'Increased leadership resilience and adaptability',
        'Stronger organizational culture and alignment'
      ],
      deliverables: [
        'Leadership assessment and development plan',
        'Customized leadership training programs',
        'Coaching and mentoring support',
        'Team building and collaboration workshops',
        'Leadership succession planning and development'
      ]
    }
  ];

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-blue to-malibu-blue text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-merriweather mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Comprehensive support across four key areas to ensure your transformation succeeds.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Help</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our integrated approach combines strategy, change management, operations, and leadership 
                development to create sustainable organizational transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.id} className="card">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-semibold mb-3 text-slate-blue">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.shortDescription}
                      </p>
                      <button
                        onClick={() => toggleService(service.id)}
                        className="text-malibu-blue hover:text-knoxville-orange font-medium transition-colors"
                      >
                        {expandedService === service.id ? 'Show Less' : 'Learn More'} →
                      </button>
                    </div>
                  </div>
                  
                  {/* Expanded Content */}
                  {expandedService === service.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-gray-700 mb-6">
                        {service.fullDescription}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate-blue mb-3">What You'll Get</h4>
                          <ul className="space-y-2">
                            {service.deliverables.map((deliverable, index) => (
                              <li key={index} className="flex items-start">
                                <div className="w-2 h-2 bg-malibu-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-blue mb-3">Key Benefits</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                <div className="w-2 h-2 bg-knoxville-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Link href="/contact" className="btn-primary">
                          Discuss {service.title} Services
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A structured approach that ensures your transformation is clear, intentional, and sustainable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Assess</h3>
                <p className="text-gray-600">
                  We begin with a comprehensive assessment of your current state, challenges, and opportunities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Plan</h3>
                <p className="text-gray-600">
                  Together, we develop a clear roadmap with specific milestones and success metrics.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Execute</h3>
                <p className="text-gray-600">
                  We guide implementation with hands-on support, ensuring smooth execution and adoption.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustain</h3>
                <p className="text-gray-600">
                  We help embed changes into your culture and operations for long-term success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Preview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Proven Results</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our integrated approach has helped organizations across various industries achieve 
                  successful transformations. From large-scale technology implementations to cultural 
                  shifts, we've guided leaders through complex change initiatives.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  <strong>Featured Case Study:</strong> Georgia Department of Public Health - 
                  Workday Implementation. Successfully guided a 2,000+ employee organization through 
                  a comprehensive HR and financial system transformation.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/bridgeView.jpg"
                  alt="Professional workspace representing successful transformation results"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-slate-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive approach can help you turn strategy 
              into sustainable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Book a Consultation
              </Link>
              <Link href="/about" className="btn-primary">
                Learn About Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
