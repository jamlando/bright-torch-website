'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    serviceInterest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (placeholder for future service integration)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        serviceInterest: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-blue to-malibu-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-merriweather mb-6">
              Let's Illuminate What's Possible
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your organization? We're here to help you turn strategy into results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold font-merriweather text-slate-blue mb-8">
                Get in Touch
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">
                    There was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knoxville-orange focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knoxville-orange focus:border-transparent transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knoxville-orange focus:border-transparent transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knoxville-orange focus:border-transparent transition-colors"
                      placeholder="Your organization"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knoxville-orange focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="strategy">Strategy Development & Alignment</option>
                    <option value="change">Change Management</option>
                    <option value="operations">Operations Optimization</option>
                    <option value="leadership">Leadership Development</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knoxville-orange focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your organization's challenges and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <h2 className="text-3xl font-bold font-merriweather text-slate-blue mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                {/* Direct Contact */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-blue mb-4">Direct Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-knoxville-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a 
                        href="mailto:nhymer@brighttorchconsulting.com"
                        className="text-slate-blue hover:text-knoxville-orange transition-colors"
                      >
                        nhymer@brighttorchconsulting.com
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-knoxville-orange mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <a 
                        href="https://www.linkedin.com/in/nhymer/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-blue hover:text-knoxville-orange transition-colors"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                {/* Scheduling Placeholder */}
                <div className="bg-knoxville-orange/10 p-6 rounded-lg border border-knoxville-orange/20">
                  <h3 className="text-xl font-semibold text-slate-blue mb-4">Schedule a Consultation</h3>
                  <p className="text-gray-700 mb-4">
                    Ready to discuss your organization's transformation needs? 
                    Schedule a complimentary 30-minute consultation to explore how we can help.
                  </p>
                  <div className="bg-white p-4 rounded border-2 border-dashed border-gray-300 text-center">
                    <p className="text-gray-500 font-medium">
                      Scheduling integration coming soon
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      For now, please use the contact form or email directly
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-malibu-blue/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-blue mb-4">What to Expect</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-knoxville-orange mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Response within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-knoxville-orange mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Complimentary initial consultation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-knoxville-orange mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Customized approach for your needs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
