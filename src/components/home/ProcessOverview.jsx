// src/components/home/ProcessOverview.jsx
import React from 'react';
import { simpleProcess } from '../../data/brandData';

export default function ProcessOverview() {
  return (
    <section className="py-24 sm:py-32 border-b transition-colors border-inherit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-3">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-smotiva-blue">
              04 / Process
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-smotiva-charcoal dark:text-white">
              From idea to reality.
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed">
            A lean, repeatable 4-stage process designed to eliminate guesswork, respect project timelines, and deliver lasting commercial impact.
          </p>
        </div>

        {/* Simple 4-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
          {simpleProcess.map((step, idx) => {
            const stepColors = [
              'text-smotiva-blue',
              'text-smotiva-coral',
              'text-smotiva-gold',
              'text-smotiva-blue',
            ];
            const currentStepColor = stepColors[idx % stepColors.length];

            return (
              <div 
                key={step.step}
                className="p-8 rounded-2xl border border-smotiva-border dark:border-neutral-800 bg-white dark:bg-neutral-900/20 space-y-4 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors shadow-2xs"
              >
                <div className="flex items-baseline justify-between border-b pb-3 border-smotiva-border dark:border-neutral-800">
                  <span className={`text-2xl font-mono font-bold ${currentStepColor}`}>
                    {step.step}
                  </span>
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-neutral-400">
                    Phase
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-smotiva-charcoal dark:text-white">
                  {step.name}
                </h3>

                <p className="font-body text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {step.summary}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
