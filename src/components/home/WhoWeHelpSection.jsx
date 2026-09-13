// src/components/home/WhoWeHelpSection.jsx
import React from 'react';
import { Rocket, Building2, UserCheck, Network, ArrowRight } from 'lucide-react';
import { clientArchetypes } from '../../data/brandData';

export default function WhoWeHelpSection({ onStartProject }) {
  const archetypeIcons = [Rocket, Building2, UserCheck, Network];

  return (
    <section className="py-24 lg:py-32 bg-[#FAF8EF] border-t border-b border-[#E8E3D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-smotiva-carbon">
            <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
            <span>Target Client Profiles</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-smotiva-carbon tracking-tight leading-tight">
            Who we partner with.
          </h2>

          <p className="font-body text-neutral-600 text-lg leading-relaxed">
            We work with ambitious founders, business leaders, and organizations 
            who realize their digital presence is no longer doing justice to their actual commercial strength.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientArchetypes.map((arch, idx) => {
            const Icon = archetypeIcons[idx % archetypeIcons.length];

            return (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E3D5] shadow-2xs hover:border-smotiva-blue hover:shadow-brand-card transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF8EF] border border-[#E8E3D5] flex items-center justify-center text-smotiva-blue">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-smotiva-carbon">
                      {arch.title}
                    </h3>
                  </div>

                  <div className="space-y-3.5 font-body text-xs sm:text-sm">
                    <div>
                      <span className="font-heading font-bold uppercase tracking-wider text-neutral-400 text-[11px] block mb-1">
                        The Current Situation:
                      </span>
                      <p className="text-neutral-700 leading-relaxed">
                        {arch.situation}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF8EF] border border-[#E8E3D5] text-smotiva-coral">
                      <span className="font-heading font-bold uppercase tracking-wider text-[10px] block mb-0.5">
                        Commercial Pain Point:
                      </span>
                      <p className="text-xs text-neutral-700 leading-relaxed">
                        {arch.pain}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF8EF] border border-smotiva-blue/40 text-smotiva-blue">
                      <span className="font-heading font-bold uppercase tracking-wider text-[10px] block mb-0.5">
                        The Systemic Smotiva Transformation:
                      </span>
                      <p className="text-xs text-smotiva-carbon font-medium leading-relaxed">
                        {arch.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8E3D5] flex items-center justify-between">
                  <span className="text-xs font-body text-neutral-500">
                    Proven ROI in under 90 days
                  </span>
                  <button
                    onClick={onStartProject}
                    className="inline-flex items-center gap-1 text-xs font-heading font-bold text-smotiva-blue hover:text-smotiva-coral transition-colors"
                  >
                    <span>Discuss Transformation</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
