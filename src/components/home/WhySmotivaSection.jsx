// src/components/home/WhySmotivaSection.jsx
import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { agencyComparison } from '../../data/brandData';

export default function WhySmotivaSection({ onStartProject }) {
  return (
    <section className="py-24 lg:py-32 bg-white border-t border-b border-[#E8E3D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-smotiva-carbon">
            <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
            <span>The Systemic Difference</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-smotiva-carbon tracking-tight leading-tight">
            We think about the <br />
            <span className="text-smotiva-blue">whole system.</span>
          </h2>

          <p className="font-body text-neutral-600 text-lg leading-relaxed">
            Most creative agencies are order-takers. You ask for a brochure or a homepage, 
            they deliver it in a silo, and nobody asks how it connects to your real revenue goals. 
            We build integrated brand infrastructure.
          </p>
        </div>

        {/* Side by Side Comparison Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: The Typical Agency */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#FAF8EF] border border-[#E8E3D5] flex flex-col justify-between shadow-2xs">
            <div>
              <div className="pb-6 border-b border-[#E8E3D5] mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-smotiva-carbon">
                    The Typical Agency
                  </h3>
                  <span className="font-body text-xs text-neutral-500 block mt-0.5">
                    Order-taker model: Request → Graphic → Deliver
                  </span>
                </div>
                <span className="px-3 py-1 rounded bg-white border border-[#E8E3D5] text-smotiva-coral text-xs font-heading font-bold uppercase">
                  Fragmented
                </span>
              </div>

              <div className="space-y-6">
                {agencyComparison.typical.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-white border border-[#E8E3D5] text-smotiva-coral flex items-center justify-center shrink-0 mt-0.5">
                      <X size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-smotiva-carbon">
                        {item.title}
                      </h4>
                      <p className="font-body text-xs text-neutral-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#E8E3D5] text-xs font-body text-neutral-500">
              Outcome: Pretty files, but your commercial presence still feels fragmented.
            </div>
          </div>

          {/* Right: The Smotiva Partner */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-smotiva-carbon text-white border border-[#333] flex flex-col justify-between shadow-brand-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-smotiva-blue/20 rounded-bl-[120px] pointer-events-none -z-0" />

            <div className="relative z-10">
              <div className="pb-6 border-b border-neutral-800 mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Smotiva Growth Partner
                  </h3>
                  <span className="font-body text-xs text-smotiva-coral block mt-0.5 font-bold">
                    Systemic model: Understand → Define → Build → Connect → Grow
                  </span>
                </div>
                <span className="px-3 py-1 rounded bg-smotiva-blue text-white text-xs font-heading font-bold uppercase">
                  Synchronized
                </span>
              </div>

              <div className="space-y-6">
                {agencyComparison.smotiva.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-smotiva-blue/30 text-white flex items-center justify-center shrink-0 mt-0.5 border border-smotiva-blue">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white">
                        {item.title}
                      </h4>
                      <p className="font-body text-xs text-neutral-300 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs font-body text-neutral-400">
                Outcome: An authoritative, high-converting category leader.
              </span>
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-2 text-xs font-heading font-bold text-smotiva-coral hover:text-white transition-colors"
              >
                <span>Partner with us</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
