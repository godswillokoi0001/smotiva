// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Mail, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { SmotivaSymbol } from '../components/common/SmotivaLogo';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    website: '',
    stage: 'Operating business with traction',
    primaryChallenge: 'Our brand feels fragmented across different channels',
    services: ['Brand Identity', 'Web Architecture'],
    timeline: '4–8 weeks',
    fullName: '',
    email: '',
    phone: '',
    notes: '',
  });

  const handleServiceToggle = (srv) => {
    setFormData(prev => {
      const exists = prev.services.includes(srv);
      return {
        ...prev,
        services: exists ? prev.services.filter(s => s !== srv) : [...prev.services, srv]
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const faqs = [
    {
      q: 'Where are you based and do you work with clients internationally?',
      a: 'Smotiva is headquartered in Abuja, Nigeria, and partners with ambitious clients across Nigeria, Africa, North America, and Europe. Our diagnostic sessions and reviews are conducted via high-fidelity digital infrastructure.'
    },
    {
      q: 'How long does a typical brand & digital system take to build?',
      a: 'Our comprehensive engagements (Brand Identity, Messaging, Web Architecture, and System Integration) typically run between 4 to 8 weeks with structured milestone reviews and fixed deliverables.'
    },
    {
      q: 'Can we start with a diagnostic audit before committing to a full rebuild?',
      a: 'Yes. Many clients begin with our Brand & Digital Presence Audit, where we evaluate your entire touchpoint ecosystem and deliver an actionable architectural roadmap before proceeding.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8EF] pt-32 sm:pt-40">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 border-b border-[#E8E3D5]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-smotiva-carbon">
            <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
            <span>Direct Project Inquiry</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-smotiva-carbon tracking-tightest leading-tight">
            Let’s make your brand <br />
            <span className="text-smotiva-blue">make sense.</span>
          </h1>

          <p className="font-body text-neutral-600 text-lg sm:text-xl leading-relaxed">
            Every partnership begins with a diagnostic review. Share where your business 
            is today and where you want it to go, and our directors will respond with a strategic assessment within 24 business hours.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: The Comprehensive Intake Form */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#E8E3D5] shadow-xs">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#FAF8EF] text-smotiva-blue mx-auto flex items-center justify-center mb-5 border border-[#E8E3D5]">
                  <CheckCircle2 size={36} />
                </div>
                <h2 className="font-heading text-3xl font-bold text-smotiva-carbon mb-2">
                  Diagnostic Scope Submitted
                </h2>
                <p className="font-body text-neutral-600 max-w-lg mx-auto mb-8 text-base leading-relaxed">
                  Thank you, <strong className="text-smotiva-carbon">{formData.fullName}</strong>. 
                  We have received your details regarding <strong className="text-smotiva-carbon">{formData.businessName || 'your business'}</strong>. 
                  Our team will review your current online footprint and reply with an initial assessment within 24 business hours.
                </p>
                <div className="p-5 rounded-2xl bg-[#FAF8EF] border border-[#E8E3D5] max-w-md mx-auto text-left text-xs text-neutral-700 space-y-1.5">
                  <div className="font-heading font-bold text-smotiva-carbon uppercase tracking-wider text-[11px]">Summary of Inquiry:</div>
                  <div>• Business: {formData.businessName}</div>
                  <div>• Services Selected: {formData.services.join(', ') || 'System Alignment'}</div>
                  <div>• Primary Challenge: {formData.primaryChallenge}</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="border-b border-[#E8E3D5] pb-4">
                  <h2 className="font-heading text-2xl font-bold text-smotiva-carbon">
                    Project Diagnostic Form
                  </h2>
                  <p className="font-body text-xs text-neutral-500 mt-1">
                    Please provide context to help us assess your commercial objectives accurately.
                  </p>
                </div>

                {/* Section 1: Business Context */}
                <div className="space-y-4">
                  <span className="font-heading font-bold text-xs uppercase tracking-widest text-smotiva-coral block">
                    01 / Business Context
                  </span>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading text-xs uppercase tracking-wider text-neutral-600 font-bold mb-1.5">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={e => setFormData({...formData, businessName: e.target.value})}
                        placeholder="e.g. Apex Logistics, Verve Capital"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E3D5] text-sm font-body text-smotiva-carbon focus:border-smotiva-blue focus:ring-1 focus:ring-smotiva-blue outline-none transition-all bg-[#FAF8EF]"
                      />
                    </div>

                    <div>
                      <label className="block font-heading text-xs uppercase tracking-wider text-neutral-600 font-bold mb-1.5">
                        Current Website / Social URL
                      </label>
                      <input
                        type="text"
                        value={formData.website}
                        onChange={e => setFormData({...formData, website: e.target.value})}
                        placeholder="https://... or @handle"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E3D5] text-sm font-body text-smotiva-carbon focus:border-smotiva-blue focus:ring-1 focus:ring-smotiva-blue outline-none transition-all bg-[#FAF8EF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-heading text-xs uppercase tracking-wider text-neutral-600 font-bold mb-1.5">
                      Where is your business currently?
                    </label>
                    <select
                      value={formData.stage}
                      onChange={e => setFormData({...formData, stage: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E3D5] text-sm font-body text-smotiva-carbon focus:border-smotiva-blue focus:ring-1 focus:ring-smotiva-blue outline-none transition-all bg-[#FAF8EF]"
                    >
                      <option value="Startup building from scratch">Startup building foundational brand from scratch</option>
                      <option value="Operating business with traction">Established business outgrowing current presence</option>
                      <option value="Enterprise / Corporate scale">Enterprise requiring multi-channel modernization</option>
                      <option value="Executive / Specialist">Leader or specialist building an authoritative personal brand</option>
                    </select>
                  </div>
                </div>

                {/* Section 2: Services & Focus */}
                <div className="space-y-4 pt-4 border-t border-[#E8E3D5]">
                  <span className="font-heading font-bold text-xs uppercase tracking-widest text-smotiva-coral block">
                    02 / System Focus
                  </span>

                  <div>
                    <label className="block font-heading text-xs uppercase tracking-wider text-neutral-600 font-bold mb-2">
                      Which brand pillars require alignment?
                    </label>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {[
                        '01 Brand Identity & Systems',
                        '02 Visual Communication & Messaging',
                        '03 Web Architecture & Platforms',
                        '04 Ongoing Growth & Direction',
                        'The Complete End-to-End System',
                        'Brand & Digital Audit Only'
                      ].map((srv) => {
                        const active = formData.services.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => handleServiceToggle(srv)}
                            className={`p-3.5 rounded-xl text-left border text-xs font-heading font-bold transition-all flex items-center justify-between ${
                              active
                                ? 'border-smotiva-blue bg-white text-smotiva-blue shadow-xs'
                                : 'border-[#E8E3D5] hover:border-neutral-300 text-neutral-700 bg-[#FAF8EF]'
                            }`}
                          >
                            <span>{srv}</span>
                            <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                              active ? 'bg-smotiva-blue text-white' : 'border border-neutral-300'
                            }`}>
                              {active && '✓'}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Section 3: Contact & Message */}
                <div className="space-y-4 pt-4 border-t border-[#E8E3D5]">
                  <span className="font-heading font-bold text-xs uppercase tracking-widest text-smotiva-coral block">
                    03 / Your Contact Details
                  </span>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading text-xs uppercase tracking-wider text-neutral-600 font-bold mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={e => setFormData({...formData, fullName: e.target.value})}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E3D5] text-sm font-body text-smotiva-carbon focus:border-smotiva-blue focus:ring-1 focus:ring-smotiva-blue outline-none transition-all bg-[#FAF8EF]"
                      />
                    </div>

                    <div>
                      <label className="block font-heading text-xs uppercase tracking-wider text-neutral-600 font-bold mb-1.5">
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E3D5] text-sm font-body text-smotiva-carbon focus:border-smotiva-blue focus:ring-1 focus:ring-smotiva-blue outline-none transition-all bg-[#FAF8EF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-heading text-xs uppercase tracking-wider text-neutral-600 font-bold mb-1.5">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      placeholder="+234 ... or international code"
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E3D5] text-sm font-body text-smotiva-carbon focus:border-smotiva-blue focus:ring-1 focus:ring-smotiva-blue outline-none transition-all bg-[#FAF8EF]"
                    />
                  </div>

                  <div>
                    <label className="block font-heading text-xs uppercase tracking-wider text-neutral-600 font-bold mb-1.5">
                      What is the primary problem you need Smotiva to solve?
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={e => setFormData({...formData, notes: e.target.value})}
                      placeholder="Describe your current commercial friction, where your brand presence is falling short, and your target timeline..."
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E3D5] text-sm font-body text-smotiva-carbon focus:border-smotiva-blue focus:ring-1 focus:ring-smotiva-blue outline-none transition-all bg-[#FAF8EF] resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-smotiva-blue text-white font-heading font-bold text-base hover:bg-smotiva-carbon transition-all shadow-brand-card flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Analyzing & Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Project Scope for Diagnostic Review</span>
                        <Send size={18} className="text-smotiva-coral" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs font-body text-neutral-400 mt-3">
                    We value your privacy. Your commercial information is held in strict confidence.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Studio Information & FAQ */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Direct Studio Card */}
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-[#E8E3D5] shadow-xs space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#E8E3D5]">
                <SmotivaSymbol size={32} variant="coral" />
                <div>
                  <h3 className="font-heading font-bold text-lg text-smotiva-carbon">
                    Smotiva Studio
                  </h3>
                  <span className="text-xs font-body text-neutral-500">
                    Digital Brand Growth Partner
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs font-body text-neutral-700">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-smotiva-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-heading text-smotiva-carbon">Abuja Studio</strong>
                    <span>Federal Capital Territory, Nigeria</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-smotiva-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-heading text-smotiva-carbon">Email Directly</strong>
                    <a href="mailto:contact@smotiva.com" className="text-smotiva-coral font-bold hover:underline">
                      contact@smotiva.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-smotiva-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-heading text-smotiva-carbon">Operating Hours</strong>
                    <span>Mon – Fri: 8:00 AM – 6:00 PM WAT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQ Box */}
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-[#E8E3D5] shadow-xs space-y-5">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-smotiva-carbon">
                Frequently Addressed Questions
              </h3>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="space-y-1 text-xs font-body">
                    <div className="font-heading font-bold text-smotiva-carbon">
                      {faq.q}
                    </div>
                    <p className="text-neutral-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
