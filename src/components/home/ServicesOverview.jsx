// src/components/home/ServicesOverview.jsx
import React from 'react';
import { servicesCategories } from '../../data/brandData';
import { ArrowRight } from 'lucide-react';

export default function ServicesOverview({ onStartProject }) {
  return (
    <section id="services" className="py-24 sm:py-32 border-b transition-colors border-inherit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-3">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-smotiva-navy dark:text-smotiva-cyan">
              02 / Services
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              What we do.
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed">
            Four focused disciplines aligned into one coordinated partnership. No bloated agency retainers, just high-impact execution.
          </p>
        </div>

        {/* 4 Focused Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
          {servicesCategories.map((service, index) => {
            // Assign presentation brand accent tokens: Blue, Coral, Gold
            const accentColors = [
              { text: 'text-smotiva-blue', dot: 'bg-smotiva-blue' },
              { text: 'text-smotiva-coral', dot: 'bg-smotiva-coral' },
              { text: 'text-smotiva-gold', dot: 'bg-smotiva-gold' },
              { text: 'text-smotiva-blue', dot: 'bg-smotiva-blue' },
            ];
            const currentAccent = accentColors[index % accentColors.length];

            return (
              <div 
                key={service.id}
                className="p-8 rounded-2xl border border-smotiva-border dark:border-neutral-800 bg-white dark:bg-neutral-900/30 flex flex-col justify-between space-y-8 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors shadow-2xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-400">
                      {service.number}
                    </span>
                    <span className={`text-xs font-heading font-bold uppercase tracking-widest ${currentAccent.text}`}>
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-smotiva-charcoal dark:text-white">
                    {service.title}
                  </h3>

                  <p className="font-body text-xs font-medium text-neutral-500 dark:text-neutral-400 italic">
                    "{service.oneLiner}"
                  </p>

                  <p className="font-body text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Capabilities List */}
                <div className="pt-4 border-t border-smotiva-border dark:border-neutral-800 space-y-2">
                  <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-neutral-400 block">
                    Includes
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400 font-body">
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${currentAccent.dot}`} />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Conversion Link */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-body text-neutral-500 dark:text-neutral-400">
            Unsure which capabilities your project requires? We diagnose your exact bottlenecks first.
          </p>
          <button
            onClick={onStartProject}
            className="text-xs font-heading font-semibold text-smotiva-navy dark:text-smotiva-cyan hover:underline inline-flex items-center gap-1.5 shrink-0"
          >
            <span>Discuss your requirements</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
