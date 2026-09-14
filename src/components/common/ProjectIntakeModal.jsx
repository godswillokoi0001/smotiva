// src/components/common/ProjectIntakeModal.jsx
import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ArrowLeft, Send } from 'lucide-react';
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
    servicesNeeded: ['Brand Identity', 'Websites & Digital Products'],
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
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-smotiva-border dark:border-neutral-800 overflow-hidden z-10 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 sm:px-8 py-5 border-b border-smotiva-border dark:border-neutral-800 flex items-center justify-between bg-smotiva-cream/60 dark:bg-neutral-950/40">
          <div className="flex items-center gap-3">
            <SmotivaSymbol size={24} color="#F04C4C" />
            <div>
              <h3 className="font-heading font-bold text-base text-smotiva-charcoal dark:text-white leading-none">
                Start a project
              </h3>
              <p className="font-body text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Tell us what you're working on. We'll figure out the best way forward.
              </p>
            </div>
          </div>

          <button 
            onClick={resetAndClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-full bg-smotiva-cream dark:bg-neutral-800 text-smotiva-blue mx-auto flex items-center justify-center border border-smotiva-border dark:border-neutral-700">
                <CheckCircle size={32} />
              </div>
              <h4 className="font-heading text-2xl font-bold text-smotiva-charcoal dark:text-white">
                Scope Received
              </h4>
              <p className="font-body text-neutral-600 dark:text-neutral-300 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <strong>{formData.fullName || 'friend'}</strong>. We have received the details for <strong>{formData.businessName || 'your business'}</strong>. We will review your requirements and follow up within 24 business hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 rounded-lg bg-smotiva-blue text-white font-heading font-semibold text-xs hover:opacity-95 transition-opacity shadow-sm"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Step Indicators */}
              <div className="flex items-center justify-between mb-8 border-b border-smotiva-border dark:border-neutral-800 pb-4 text-xs">
                <div className={`flex items-center gap-2 font-medium ${step >= 1 ? 'text-smotiva-blue' : 'text-neutral-400'}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    step >= 1 ? 'bg-smotiva-blue text-white' : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600'
                  }`}>1</span>
                  <span className="font-heading font-semibold">Business</span>
                </div>
                <div className="h-px w-8 bg-smotiva-border dark:border-neutral-800" />
                <div className={`flex items-center gap-2 font-medium ${step >= 2 ? 'text-smotiva-blue' : 'text-neutral-400'}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    step >= 2 ? 'bg-smotiva-blue text-white' : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600'
                  }`}>2</span>
                  <span className="font-heading font-semibold">Requirements</span>
                </div>
                <div className="h-px w-8 bg-smotiva-border dark:border-neutral-800" />
                <div className={`flex items-center gap-2 font-medium ${step >= 3 ? 'text-smotiva-blue' : 'text-neutral-400'}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    step >= 3 ? 'bg-smotiva-blue text-white' : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600'
                  }`}>3</span>
                  <span className="font-heading font-semibold">Contact</span>
                </div>
              </div>

              <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); setStep(s => s + 1); }}>
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block font-heading text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-1.5">
                        Business or Organization Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                        placeholder="e.g. Rayto Logistics, Horizon Financial"
                        className="w-full px-4 py-2.5 rounded-lg border border-smotiva-border dark:border-neutral-700 text-sm font-body text-neutral-900 dark:text-white focus:border-smotiva-blue dark:focus:border-smotiva-blue outline-none transition-colors bg-neutral-50/50 dark:bg-neutral-800"
                      />
                    </div>

                    <div>
                      <label className="block font-heading text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-1.5">
                        Current Website or Social URL (if any)
                      </label>
                      <input
                        type="text"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})}
                        placeholder="e.g. https://yourbusiness.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-smotiva-border dark:border-neutral-700 text-sm font-body text-neutral-900 dark:text-white focus:border-smotiva-blue dark:focus:border-smotiva-blue outline-none transition-colors bg-neutral-50/50 dark:bg-neutral-800"
                      />
                    </div>

                    <div>
                      <label className="block font-heading text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-1.5">
                        Current Stage
                      </label>
                      <select
                        value={formData.stage}
                        onChange={(e) => setFormData({...formData, stage: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-lg border border-smotiva-border dark:border-neutral-700 text-sm font-body text-neutral-900 dark:text-white focus:border-smotiva-blue dark:focus:border-smotiva-blue outline-none transition-colors bg-neutral-50/50 dark:bg-neutral-800"
                      >
                        <option value="Startup building from scratch">Foundational brand build from scratch</option>
                        <option value="Operating business with traction">Established business outgrowing current presence</option>
                        <option value="Enterprise / Corporate scaling">Enterprise requiring multi-channel modernization</option>
                        <option value="Leader / Specialist">Executive or specialist personal brand</option>
                      </select>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-smotiva-blue text-white font-heading font-semibold text-xs hover:opacity-95 transition-opacity shadow-sm"
                      >
                        <span>Continue</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block font-heading text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-2">
                        Select disciplines required:
                      </label>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {[
                          { name: 'Brand Identity', desc: 'Visual identity, logo, typography & guidelines' },
                          { name: 'Websites & Digital Products', desc: 'Strategy, UI/UX design & performant engineering' },
                          { name: 'Graphics & Visual Content', desc: 'Marketing visuals, decks & collateral' },
                          { name: 'Video & Motion', desc: 'Brand video, explainers & short-form video' },
                          { name: 'Digital Strategy', desc: 'Positioning, messaging & distribution roadmap' },
                          { name: 'Comprehensive Partnership', desc: 'End-to-end multi-disciplinary partnership' },
                        ].map((item) => {
                          const selected = formData.servicesNeeded.includes(item.name);
                          return (
                            <button
                              type="button"
                              key={item.name}
                              onClick={() => handleCheckboxToggle(item.name)}
                              className={`p-3 rounded-xl text-left border transition-all text-xs ${
                                selected 
                                  ? 'border-smotiva-blue bg-smotiva-blue/5 dark:bg-smotiva-blue/15 text-smotiva-charcoal dark:text-white' 
                                  : 'border-smotiva-border dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-800/40 text-neutral-600 dark:text-neutral-300'
                              }`}
                            >
                              <div className="font-heading font-semibold flex items-center justify-between">
                                <span>{item.name}</span>
                                <div className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[9px] ${
                                  selected ? 'bg-smotiva-blue text-white' : 'border border-neutral-300 dark:border-neutral-600'
                                }`}>
                                  {selected && '✓'}
                                </div>
                              </div>
                              <p className="font-body text-[11px] text-neutral-400 mt-1">{item.desc}</p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 font-heading font-semibold text-xs hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                      >
                        <ArrowLeft size={14} />
                        <span>Back</span>
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-smotiva-blue text-white font-heading font-semibold text-xs hover:opacity-95 transition-opacity shadow-sm"
                      >
                        <span>Contact Info</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-heading text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          placeholder="Alex Okonjo"
                          className="w-full px-4 py-2.5 rounded-lg border border-smotiva-border dark:border-neutral-700 text-sm font-body text-neutral-900 dark:text-white focus:border-smotiva-blue dark:focus:border-smotiva-blue outline-none transition-colors bg-neutral-50/50 dark:bg-neutral-800"
                        />
                      </div>

                      <div>
                        <label className="block font-heading text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-smotiva-border dark:border-neutral-700 text-sm font-body text-neutral-900 dark:text-white focus:border-smotiva-blue dark:focus:border-smotiva-blue outline-none transition-colors bg-neutral-50/50 dark:bg-neutral-800"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-heading text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-1.5">
                        Project Overview (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
                        placeholder="Tell us what you're working on, timeline, or key objectives..."
                        className="w-full px-4 py-2.5 rounded-lg border border-smotiva-border dark:border-neutral-700 text-sm font-body text-neutral-900 dark:text-white focus:border-smotiva-blue dark:focus:border-smotiva-blue outline-none transition-colors bg-neutral-50/50 dark:bg-neutral-800 resize-none"
                      />
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 font-heading font-semibold text-xs hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                      >
                        <ArrowLeft size={14} />
                        <span>Back</span>
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-7 py-2.5 rounded-lg bg-smotiva-blue text-white font-heading font-semibold text-xs hover:opacity-95 transition-opacity disabled:opacity-50 shadow-sm"
                      >
                        {isSubmitting ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <span>Send Project Scope</span>
                            <Send size={13} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
