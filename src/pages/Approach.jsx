// src/pages/Approach.jsx
import React from 'react';
import { Compass, ShieldCheck, Code, Zap, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';
import { processStages } from '../data/brandData';
import { SmotivaSymbol } from '../components/common/SmotivaLogo';
import FinalCtaSection from '../components/home/FinalCtaSection';

export default function Approach({ onOpenProjectModal }) {
  const stageIcons = {
    '01': Compass,
    '02': ShieldCheck,
    '03': Code,
    '04': Zap,
    '05': RefreshCw,
  };

  const principles = [
    { title: 'Timeless over trendy', desc: 'We build visual systems that endure for decades, not fleeting aesthetic trends that look dated in twelve months.' },
    { title: 'Simple over complicated', desc: 'Clarity is the ultimate sophistication. We ruthlessly remove clutter and jargon to let the real business value shine.' },
    { title: 'Strategic over decorative', desc: 'Every shape, color token, and paragraph must answer a commercial question before being placed on screen.' },
    { title: 'Memorable over familiar', desc: 'We reject generic SaaS clones and template layouts to give your brand a distinct, unmistakable identity.' },
    { title: 'Functional across touchpoints', desc: 'From mobile screens and pitch decks to billboard haulage, the identity behaves consistently everywhere.' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8EF] pt-32 sm:pt-40">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 border-b border-[#E8E3D5]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-smotiva-carbon">
            <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
            <span>The Smotiva Methodology</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-smotiva-carbon tracking-tightest leading-tight">
            Think clearly. <br />
            Know your reason. <br />
            <span className="text-smotiva-blue">Execute creatively.</span>
          </h1>

          <p className="font-body text-neutral-600 text-lg sm:text-xl leading-relaxed">
            Smotiva was built on the conviction that good businesses deserve to be seen properly. 
            Our methodology bridges strategic diagnosis and artistic precision into a repeatable, 
            transparent process.
          </p>
        </div>
      </section>

      {/* Core Diagnostic Thesis */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-[#E8E3D5] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-smotiva-coral">
              The Diagnostic Rule
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-smotiva-carbon leading-tight">
              Why we never jump straight into design.
            </h2>
            <p className="font-body text-neutral-700 text-base sm:text-lg leading-relaxed">
              When an agency starts by designing mockups on day two, they are guessing. 
              They don't know who your most profitable customers are, why deals stall in sales calls, 
              or what makes your business commercially defensible.
            </p>
            <p className="font-body text-neutral-600 text-sm sm:text-base leading-relaxed">
              At Smotiva, design is the physical execution of strategy. 
              We first diagnose the commercial reality of your business, audit every fragmented touchpoint, 
              and build a strategic architecture that positions you as the unquestioned authority in your market.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenProjectModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-smotiva-blue text-white font-heading font-bold text-sm hover:bg-smotiva-carbon transition-all shadow-xs"
              >
                <span>Request Brand Diagnosis</span>
                <ArrowRight size={16} className="text-smotiva-coral" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FAF8EF] p-8 rounded-3xl border border-[#E8E3D5] space-y-5">
            <div className="flex items-center gap-3 border-b border-[#E8E3D5] pb-4">
              <SmotivaSymbol size={26} variant="coral" />
              <div className="font-heading font-bold text-base text-smotiva-carbon">
                The 3 Foundational Pillars
              </div>
            </div>

            <div className="space-y-4 text-xs font-body">
              <div className="p-4 rounded-xl bg-white border border-[#E8E3D5]">
                <div className="font-heading font-bold text-sm text-smotiva-blue mb-1">
                  1. Think Clearly
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  Diagnose truth before aesthetics. Strip away assumptions, audit market realities, and establish clear strategic goals.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E3D5]">
                <div className="font-heading font-bold text-sm text-smotiva-coral mb-1">
                  2. Know Your Reason
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  Define your core commercial differentiator. Why should a sophisticated decision-maker choose you over substitutes?
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E3D5]">
                <div className="font-heading font-bold text-sm text-smotiva-carbon mb-1">
                  3. Execute Creatively
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  Design and engineer world-class digital systems, platforms, and identities that translate strategy into revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 5-Phase Framework */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 border-t border-[#E8E3D5]">
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-smotiva-coral">
            End-to-End Delivery
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-smotiva-carbon">
            The 5-Stage Transformation Framework
          </h2>
          <p className="font-body text-neutral-600 text-base sm:text-lg">
            Every engagement follows a structured, transparent process with fixed milestone reviews.
          </p>
        </div>

        <div className="space-y-8">
          {processStages.map((stage) => {
            const Icon = stageIcons[stage.step];

            return (
              <div
                key={stage.step}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E3D5] shadow-2xs hover:border-smotiva-blue transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-4 space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF8EF] border border-[#E8E3D5] flex items-center justify-center text-smotiva-blue">
                        <Icon size={20} />
                      </div>
                      <span className="font-mono text-xs font-bold text-smotiva-coral uppercase tracking-wider">
                        Phase {stage.step}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-smotiva-carbon">
                      {stage.title}
                    </h3>
                    <div className="p-3 rounded-xl bg-[#FAF8EF] border border-[#E8E3D5] text-xs font-heading font-bold text-neutral-700">
                      Focus Question: "{stage.question}"
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-4">
                    <p className="font-body text-neutral-700 text-sm sm:text-base leading-relaxed">
                      {stage.desc}
                    </p>

                    <div>
                      <span className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-400 block mb-2">
                        Tangible Milestone Deliverables:
                      </span>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {stage.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-body text-neutral-700">
                            <CheckCircle2 size={15} className="text-smotiva-blue shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Brand Design Principles */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 border-t border-[#E8E3D5]">
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-smotiva-coral">
            Guiding Standards
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-smotiva-carbon">
            The Five Principles of Smotiva Systems
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((pr, idx) => (
            <div key={idx} className="p-7 rounded-3xl bg-white border border-[#E8E3D5] shadow-2xs space-y-3">
              <span className="font-mono text-xs font-bold text-smotiva-coral block">
                0{idx + 1}
              </span>
              <h3 className="font-heading font-bold text-lg text-smotiva-carbon">
                {pr.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {pr.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCtaSection onStartProject={onOpenProjectModal} />
    </div>
  );
}
