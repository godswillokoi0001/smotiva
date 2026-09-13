// src/pages/Services.jsx
import React from 'react';
import { ArrowRight, CheckCircle2, Layers, MessageSquare, Monitor, TrendingUp, ArrowDown } from 'lucide-react';
import { servicesSystem } from '../data/brandData';
import FinalCtaSection from '../components/home/FinalCtaSection';

export default function Services({ onOpenProjectModal }) {
  const icons = {
    '01': Layers,
    '02': MessageSquare,
    '03': Monitor,
    '04': TrendingUp,
  };

  return (
    <div className="min-h-screen bg-[#FAF8EF] pt-32 sm:pt-40">
      
      {/* Services Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 border-b border-[#E8E3D5]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-smotiva-carbon">
            <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
            <span>The Four-Pillar Unified System</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-smotiva-carbon tracking-tightest leading-tight">
            We don't sell disconnected tasks. <br />
            <span className="text-smotiva-blue">We build brand infrastructure.</span>
          </h1>

          <p className="font-body text-neutral-600 text-lg sm:text-xl leading-relaxed">
            Most businesses hire one vendor for a logo, a second for copywriting, a third for web development, 
            and a fourth for social media. Smotiva unifies all four disciplines into a singular, synchronized brand growth engine.
          </p>
        </div>

        {/* Quick Jump Links */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          {servicesSystem.map((s) => (
            <a
              key={s.number}
              href={`#pillar-${s.number}`}
              className="px-4 py-2 rounded-xl bg-white border border-[#E8E3D5] hover:border-smotiva-blue text-xs font-heading font-bold text-smotiva-carbon hover:text-smotiva-blue transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <span>{s.number} {s.pillar}</span>
              <ArrowDown size={12} className="text-neutral-400" />
            </a>
          ))}
        </div>
      </section>

      {/* The 4 Pillars Detailed Breakdown */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-20">
        {servicesSystem.map((service) => {
          const Icon = icons[service.number];

          return (
            <div
              key={service.number}
              id={`pillar-${service.number}`}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E8E3D5] shadow-xs scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Col: Strategy & Purpose */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#FAF8EF] border border-[#E8E3D5] flex items-center justify-center text-smotiva-blue shadow-2xs">
                      <Icon size={26} />
                    </div>
                    <div>
                      <span className="text-xs font-heading font-bold text-smotiva-coral uppercase tracking-widest block">
                        Pillar {service.number}
                      </span>
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-smotiva-carbon">
                        {service.name}
                      </h2>
                    </div>
                  </div>

                  <p className="font-heading text-base sm:text-lg text-neutral-600 font-medium leading-relaxed">
                    {service.subtitle}
                  </p>

                  <p className="font-body text-neutral-700 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Problem & Outcome Boxes */}
                  <div className="space-y-3 pt-2">
                    <div className="p-4 rounded-xl bg-[#FAF8EF] border border-[#E8E3D5] text-xs">
                      <span className="font-heading font-bold text-smotiva-coral uppercase tracking-wider block mb-1">
                        Commercial Friction We Eliminate:
                      </span>
                      <p className="font-body text-neutral-600 leading-relaxed">
                        {service.problemItSolves}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF8EF] border border-smotiva-blue/40 text-xs">
                      <span className="font-heading font-bold text-smotiva-blue uppercase tracking-wider block mb-1">
                        Target System Outcome:
                      </span>
                      <p className="font-body text-smotiva-carbon font-medium leading-relaxed">
                        {service.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Col: Detailed Deliverables */}
                <div className="lg:col-span-6 bg-[#FAF8EF] p-7 sm:p-9 rounded-3xl border border-[#E8E3D5] space-y-6">
                  <div className="border-b border-[#E8E3D5] pb-4 flex items-center justify-between">
                    <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-smotiva-carbon">
                      Standard Deliverables Included:
                    </h3>
                    <span className="text-xs font-body text-neutral-500">
                      Fixed-Scope & Systematized
                    </span>
                  </div>

                  <ul className="space-y-3.5">
                    {service.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-smotiva-blue shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-neutral-800 font-medium">
                          {deliv}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-[#E8E3D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <span className="text-xs font-body text-neutral-500">
                      Ready to implement {service.pillar}?
                    </span>
                    <button
                      onClick={onOpenProjectModal}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-smotiva-blue text-white font-heading font-bold text-xs hover:bg-smotiva-carbon transition-all shadow-2xs group"
                    >
                      <span>Engage Pillar {service.number}</span>
                      <ArrowRight size={14} className="text-smotiva-coral transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Final Call to Action */}
      <FinalCtaSection onStartProject={onOpenProjectModal} />
    </div>
  );
}
