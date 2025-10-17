import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'georgia-dph',
      title: 'Georgia Department of Public Health',
      subtitle: 'Workday Implementation',
      category: 'Technology Transformation',
      duration: '18 months',
      teamSize: '2,000+ employees',
      challenge: 'The Georgia Department of Public Health needed to modernize their HR and financial systems while maintaining critical public health services during a global pandemic.',
      solution: 'We guided the organization through a comprehensive Workday implementation, focusing on change management, user adoption, and operational continuity.',
      results: [
        'Successfully implemented Workday across 2,000+ employees',
        'Achieved 95% user adoption within 6 months',
        'Reduced HR processing time by 40%',
        'Improved financial reporting accuracy by 60%',
        'Zero disruption to critical public health services'
      ],
      testimonial: {
        quote: 'Bright Torch made what seemed impossible possible. Their structured approach and deep understanding of change management helped us navigate this complex transformation while continuing to serve our communities.',
        author: 'Dr. Kathleen Toomey',
        title: 'Commissioner, Georgia Department of Public Health'
      },
      image: '/images/stephen-ellis-17I0RhymL9M-unsplash.jpg',
      featured: true
    },
    {
      id: 'financial-services',
      title: 'Regional Financial Services Firm',
      subtitle: 'Digital Transformation',
      category: 'Digital Transformation',
      duration: '12 months',
      teamSize: '500 employees',
      challenge: 'A regional financial services firm needed to modernize their operations and improve customer experience while maintaining regulatory compliance.',
      solution: 'We implemented a comprehensive digital transformation strategy focusing on process optimization, technology integration, and cultural change.',
      results: [
        'Streamlined customer onboarding process by 50%',
        'Improved operational efficiency by 35%',
        'Enhanced customer satisfaction scores by 25%',
        'Reduced compliance risk through automated processes',
        'Successfully migrated to cloud-based systems'
      ],
      testimonial: {
        quote: 'The transformation exceeded our expectations. Bright Torch\'s expertise in both technology and change management was invaluable.',
        author: 'Sarah Johnson',
        title: 'Chief Operating Officer'
      },
      image: '/images/drew-beamer-GiBRCzuZ5gw-unsplash.jpg',
      featured: false
    },
    {
      id: 'manufacturing',
      title: 'Mid-Size Manufacturing Company',
      subtitle: 'Operational Excellence',
      category: 'Operations',
      duration: '9 months',
      teamSize: '300 employees',
      challenge: 'A manufacturing company needed to improve operational efficiency and reduce waste while maintaining quality standards.',
      solution: 'We implemented Lean Six Sigma methodologies and operational excellence programs across all manufacturing facilities.',
      results: [
        'Reduced waste by 30% across all facilities',
        'Improved production efficiency by 25%',
        'Enhanced quality metrics by 20%',
        'Reduced operational costs by $2M annually',
        'Improved employee engagement scores by 40%'
      ],
      testimonial: {
        quote: 'Bright Torch helped us transform our operations and culture. The results speak for themselves.',
        author: 'Mike Rodriguez',
        title: 'Plant Manager'
      },
      image: '/images/backgroundV1.jpg',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-blue to-malibu-blue text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-merriweather mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Real transformations, real results. See how we've helped organizations 
                turn strategy into sustainable success.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Case Study</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A comprehensive look at how we guided a major public health organization 
                through a complex technology transformation.
              </p>
            </div>

            {caseStudies.filter(cs => cs.featured).map((caseStudy) => (
              <div key={caseStudy.id} className="card mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="mb-6">
                      <span className="inline-block bg-knoxville-orange text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {caseStudy.category}
                      </span>
                      <h3 className="text-3xl font-bold text-slate-blue mb-2">
                        {caseStudy.title}
                      </h3>
                      <p className="text-xl text-gray-600 mb-4">
                        {caseStudy.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span><strong>Duration:</strong> {caseStudy.duration}</span>
                        <span><strong>Team Size:</strong> {caseStudy.teamSize}</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-blue mb-2">The Challenge</h4>
                        <p className="text-gray-700">{caseStudy.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-slate-blue mb-2">Our Solution</h4>
                        <p className="text-gray-700">{caseStudy.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-slate-blue mb-2">Results Achieved</h4>
                        <ul className="space-y-2">
                          {caseStudy.results.map((result, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-knoxville-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="relative">
                      <Image
                        src={caseStudy.image}
                        alt={`${caseStudy.title} case study`}
                        width={500}
                        height={400}
                        className="rounded-lg shadow-lg"
                      />
                    </div>

                    <div className="bg-light-gray p-6 rounded-lg">
                      <blockquote className="text-lg italic text-gray-700 mb-4">
                        "{caseStudy.testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold text-slate-blue">{caseStudy.testimonial.author}</p>
                        <p className="text-gray-600">{caseStudy.testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Case Studies */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">More Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore additional case studies showcasing our diverse experience 
                across industries and transformation types.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.filter(cs => !cs.featured).map((caseStudy) => (
                <div key={caseStudy.id} className="card">
                  <div className="mb-4">
                    <span className="inline-block bg-malibu-blue text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {caseStudy.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-blue mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-3">
                      {caseStudy.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <span><strong>Duration:</strong> {caseStudy.duration}</span>
                      <span><strong>Team Size:</strong> {caseStudy.teamSize}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">
                    {caseStudy.challenge}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-blue mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.slice(0, 3).map((result, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-knoxville-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-light-gray p-4 rounded-lg mb-4">
                    <blockquote className="text-sm italic text-gray-700 mb-2">
                      "{caseStudy.testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-slate-blue text-sm">{caseStudy.testimonial.author}</p>
                      <p className="text-gray-600 text-sm">{caseStudy.testimonial.title}</p>
                    </div>
                  </div>

                  <Link href="/contact" className="btn-primary w-full text-center">
                    Discuss Similar Project
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every successful transformation follows a proven methodology that ensures 
                clear, intentional, and sustainable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Discovery</h3>
                <p className="text-gray-600">
                  We begin with a comprehensive assessment of your current state, challenges, and opportunities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Design</h3>
                <p className="text-gray-600">
                  Together, we develop a clear roadmap with specific milestones and success metrics.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Deploy</h3>
                <p className="text-gray-600">
                  We guide implementation with hands-on support, ensuring smooth execution and adoption.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Deliver</h3>
                <p className="text-gray-600">
                  We help embed changes into your culture and operations for long-term success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-slate-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your organization achieve similar 
              transformation results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Start Your Transformation
              </Link>
              <Link href="/services" className="btn-primary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
