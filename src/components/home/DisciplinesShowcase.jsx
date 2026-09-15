// src/components/home/DisciplinesShowcase.jsx
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Layers, Globe, Palette, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesCategories } from '../../data/brandData';

export default function DisciplinesShowcase({ onStartProject }) {
  const [activeDiscipline, setActiveDiscipline] = useState(0);

  // Map each service category to its corresponding high-res artwork asset
  const disciplineAssets = [
    {
      id: 'brand',
      image: '/images/services/s1.png',
      icon: Palette,
      accentColor: 'text-smotiva-blue',
      badgeBg: 'bg-smotiva-blue/10 text-smotiva-blue dark:bg-smotiva-blue/20',
      dotColor: 'bg-smotiva-blue',
      borderHover: 'hover:border-smotiva-blue',
      timeline: '2 – 4 Weeks',
      deliverablesHeadline: 'Brand Infrastructure',
    },
    {
      id: 'digital',
      image: '/images/services/s2.png',
      icon: Globe,
      accentColor: 'text-smotiva-coral',
      badgeBg: 'bg-smotiva-coral/10 text-smotiva-coral dark:bg-smotiva-coral/20',
      dotColor: 'bg-smotiva-coral',
      borderHover: 'hover:border-smotiva-coral',
      timeline: '4 – 8 Weeks',
      deliverablesHeadline: 'Flagship Architecture',
    },
    {
      id: 'content',
      image: '/images/services/s3.png',
      icon: Layers,
      accentColor: 'text-smotiva-gold',
      badgeBg: 'bg-smotiva-gold/10 text-smotiva-gold dark:bg-smotiva-gold/20',
      dotColor: 'bg-smotiva-gold',
      borderHover: 'hover:border-smotiva-gold',
      timeline: '2 – 3 Weeks / Retainer',
      deliverablesHeadline: 'Visual Communication',
    },
    {
      id: 'growth',
      image: '/images/services/s4.png',
      icon: TrendingUp,
      accentColor: 'text-smotiva-blue',
      badgeBg: 'bg-smotiva-blue/10 text-smotiva-blue dark:bg-smotiva-blue/20',
      dotColor: 'bg-smotiva-blue',
      borderHover: 'hover:border-smotiva-blue',
      timeline: 'Monthly Stewardship',
      deliverablesHeadline: 'Market Acquisition',
    },
  ];

  const currentCategory = servicesCategories[activeDiscipline] || servicesCategories[0];
  const currentAsset = disciplineAssets[activeDiscipline] || disciplineAssets[0];

  return (
    <section id="disciplines" className="py-24 sm:py-32 border-b border-smotiva-border dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-smotiva-border dark:border-neutral-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-smotiva-blue">
              <span className="w-2 h-2 rounded-full bg-smotiva-blue" />
              <span>01 / Core Capabilities</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-smotiva-charcoal dark:text-white leading-[1.12]">
              Four disciplines. Engineered to work as one.
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-md leading-relaxed">
            Most companies juggle four fragmented agencies. We bring strategy, digital flagships, visual content, and growth into a single coordinated partner.
          </p>
        </div>

        {/* Discipline Navigation Tabs */}
        <div className="pt-8 pb-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {servicesCategories.map((cat, idx) => {
            const asset = disciplineAssets[idx];
            const Icon = asset.icon;
            const isActive = activeDiscipline === idx;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveDiscipline(idx)}
                className={`p-4 sm:p-5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between space-y-3 ${
                  isActive
                    ? 'border-smotiva-blue dark:border-smotiva-blue bg-white dark:bg-neutral-900 shadow-md ring-1 ring-smotiva-blue/20'
                    : 'border-smotiva-border dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/40 hover:bg-white dark:hover:bg-neutral-900/80'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-mono font-medium text-neutral-400">
                    {cat.number}
                  </span>
                  <span className={`p-1.5 rounded-lg ${asset.badgeBg}`}>
                    <Icon size={16} />
                  </span>
                </div>
                <div>
                  <h3 className={`font-heading text-sm sm:text-base font-bold ${
                    isActive ? 'text-smotiva-charcoal dark:text-white' : 'text-neutral-700 dark:text-neutral-300'
                  }`}>
                    {cat.title}
                  </h3>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-body line-clamp-1 mt-0.5">
                    {cat.tag}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Discipline Showcase Panel */}
        <div className="rounded-3xl border border-smotiva-border dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Visual Discipline Artwork */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-smotiva-border dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950 aspect-[16/11] shadow-inner group">
                <img
                  src={currentAsset.image}
                  alt={currentCategory.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="px-3.5 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-mono">
                    Discipline {currentCategory.number} • {currentAsset.deliverablesHeadline}
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md text-xs font-heading font-semibold text-smotiva-charcoal dark:text-white">
                    Est. {currentAsset.timeline}
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Content Breakdown */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-heading font-bold uppercase tracking-wider ${currentAsset.accentColor}`}>
                    {currentCategory.tag}
                  </span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-xs font-mono text-neutral-400">
                    Phase {currentCategory.number}
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-smotiva-charcoal dark:text-white leading-tight">
                  {currentCategory.title}
                </h3>
              </div>

              <p className="font-body text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                {currentCategory.description}
              </p>

              {/* Tangible Deliverables */}
              <div className="pt-2 border-t border-smotiva-border dark:border-neutral-800 space-y-3">
                <span className="text-xs font-heading font-semibold uppercase tracking-wider text-neutral-400 block">
                  Concrete Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentCategory.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-body text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 size={14} className={`${currentAsset.accentColor} shrink-0 mt-0.5`} />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onStartProject}
                  className="px-6 py-3 rounded-lg bg-smotiva-blue text-white font-heading font-semibold text-xs hover:opacity-95 transition-opacity inline-flex items-center gap-2 shadow-xs"
                >
                  <span>Inquire about {currentCategory.title}</span>
                  <ArrowRight size={14} />
                </button>

                <Link
                  to="/services"
                  className="text-xs font-heading font-semibold text-neutral-600 dark:text-neutral-300 hover:text-smotiva-blue dark:hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>View full capability breakdown</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

