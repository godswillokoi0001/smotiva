// src/components/home/ApproachSection.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Brain, Search, Target, Compass, Sliders, ArrowRight, Check } from 'lucide-react';
import { SmotivaSymbol } from '../common/SmotivaLogo';

export default function ApproachSection({ onStartProject }) {
  const diagnosticPillars = [
    {
      num: '01',
      title: 'What the business stands for',
      desc: 'We unearth the foundational motive, real capability, and genuine commercial value that separates you from market competitors.',
      icon: Target
    },
    {
      num: '02',
      title: 'Who it is trying to reach',
      desc: 'We define the psychological triggers, risk perceptions, and decision criteria of your highest-value target buyers.',
      icon: Search
    },
    {
      num: '03',
      title: 'How it wants to be perceived',
      desc: 'We determine whether your positioning should be authoritative, visionary, technical, or premium, and calibrate the aesthetic to match.',
      icon: Compass
    },
    {
      num: '04',
      title: 'What is currently working',
      desc: 'We protect and reinforce existing commercial advantages, customer trust signals, and proven conversion channels.',
      icon: Check
    },
    {
      num: '05',
      title: 'What is disconnected',
      desc: 'We isolate the exact points where your current branding, website copy, or social channels contradict your operational quality.',
      icon: Sliders
    },
    {
      num: '06',
      title: 'What needs to change',
      desc: 'We establish an actionable blueprint of priorities before writing a single line of code or designing a single graphic.',
      icon: Brain
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#FAF8EF] bg-grid-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-16 border-b border-[#E8E3D5]">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-smotiva-carbon">
              <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
              <span>Diagnostic Intelligence</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-smotiva-carbon tracking-tight leading-tight">
              We don't start with design.
            </h2>

            <p className="font-body text-neutral-600 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Most design agencies rush into Photoshop or Figma to make things "look cool." 
              We believe aesthetic execution without clear strategic reasoning is a waste of capital. 
              We first diagnose your commercial reality.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="p-5 rounded-2xl bg-white border border-[#E8E3D5] shadow-2xs text-xs font-body text-neutral-600 max-w-xs space-y-1.5">
              <div className="font-heading font-bold text-sm text-smotiva-carbon flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-smotiva-blue" />
                The Smotiva Rule:
              </div>
              <p className="font-medium text-smotiva-carbon">
                Think clearly. Know your reason. Execute creatively.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Diagnostic Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diagnosticPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.num}
                className="p-8 rounded-3xl bg-white border border-[#E8E3D5] shadow-2xs hover:border-smotiva-blue hover:shadow-brand-card transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-xs px-2.5 py-1 rounded bg-[#FAF8EF] text-smotiva-blue border border-[#E8E3D5]">
                      Stage {pillar.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#FAF8EF] border border-[#E8E3D5] flex items-center justify-center text-smotiva-blue group-hover:bg-smotiva-blue group-hover:text-white transition-colors">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-smotiva-carbon group-hover:text-smotiva-blue transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="font-body text-sm text-neutral-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-neutral-100 flex items-center text-xs font-heading font-bold text-neutral-400 group-hover:text-smotiva-coral transition-colors">
                  <span>Diagnostic Stage {pillar.num} Cleared</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Execution Callout Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E3D5] shadow-brand-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <SmotivaSymbol size={36} variant="coral" />
            <div>
              <h4 className="font-heading font-bold text-base text-smotiva-carbon">
                Only after clarity is achieved does creative execution begin.
              </h4>
              <p className="font-body text-xs text-neutral-500 mt-0.5">
                Every color, word, interaction, and platform decision is anchored to a proven motive.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <NavLink
              to="/approach"
              className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-smotiva-carbon hover:text-smotiva-coral transition-colors px-3.5 py-2 rounded-xl border border-[#E8E3D5] hover:bg-[#FAF8EF]"
            >
              <span>Explore Methodology</span>
              <ArrowRight size={14} />
            </NavLink>
            <button
              onClick={onStartProject}
              className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-white bg-smotiva-blue hover:bg-smotiva-carbon transition-colors px-5 py-2.5 rounded-xl shadow-xs"
            >
              <span>Diagnose Your Brand</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
