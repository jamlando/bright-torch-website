'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Insights() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  const insights = [
    {
      id: 'change-management-trends',
      title: 'The Future of Change Management: 5 Trends Shaping Organizational Transformation',
      excerpt: 'Explore the emerging trends that are reshaping how organizations approach change management and transformation initiatives.',
      category: 'Change Management',
      readTime: '8 min read',
      date: 'December 2024',
      featured: true,
      image: '/images/bridgeView.jpg'
    },
    {
      id: 'leadership-resilience',
      title: 'Building Leadership Resilience in Times of Uncertainty',
      excerpt: 'How leaders can develop the resilience needed to guide their teams through complex transformations and challenging times.',
      category: 'Leadership',
      readTime: '6 min read',
      date: 'November 2024',
      featured: false,
      image: '/images/knoxvilleDt.jpg'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation Done Right: Lessons from Successful Implementations',
      excerpt: 'Key insights from organizations that have successfully navigated digital transformation challenges.',
      category: 'Technology',
      readTime: '10 min read',
      date: 'October 2024',
      featured: false,
      image: '/images/backgroundV1.jpg'
    },
    {
      id: 'operational-excellence',
      title: 'Operational Excellence: The Foundation of Sustainable Growth',
      excerpt: 'Why operational excellence is crucial for long-term success and how to build it into your organization\'s DNA.',
      category: 'Operations',
      readTime: '7 min read',
      date: 'September 2024',
      featured: false,
      image: '/images/nickImage.jpg'
    },
    {
      id: 'strategy-execution',
      title: 'Bridging the Strategy-Execution Gap: A Practical Framework',
      excerpt: 'A proven framework for ensuring your strategic initiatives translate into measurable business results.',
      category: 'Strategy',
      readTime: '9 min read',
      date: 'August 2024',
      featured: false,
      image: '/images/bridgeView.jpg'
    },
    {
      id: 'change-readiness',
      title: 'Assessing Change Readiness: A Comprehensive Guide',
      excerpt: 'How to evaluate your organization\'s readiness for change and develop strategies to increase adoption success.',
      category: 'Change Management',
      readTime: '5 min read',
      date: 'July 2024',
      featured: false,
      image: '/images/knoxvilleDt.jpg'
    }
  ];

  const featuredInsight = insights.find(insight => insight.featured);
  const otherInsights = insights.filter(insight => !insight.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-blue text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Insights & Thought Leadership
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Stay informed with the latest insights on organizational transformation, 
                change management, and leadership development.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Insight */}
        {featuredInsight && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Insight</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our latest thinking on organizational transformation and change management.
                </p>
              </div>

              <div className="card">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="mb-6">
                      <span className="inline-block bg-knoxville-orange text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {featuredInsight.category}
                      </span>
                      <h3 className="text-3xl font-bold text-slate-blue mb-4">
                        {featuredInsight.title}
                      </h3>
                      <p className="text-lg text-gray-700 mb-6">
                        {featuredInsight.excerpt}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{featuredInsight.readTime}</span>
                        <span>•</span>
                        <span>{featuredInsight.date}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-gray-600">
                        In this comprehensive analysis, we explore the five key trends that are reshaping 
                        how organizations approach change management and transformation initiatives. From 
                        AI-driven change analytics to hybrid work models, these trends are creating new 
                        opportunities and challenges for leaders.
                      </p>
                      <p className="text-gray-600">
                        Drawing from our experience with clients across various industries, we provide 
                        practical insights and actionable strategies for navigating these emerging trends 
                        successfully.
                      </p>
                    </div>

                    <div className="mt-8">
                      <Link href="/contact" className="btn-primary">
                        Read Full Article
                      </Link>
                    </div>
                  </div>

                  <div className="relative">
                    <Image
                      src={featuredInsight.image}
                      alt={featuredInsight.title}
                      width={500}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-slate-blue bg-opacity-20 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Insights Grid */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">More Insights</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our collection of articles, case studies, and thought leadership 
                content on organizational transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherInsights.map((insight) => (
                <div key={insight.id} className="card">
                  <div className="relative mb-4">
                    <Image
                      src={insight.image}
                      alt={insight.title}
                      width={400}
                      height={250}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-white text-slate-blue px-3 py-1 rounded-full text-sm font-medium">
                        {insight.category}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-blue mb-3">
                      {insight.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{insight.readTime}</span>
                      <span>•</span>
                      <span>{insight.date}</span>
                    </div>
                  </div>

                  <Link href="/contact" className="text-malibu-blue hover:text-knoxville-orange font-medium">
                    Read More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Get the latest insights on organizational transformation delivered 
                directly to your inbox. Join our community of change leaders.
              </p>

              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-blue focus:border-transparent"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-primary whitespace-nowrap"
                    >
                      {isLoading ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              ) : (
                <div className="max-w-md mx-auto">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700">
                      You've successfully subscribed to our insights newsletter. 
                      You'll receive our latest articles and updates.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert Insights</h3>
                  <p className="text-gray-600">
                    Thought leadership from experienced transformation consultants.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Practical Tips</h3>
                  <p className="text-gray-600">
                    Actionable strategies you can implement immediately.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Regular Updates</h3>
                  <p className="text-gray-600">
                    Fresh content delivered to your inbox monthly.
                  </p>
                </div>
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
              Let's discuss how our insights and expertise can help you achieve 
              sustainable transformation results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Get in Touch
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
