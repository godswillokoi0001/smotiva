// src/components/home/ProblemSection.jsx
import React from 'react';
import { Unlink, Link2, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { SmotivaSymbol } from '../common/SmotivaLogo';

export default function ProblemSection({ onStartProject }) {
  const fragmentedPillars = [
    {
      title: 'Brand Identity',
      issue: 'Logo created years ago without strict rules, typography hierarchies, or responsive vectors.',
      consequence: 'Feels outdated and inconsistent across modern screens.',
      fix: 'Mathematical geometric system with unified typography, color codes, and usage rules.'
    },
    {
      title: 'Website Architecture',
      issue: 'Built from a generic WordPress or SaaS theme with slow load times and bloated scripts.',
      consequence: 'High bounce rates; prospective enterprise buyers lose confidence.',
      fix: 'Bespoke sub-second digital flagship tailored specifically to your conversion funnel.'
    },
    {
      title: 'Messaging & Pitch',
      issue: 'Copy written in dense technical jargon or empty generic buzzwords.',
      consequence: 'Decision-makers struggle to understand your actual business impact.',
      fix: 'Sharp editorial storytelling that communicates bottom-line value in 5 seconds.'
    },
    {
      title: 'Social & Content',
      issue: 'Disconnected graphic flyers with competing aesthetics and no consistent narrative.',
      consequence: 'Zero accumulated brand recognition; prospective clients scroll past.',
      fix: 'Cohesive content frameworks that turn every post into recognizable brand equity.'
    },
    {
      title: 'Growth & Marketing',
      issue: 'Ad-hoc paid campaigns operating completely disconnected from the product experience.',
      consequence: 'High customer acquisition cost and low post-click conversion.',
      fix: 'Integrated touchpoints guiding traffic seamlessly from initial discovery to signed contract.'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white border-t border-b border-[#E8E3D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-smotiva-carbon">
            <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
            <span>The Diagnostic Reality</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-smotiva-carbon tracking-tight leading-[1.15]">
            Your brand shouldn't feel like <br className="hidden sm:inline" />
            <span className="text-smotiva-coral line-through decoration-neutral-400">five different businesses.</span>
          </h2>

          <p className="font-body text-neutral-600 text-lg leading-relaxed">
            Most businesses do not suffer from a lack of operational quality. They suffer from{' '}
            <strong className="text-smotiva-carbon font-semibold">brand fragmentation</strong>. 
            When your website says one thing, your pitch deck says another, and your social channels look completely unaligned, 
            decision-makers hesitate.
          </p>
        </div>

        {/* The Visual Contrast Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: The 5 Fragmented Channels */}
          <div className="lg:col-span-6 p-7 sm:p-9 rounded-3xl bg-[#FAF8EF] border border-[#E8E3D5] flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8E3D5] mb-6">
                <div className="flex items-center gap-2.5 text-smotiva-coral font-heading font-bold text-base">
                  <Unlink size={20} className="text-smotiva-coral" />
                  <span>The Fragmented Reality</span>
                </div>
                <span className="text-xs font-heading font-bold px-3 py-1 rounded bg-white text-smotiva-coral border border-[#E8E3D5] uppercase tracking-wider">
                  Typical Disconnect
                </span>
              </div>

              <div className="space-y-4">
                {fragmentedPillars.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-[#E8E3D5] shadow-xs">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertTriangle size={15} className="text-smotiva-coral shrink-0" />
                      <h4 className="font-heading font-bold text-sm text-smotiva-carbon">
                        {item.title}
                      </h4>
                    </div>
                    <p className="font-body text-xs text-neutral-600 leading-relaxed">
                      {item.issue}
                    </p>
                    <div className="mt-2 text-[11px] font-semibold text-smotiva-coral font-body">
                      Friction: {item.consequence}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E8E3D5] text-xs text-neutral-500 font-body flex items-center justify-between">
              <span>Result: Value leaks with every unaligned touchpoint.</span>
            </div>
          </div>

          {/* Right: The Smotiva Transformation (ONE COHERENT SYSTEM) */}
          <div className="lg:col-span-6 p-7 sm:p-9 rounded-3xl bg-white border-2 border-smotiva-blue flex flex-col justify-between shadow-brand-card relative overflow-hidden">
            {/* Corner Decorative Curve */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-smotiva-blue/10 rounded-bl-[80px] pointer-events-none -z-0" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-6 border-b border-[#E8E3D5] mb-6">
                <div className="flex items-center gap-2.5 text-smotiva-blue font-heading font-bold text-base">
                  <Link2 size={20} className="text-smotiva-blue" />
                  <span>The Smotiva Solution</span>
                </div>
                <span className="text-xs font-heading font-bold px-3 py-1 rounded bg-smotiva-blue text-white uppercase tracking-wider">
                  One Coherent System
                </span>
              </div>

              <div className="space-y-4">
                {fragmentedPillars.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FAF8EF] border border-[#E8E3D5] shadow-xs">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 size={15} className="text-smotiva-blue shrink-0" />
                      <h4 className="font-heading font-bold text-sm text-smotiva-carbon">
                        {item.title} — Synchronized
                      </h4>
                    </div>
                    <p className="font-body text-xs text-neutral-700 leading-relaxed">
                      {item.fix}
                    </p>
                    <div className="mt-2 text-[11px] font-semibold text-smotiva-blue font-body flex items-center gap-1">
                      <span>✓ Governed by unified design tokens</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-[#E8E3D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-smotiva-carbon font-body font-semibold">
                Result: Unmistakable authority, compounding brand equity.
              </div>

              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-smotiva-blue text-white font-heading text-xs font-bold hover:bg-smotiva-carbon transition-all shadow-xs"
              >
                <span>Synchronize Your Brand</span>
                <ArrowRight size={14} className="text-smotiva-coral" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
