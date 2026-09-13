// src/components/common/ProjectIntakeModal.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Send } from 'lucide-react';
import { SmotivaSymbol } from './SmotivaLogo';

export default function ProjectIntakeModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    businessName: '',
    websiteUrl: '',
    stage: 'Operating business with traction',
    primaryChallenge: 'Our brand feels fragmented across different channels',
    servicesNeeded: ['Brand Identity', 'Website Architecture'],
    timeline: 'Within 4 to 8 weeks',
    fullName: '',
    email: '',
    phone: '',
    projectDetails: '',
  });

  if (!isOpen) return null;

  const handleCheckboxToggle = (service) => {
    setFormData(prev => {
      const exists = prev.servicesNeeded.includes(service);
      return {
        ...prev,
        servicesNeeded: exists 
          ? prev.servicesNeeded.filter(s => s !== service)
          : [...prev.servicesNeeded, service]
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setIsSubmitted(false);
    }, 400);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-smotiva-carbon/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E8E3D5] overflow-hidden z-10 my-8"
        >
          {/* Header Bar */}
          <div className="px-6 sm:px-8 py-5 border-b border-[#E8E3D5] flex items-center justify-between bg-[#FAF8EF]">
            <div className="flex items-center gap-3">
              <SmotivaSymbol size={28} variant="coral" />
              <div>
                <h3 className="font-heading font-bold text-lg text-smotiva-carbon leading-none">
                  Start a Project
                </h3>
                <p className="font-body text-xs text-neutral-500 mt-1">
                  Tell us where your brand is today and where it needs to go.
                </p>
              </div>
            </div>

            <button 
              onClick={resetAndClose}
              className="p-2 rounded-xl text-neutral-400 hover:text-smotiva-carbon hover:bg-neutral-200/50 transition-colors"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-[#FAF8EF] text-smotiva-blue mx-auto flex items-center justify-center mb-5 border border-[#E8E3D5]">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="font-heading text-2xl font-bold text-smotiva-carbon mb-2">
                  Project Scope Received
                </h4>
                <p className="font-body text-neutral-600 max-w-md mx-auto mb-6 text-sm sm:text-base leading-relaxed">
                  Thank you, <strong className="text-smotiva-carbon">{formData.fullName || 'friend'}</strong>. 
                  We review incoming briefs thoroughly to understand your commercial objectives before replying. 
                  You will receive a strategic response from our team within 24 business hours.
                </p>
                <div className="p-5 rounded-2xl bg-[#FAF8EF] border border-[#E8E3D5] max-w-sm mx-auto text-left mb-6 text-xs text-neutral-700 space-y-1.5">
                  <div className="font-heading font-bold text-smotiva-carbon uppercase tracking-wider text-[11px]">Brief Overview:</div>
                  <div>• Business: {formData.businessName || 'Undisclosed'}</div>
                  <div>• Key Need: {formData.servicesNeeded.join(', ') || 'Full System Alignment'}</div>
                  <div>• Target Timeline: {formData.timeline}</div>
                </div>
                <button
                  onClick={resetAndClose}
                  className="px-6 py-3 rounded-xl bg-smotiva-blue text-white font-heading font-bold text-sm hover:bg-smotiva-carbon transition-all"
                >
                  Back to Website
                </button>
              </div>
            ) : (
              <div>
                {/* Step Indicators */}
                <div className="flex items-center justify-between mb-8 border-b border-[#E8E3D5] pb-4 text-xs font-body">
                  <div className={`flex items-center gap-2 font-medium ${step >= 1 ? 'text-smotiva-blue' : 'text-neutral-400'}`}>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      step >= 1 ? 'bg-smotiva-blue text-white' : 'bg-neutral-200 text-neutral-600'
                    }`}>1</span>
                    <span className="font-heading font-bold">Business & Stage</span>
                  </div>
                  <div className="h-0.5 w-8 bg-[#E8E3D5]" />
                  <div className={`flex items-center gap-2 font-medium ${step >= 2 ? 'text-smotiva-blue' : 'text-neutral-400'}`}>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      step >= 2 ? 'bg-smotiva-blue text-white' : 'bg-neutral-200 text-neutral-600'
                    }`}>2</span>
                    <span className="font-heading font-bold">Brand System Needs</span>
                  </div>
                  <div className="h-0.5 w-8 bg-[#E8E3D5]" />
                  <div className={`flex items-center gap-2 font-medium ${step >= 3 ? 'text-smotiva-blue' : 'text-neutral-400'}`}>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      step >= 3 ? 'bg-smotiva-blue text-white' : 'bg-neutral-200 text-neutral-600'
                    }`}>3</span>
                    <span className="font-heading font-bold">Contact Details</span>
                  </div>
                </div>

                <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); setStep(s => s + 1); }}>
                  {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                      <div>
                        <label className="block font-heading text-xs uppercase tracking-wider text-neutral-600 font-bold mb-2">
                          Business or Organization Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                          placeholder="e.g. Apex Logistics, Verve Capital, Rayto"
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E3D5] text-sm font-body text-smotiva-carbon focus:border-smotiva-blue focus:ring-1 focus:ring-smotiva-blue outline-none transition-all bg-[#FAF8EF]"
                        />
                      </div>

                      <div>
                        <label className="block font-heading text-xs uppercase tracking-wider text-neutral-600 font-bold mb-2">
                          Current Website or Social URL (if any)
                        </label>
                        <input
                          type="text"
                          value={formData.websiteUrl}
                          onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})}
                          placeholder="e.g. https://yourcompany.com or @yourhandle"
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E3D5] text-sm font-body text-smotiva-carbon focus:border-smotiva-blue focus:ring-1 focus:ring-smotiva-blue outline-none transition-all bg-[#FAF8EF]"
                        />
                      </div>

                      <div>
                        <label className="block font-heading text-xs uppercase tracking-wider text-neutral-600 font-bold mb-2">
                          Where is your business today?
                        </label>
                        <select
                          value={formData.stage}
                          onChange={(e) => setFormData({...formData, stage: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E3D5] text-sm font-body text-smotiva-carbon focus:border-smotiva-blue focus:ring-1 focus:ring-smotiva-blue outline-none transition-all bg-[#FAF8EF]"
                        >
                          <option value="Startup building from scratch">Startup building foundational brand from scratch</option>
                          <option value="Operating business with traction">Established business outgrowing current digital presence</option>
                          <option value="Enterprise / Corporate scaling">Established company needing system-wide modernization</option>
                          <option value="Founder / Executive Brand">Executive building an authoritative personal presence</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-heading text-xs uppercase tracking-wider text-neutral-600 font-bold mb-2">
                          What is your primary commercial challenge?
                        </label>
                        <select
                          value={formData.primaryChallenge}
                          onChange={(e) => setFormData({...formData, primaryChallenge: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E3D5] text-sm font-body text-smotiva-carbon focus:border-smotiva-blue focus:ring-1 focus:ring-smotiva-blue outline-none transition-all bg-[#FAF8EF]"
                        >
                          <option value="Our brand feels fragmented across different channels">Our brand feels fragmented across touchpoints</option>
                          <option value="Our website does not reflect our real quality">Our website doesn't reflect the caliber of what we do</option>
                          <option value="Our messaging is unclear to decision makers">Our messaging is unclear or too complex for customers</option>
                          <option value="We need a full cohesive brand and digital system">We need an end-to-end unified brand system</option>
                        </select>
                      </div>

                      <div className="flex justify-end pt-4">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-smotiva-blue text-white font-heading font-bold text-sm hover:bg-smotiva-carbon transition-all shadow-xs"
                        >
                          <span>Continue to Needs</span>
                          <ArrowRight size={16} className="text-smotiva-coral" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                      <div>
                        <label className="block font-heading text-xs uppercase tracking-wider text-neutral-600 font-bold mb-2">
                          Select the elements you want Smotiva to solve:
                        </label>
                        <div className="grid sm:grid-cols-2 gap-3 pt-1">
                          {[
                            { name: 'Brand Identity', desc: 'Logo, visual rules, color tokens & typography' },
                            { name: 'Website Architecture', desc: 'Strategy, UI/UX design & high-speed build' },
                            { name: 'Messaging & Story', desc: 'Value proposition, editorial copy & decks' },
                            { name: 'Digital Presence System', desc: 'Social frameworks, templates & direction' },
                            { name: 'Full Brand Ecosystem', desc: 'End-to-end alignment across every touchpoint' },
                            { name: 'Ongoing Growth Partner', desc: 'Retained direction & asset governance' },
                          ].map((item) => {
                            const selected = formData.servicesNeeded.includes(item.name);
                            return (
                              <button
                                type="button"
                                key={item.name}
                                onClick={() => handleCheckboxToggle(item.name)}
                                className={`p-4 rounded-2xl text-left border transition-all ${
                                  selected 
                                    ? 'border-smotiva-blue bg-white text-smotiva-blue shadow-xs' 
                                    : 'border-[#E8E3D5] bg-[#FAF8EF] text-neutral-700 hover:border-neutral-300'
                                }`}
                              >
                                <div className="font-heading font-bold text-sm flex items-center justify-between">
                                  <span>{item.name}</span>
                                  <div className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                                    selected ? 'bg-smotiva-blue text-white' : 'border border-neutral-300'
                                  }`}>
                                    {selected && '✓'}
                                  </div>
                                </div>
                                <p className="font-body text-xs text-neutral-500 mt-1">{item.desc}</p>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block font-heading text-xs uppercase tracking-wider text-neutral-600 font-bold mb-2">
                          Target Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E3D5] text-sm font-body text-smotiva-carbon focus:border-smotiva-blue focus:ring-1 focus:ring-smotiva-blue outline-none transition-all bg-[#FAF8EF]"
                        >
                          <option value="Urgent (within 3 weeks)">High Priority (3–4 weeks)</option>
                          <option value="Within 4 to 8 weeks">Standard Timeline (4–8 weeks)</option>
                          <option value="Next quarter (2–3 months)">Strategic Plan (2–3 months)</option>
                          <option value="Flexible for right outcome">Flexible for the right system</option>
                        </select>
                      </div>

                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#E8E3D5] text-smotiva-carbon font-heading font-bold text-sm hover:bg-[#FAF8EF] transition-all"
                        >
                          <ArrowLeft size={16} />
                          <span>Back</span>
                        </button>
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-smotiva-blue text-white font-heading font-bold text-sm hover:bg-smotiva-carbon transition-all shadow-xs"
                        >
                          <span>Next: Contact Details</span>
                          <ArrowRight size={16} className="text-smotiva-coral" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-heading text-xs uppercase tracking-wider text-neutral-600 font-bold mb-1.5">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                            placeholder="Alex Morgan"
                            className="w-full px-4 py-3 rounded-xl border border-[#E8E3D5] text-sm font-body text-smotiva-carbon focus:border-smotiva-blue focus:ring-1 focus:ring-smotiva-blue outline-none transition-all bg-[#FAF8EF]"
                          />
                        </div>

                        <div>
                          <label className="block font-heading text-xs uppercase tracking-wider text-neutral-600 font-bold mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+234 ... or international"
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E3D5] text-sm font-body text-smotiva-carbon focus:border-smotiva-blue focus:ring-1 focus:ring-smotiva-blue outline-none transition-all bg-[#FAF8EF]"
                        />
                      </div>

                      <div>
                        <label className="block font-heading text-xs uppercase tracking-wider text-neutral-600 font-bold mb-1.5">
                          Brief Overview of Your Business & Goals
                        </label>
                        <textarea
                          rows={3}
                          value={formData.projectDetails}
                          onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
                          placeholder="Tell us what you sell, who your best customers are, and what isn't working with your current brand presentation..."
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E3D5] text-sm font-body text-smotiva-carbon focus:border-smotiva-blue focus:ring-1 focus:ring-smotiva-blue outline-none transition-all bg-[#FAF8EF] resize-none"
                        />
                      </div>

                      <div className="flex justify-between pt-3">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#E8E3D5] text-smotiva-carbon font-heading font-bold text-sm hover:bg-[#FAF8EF] transition-all"
                        >
                          <ArrowLeft size={16} />
                          <span>Back</span>
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-smotiva-blue text-white font-heading font-bold text-sm hover:bg-smotiva-carbon transition-all shadow-brand-card disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span>Submitting Scope...</span>
                          ) : (
                            <>
                              <span>Submit Project Scope</span>
                              <Send size={16} className="text-smotiva-coral" />
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
