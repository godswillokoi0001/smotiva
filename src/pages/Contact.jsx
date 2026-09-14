// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { SmotivaSymbol } from '../components/common/SmotivaLogo';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessName: '',
    serviceInterest: 'Brand Identity',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate swift confirmation
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full pt-32 sm:pt-40">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 border-b border-inherit">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-heading font-semibold uppercase tracking-wider text-smotiva-navy dark:text-smotiva-cyan">
            Contact & Inquiries
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.08]">
            Start a project with Smotiva.
          </h1>
          <p className="font-body text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
            Tell us about what you're building, what bottlenecks you are facing, and what success looks like. We respond within 24 business hours.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 rounded-2xl border border-smotiva-border dark:border-neutral-800 bg-smotiva-nearwhite dark:bg-neutral-900/30 space-y-6">
              <div className="flex items-center gap-3 border-b pb-4 border-smotiva-border dark:border-neutral-800">
                <SmotivaSymbol size={26} />
                <div>
                  <h3 className="font-heading font-bold text-sm text-smotiva-charcoal dark:text-white">
                    Smotiva Digital Ltd
                  </h3>
                  <span className="text-xs text-neutral-500">Digital Growth Partner</span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm font-body">
                <div>
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                    Direct Email
                  </span>
                  <a 
                    href="mailto:hello@smotiva.com"
                    className="font-medium text-smotiva-navy dark:text-smotiva-cyan hover:underline inline-flex items-center gap-1.5"
                  >
                    <Mail size={14} />
                    <span>hello@smotiva.com</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                    Headquarters
                  </span>
                  <div className="flex items-start gap-1.5 text-neutral-700 dark:text-neutral-300">
                    <MapPin size={14} className="text-smotiva-navy dark:text-smotiva-cyan shrink-0 mt-0.5" />
                    <span>Abuja, Federal Capital Territory, Nigeria</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                    Client Footprint
                  </span>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Partnering with ambitious founders and companies across Nigeria, Africa, and globally.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-smotiva-border dark:border-neutral-800 text-xs font-body text-neutral-500 dark:text-neutral-400 space-y-2">
              <span className="font-heading font-semibold uppercase tracking-wider text-neutral-400 block">
                What happens next?
              </span>
              <p>
                1. We review your current online presence and inquiry details.
              </p>
              <p>
                2. We schedule a concise diagnostic discussion to clarify scope.
              </p>
              <p>
                3. We prepare a transparent proposal with clear deliverables.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-8 p-8 sm:p-12 rounded-2xl border border-smotiva-border dark:border-neutral-800 bg-white dark:bg-neutral-900">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 text-smotiva-navy dark:text-smotiva-cyan mx-auto flex items-center justify-center">
                  <CheckCircle size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-neutral-900 dark:text-white">
                  Message received.
                </h3>
                <p className="font-body text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. We will review your project details and follow up with you at <strong>{formData.email}</strong> within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      businessName: '',
                      serviceInterest: 'Brand Identity',
                      message: '',
                    });
                  }}
                  className="text-xs font-heading font-semibold text-smotiva-navy dark:text-smotiva-cyan hover:underline pt-4"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b pb-4 border-neutral-200 dark:border-neutral-800">
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                    Project Inquiry Form
                  </h2>
                  <p className="font-body text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Fill out the fields below and we'll reach out to discuss your requirements.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Okonjo"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-800 text-sm font-body text-neutral-900 dark:text-white focus:border-smotiva-navy dark:focus:border-smotiva-cyan outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-800 text-sm font-body text-neutral-900 dark:text-white focus:border-smotiva-navy dark:focus:border-smotiva-cyan outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Rayto Logistics Ltd"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-800 text-sm font-body text-neutral-900 dark:text-white focus:border-smotiva-navy dark:focus:border-smotiva-cyan outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                      Primary Discipline
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-800 text-sm font-body text-neutral-900 dark:text-white focus:border-smotiva-navy dark:focus:border-smotiva-cyan outline-none transition-colors"
                    >
                      <option value="Brand Identity">01. Brand Identity & Systems</option>
                      <option value="Websites & Digital Products">02. Websites & Digital Products</option>
                      <option value="Graphics & Content">03. Graphics & Visual Content</option>
                      <option value="Digital Marketing & Strategy">04. Digital Marketing & Strategy</option>
                      <option value="Complete Partnership">Comprehensive Digital Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                    Project Overview / What are you looking to build? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your business, timeline, and what challenge you are looking to solve..."
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-800 text-sm font-body text-neutral-900 dark:text-white focus:border-smotiva-navy dark:focus:border-smotiva-cyan outline-none transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-lg bg-smotiva-navy dark:bg-smotiva-cyan text-white dark:text-smotiva-charcoal font-heading font-semibold text-sm hover:opacity-95 transition-opacity inline-flex items-center gap-2 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Sending inquiry...' : 'Send inquiry'}</span>
                    <Send size={15} />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
