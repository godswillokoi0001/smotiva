// src/components/home/WhySmotiva.jsx
import React from 'react';
import { positioningPrinciples } from '../../data/brandData';

export default function WhySmotiva() {
  return (
    <section className="py-24 sm:py-32 border-b transition-colors border-inherit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-3">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-smotiva-coral">
              03 / Positioning
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-smotiva-charcoal dark:text-white">
              How we work differently.
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed">
            We operate as a growth partner, not a task vendor. Every engagement is rooted in commercial reality and long-term utility.
          </p>
        </div>

        {/* 4 Clean Editorial Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 pt-16">
          {positioningPrinciples.map((item, idx) => {
            const hoverBorderColors = [
              'hover:border-smotiva-navy dark:hover:border-smotiva-cyan',
              'hover:border-smotiva-cyan',
              'hover:border-smotiva-orange',
              'hover:border-smotiva-amber',
            ];
            const activeHoverBorder = hoverBorderColors[idx % hoverBorderColors.length];

            return (
              <div 
                key={item.number}
                className={`space-y-4 border-l-2 border-smotiva-border dark:border-neutral-800 pl-6 ${activeHoverBorder} transition-colors`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-neutral-400">
                    {item.number}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-smotiva-charcoal dark:text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="font-body text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
