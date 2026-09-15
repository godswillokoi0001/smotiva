// src/components/home/ProjectDiagnostic.jsx
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Target, Compass, Sparkles } from 'lucide-react';

export default function ProjectDiagnostic({ onStartProject }) {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);

  const scenarios = [
    {
      id: 'brand-repositioning',
      title: 'Repositioning & Visual Authority',
      tagline: 'When your company has outgrown its original logo and look.',
      problem: 'Your real-world operational capability is high, but your branding looks dated or amateur. Prospective enterprise partners or investors struggle to take your pricing seriously.',
      recommendation: 'Complete Visual Identity & Brand Infrastructure',
      disciplines: ['Brand Strategy', 'Logo & Vector Systems', 'Typography & Color Tokens', 'Brand Guidelines'],
      timeline: '3 – 5 Weeks',
      keyOutcome: 'Commanding brand equity that justifies enterprise rates and instills immediate trust.',
      deliverables: [
        'Strategic brand positioning framework',
        'Modern geometric identity system with full vector suite',
        'Design tokens documentation (web, mobile, print)',
        'Corporate stationery & presentation master deck'
      ],
      accentColor: 'text-smotiva-blue',
      badgeColor: 'bg-smotiva-blue/10 text-smotiva-blue',
      borderColor: 'border-smotiva-blue'
    },
    {
      id: 'flagship-digital',
      title: 'Digital Flagship & Web Experience',
      tagline: 'When your website is an embarrassing bottleneck to conversions.',
      problem: 'Your site was built years ago on a bloated template or generic builder. It loads slowly, fails on mobile devices, and conveys nothing about your true commercial quality.',
      recommendation: 'Bespoke Sub-Second Digital Platform',
      disciplines: ['Information Architecture', 'UI/UX Craft', 'High-Performance Web Engineering', 'Conversion Strategy'],
      timeline: '4 – 8 Weeks',
      keyOutcome: 'A fast, bespoke digital flagship that turns passive traffic into qualified inbound inquiries.',
      deliverables: [
        'Audited information architecture & user journeys',
        'Custom interactive responsive interface design',
        'Sub-second load times & technical SEO readiness',
        'Self-serve content management integration'
      ],
      accentColor: 'text-smotiva-coral',
      badgeColor: 'bg-smotiva-coral/10 text-smotiva-coral',
      borderColor: 'border-smotiva-coral'
    },
    {
      id: 'content-collateral',
      title: 'Executive Collateral & Content Systems',
      tagline: 'When your pitch decks and social materials leak credibility.',
      problem: 'Every department is producing conflicting visual materials. Pitch decks look like raw spreadsheets, and social channels lack consistent typographic polish.',
      recommendation: 'Visual Communication & Pitch Systems',
      disciplines: ['Pitch Decks & Investor Kits', 'Editorial Design', 'Motion Graphics', 'Template Toolkits'],
      timeline: '2 – 4 Weeks',
      keyOutcome: 'High-conviction presentation decks and editorial systems that your team can deploy effortlessly.',
      deliverables: [
        'Board-ready investor & B2B sales presentation system',
        'Social media design master templates',
        'Editorial publication & report layout kits',
        'Motion graphic idents and short-form video formats'
      ],
      accentColor: 'text-smotiva-gold',
      badgeColor: 'bg-smotiva-gold/10 text-smotiva-gold',
      borderColor: 'border-smotiva-gold'
    },
    {
      id: 'complete-growth',
      title: 'Comprehensive Digital Partnership',
      tagline: 'When you need a dedicated digital team without agency bloat.',
      problem: 'You need brand authority, continuous web improvements, high-velocity marketing creative, and strategic guidance, but hiring four full-time specialists is inefficient.',
      recommendation: 'Dedicated Growth Stewardship Retainer',
      disciplines: ['Strategy', 'Brand', 'Digital Products', 'Content & Marketing'],
      timeline: 'Quarterly Partnership',
      keyOutcome: 'Direct senior-level execution across all touchpoints with zero management friction.',
      deliverables: [
        'Unified multi-channel brand governance',
        'Continuous web iterations & conversion testing',
        'Priority creative production queue',
        'Monthly strategic growth reviews with leadership'
      ],
      accentColor: 'text-smotiva-blue',
      badgeColor: 'bg-smotiva-blue/10 text-smotiva-blue',
      borderColor: 'border-smotiva-blue'
    }
  ];

  const activeScenario = scenarios[selectedScenarioIndex];

  return (
    <section className="py-24 sm:py-32 border-b border-smotiva-border dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-smotiva-border dark:border-neutral-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-smotiva-coral">
              <Compass size={14} className="text-smotiva-coral" />
              <span>04 / Interactive Diagnostic</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-smotiva-charcoal dark:text-white leading-[1.12]">
              What commercial bottleneck are you solving?
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-md leading-relaxed">
            Select your primary business challenge below to see the recommended scope, timeline, and deliverables we deploy to fix it.
          </p>
        </div>

        {/* Diagnostic Selector & Result Grid */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Challenge Selectors */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
              Select Your Situation
            </span>

            {scenarios.map((scenario, idx) => {
              const isSelected = selectedScenarioIndex === idx;
              return (
                <button
                  key={scenario.id}
                  onClick={() => setSelectedScenarioIndex(idx)}
                  className={`w-full p-5 rounded-2xl text-left border transition-all duration-200 flex flex-col space-y-2 ${
                    isSelected
                      ? 'border-smotiva-blue dark:border-smotiva-blue bg-white dark:bg-neutral-900 shadow-md ring-1 ring-smotiva-blue/20'
                      : 'border-smotiva-border dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/30 hover:bg-white dark:hover:bg-neutral-900/70'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-400 font-medium">
                      0{idx + 1}
                    </span>
                    <span className={`text-[11px] font-heading font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${scenario.badgeColor}`}>
                      {scenario.timeline}
                    </span>
                  </div>
                  <h3 className={`font-heading text-base font-bold ${
                    isSelected ? 'text-smotiva-charcoal dark:text-white' : 'text-neutral-700 dark:text-neutral-300'
                  }`}>
                    {scenario.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-body line-clamp-2">
                    {scenario.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Recommended Scope & Diagnosis Panel */}
          <div className="lg:col-span-7 rounded-3xl border border-smotiva-border dark:border-neutral-800 bg-white dark:bg-neutral-900/80 p-8 sm:p-10 shadow-xs space-y-8">
            
            {/* Top Diagnostic Summary */}
            <div className="space-y-3 border-b border-smotiva-border dark:border-neutral-800 pb-6">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-heading font-bold uppercase tracking-wider ${activeScenario.accentColor}`}>
                  Diagnosis & Strategic Prescription
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-smotiva-charcoal dark:text-white">
                {activeScenario.recommendation}
              </h3>
              <p className="font-body text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {activeScenario.problem}
              </p>
            </div>

            {/* Disciplines Involved */}
            <div className="space-y-3">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-neutral-400 block">
                Disciplines Deployed
              </span>
              <div className="flex flex-wrap gap-2">
                {activeScenario.disciplines.map((d, i) => (
                  <span
                    key={i}
                    className="text-xs font-heading font-medium px-3 py-1 rounded-md bg-smotiva-cream dark:bg-neutral-800 border border-smotiva-border dark:border-neutral-700 text-smotiva-charcoal dark:text-neutral-200"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables Breakdown */}
            <div className="space-y-3">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-neutral-400 block">
                Deliverables Included
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeScenario.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-body text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 size={15} className={`${activeScenario.accentColor} shrink-0 mt-0.5`} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Commercial Outcome */}
            <div className="p-4 rounded-xl bg-smotiva-cream/70 dark:bg-neutral-800/40 border border-smotiva-border dark:border-neutral-700 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-smotiva-charcoal dark:text-white uppercase tracking-wider">
                <Target size={14} className={activeScenario.accentColor} />
                <span>Target Commercial Outcome</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                {activeScenario.keyOutcome}
              </p>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-smotiva-border dark:border-neutral-800">
              <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
                <Clock size={14} className="text-neutral-400" />
                <span>Estimated sprint: {activeScenario.timeline}</span>
              </div>

              <button
                onClick={onStartProject}
                className="w-full sm:w-auto px-7 py-3 rounded-lg bg-smotiva-blue text-white font-heading font-semibold text-xs hover:opacity-95 transition-opacity inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Inquire with this scope</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

