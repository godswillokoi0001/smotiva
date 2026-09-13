// src/components/home/ProcessSection.jsx
import React from 'react';
import { ArrowRight, Check, Compass, Code, RefreshCw, Zap, ShieldCheck } from 'lucide-react';
import { processStages } from '../../data/brandData';

export default function ProcessSection({ onStartProject }) {
  const stageIcons = {
    '01': Compass,
    '02': ShieldCheck,
    '03': Code,
    '04': Zap,
    '05': RefreshCw,
  };

  return (
    <section className="py-24 lg:py-32 bg-white border-t border-b border-[#E8E3D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-smotiva-carbon">
            <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
            <span>The Smotiva Process</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-smotiva-carbon tracking-tight leading-tight">
            How we bring order to chaos.
          </h2>

          <p className="font-body text-neutral-600 text-lg leading-relaxed">
            We do not rely on random bursts of inspiration. We follow a rigorous, 
            five-stage framework that guarantees strategic alignment, exceptional craft, and long-term durability.
          </p>
        </div>

        {/* 5 Stages Vertical Timeline / Cards */}
        <div className="mt-16 space-y-6">
          {processStages.map((stage) => {
            const Icon = stageIcons[stage.number];

            return (
              <div 
                key={stage.number}
                className="p-8 sm:p-10 rounded-3xl bg-[#FAF8EF] border border-[#E8E3D5] shadow-2xs hover:border-smotiva-blue hover:shadow-brand-card transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Stage Number & Title */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-heading text-3xl font-bold text-smotiva-blue">
                        {stage.number}
                      </span>
                      <span className="text-xs font-heading font-bold px-3 py-1 rounded-full bg-white text-smotiva-carbon border border-[#E8E3D5] uppercase tracking-wider">
                        {stage.duration}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-smotiva-carbon group-hover:text-smotiva-blue transition-colors">
                      {stage.name}
                    </h3>

                    <p className="font-heading text-xs uppercase tracking-wider text-smotiva-coral font-bold">
                      {stage.tagline}
                    </p>
                  </div>

                  {/* Stage Description & Strategic Inquiry */}
                  <div className="lg:col-span-8 space-y-5">
                    <p className="font-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="p-5 rounded-2xl bg-white border border-[#E8E3D5] space-y-2.5">
                      <span className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-500 block">
                        Strategic Questions Solved in This Phase:
                      </span>
                      <ul className="grid sm:grid-cols-2 gap-2.5 text-xs font-body text-neutral-700">
                        {stage.questionsAsked.map((q, qIdx) => (
                          <li key={qIdx} className="flex items-start gap-2">
                            <Check size={14} className="text-smotiva-blue shrink-0 mt-0.5" />
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Footer */}
        <div className="mt-14 text-center">
          <p className="font-body text-sm text-neutral-500 mb-4">
            Ready to walk through this framework for your brand?
          </p>
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-smotiva-blue text-white font-heading font-bold text-sm hover:bg-smotiva-carbon transition-all shadow-brand-card hover:shadow-brand-hover group"
          >
            <span>Start Step 01: Diagnosis</span>
            <ArrowRight size={16} className="text-smotiva-coral transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
