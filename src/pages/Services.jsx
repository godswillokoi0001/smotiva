// src/pages/Services.jsx
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { servicesCategories } from '../data/brandData';
import CtaSection from '../components/home/CtaSection';

export default function Services({ onOpenProjectModal }) {
  return (
    <div className="w-full pt-32 sm:pt-40">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 border-b border-inherit">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-heading font-semibold uppercase tracking-wider text-smotiva-blue">
            Capabilities
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-smotiva-charcoal dark:text-white leading-[1.08]">
            Four disciplines. <br />
            One coordinated partner.
          </h1>
          <p className="font-body text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
            We bring together brand strategy, digital flagships, visual content, and ongoing growth into a unified engine so you don't have to juggle fragmented vendors.
          </p>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-16 border-b border-inherit">
        {servicesCategories.map((service, index) => {
          const accentColors = [
            { tag: 'text-smotiva-blue', check: 'text-smotiva-blue', link: 'text-smotiva-blue' },
            { tag: 'text-smotiva-coral', check: 'text-smotiva-coral', link: 'text-smotiva-coral' },
            { tag: 'text-smotiva-gold', check: 'text-smotiva-gold', link: 'text-smotiva-gold' },
            { tag: 'text-smotiva-blue', check: 'text-smotiva-blue', link: 'text-smotiva-blue' },
          ];
          const currentAccent = accentColors[index % accentColors.length];

          return (
            <div
              key={service.id}
              id={service.id}
              className="p-8 sm:p-12 rounded-2xl border border-smotiva-border dark:border-neutral-800 bg-white dark:bg-neutral-900/30 shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Category Info */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-neutral-400 font-semibold">
                      {service.number}
                    </span>
                    <span className={`text-xs font-heading font-bold uppercase tracking-widest ${currentAccent.tag}`}>
                      {service.tag}
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-smotiva-charcoal dark:text-white">
                    {service.title}
                  </h2>

                  <p className="font-body text-sm font-medium text-neutral-500 dark:text-neutral-400 italic">
                    "{service.oneLiner}"
                  </p>

                  <p className="font-body text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={onOpenProjectModal}
                      className={`text-xs font-heading font-semibold ${currentAccent.link} hover:underline inline-flex items-center gap-1`}
                    >
                      <span>Engage {service.title}</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Capabilities List */}
                <div className="lg:col-span-5 p-6 rounded-xl border border-smotiva-border dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-4">
                  <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-neutral-400">
                    Core Capabilities
                  </h3>

                  <ul className="space-y-3">
                    {service.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-body">
                        <CheckCircle size={15} className={`${currentAccent.check} shrink-0 mt-0.5`} />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <CtaSection onStartProject={onOpenProjectModal} />
    </div>
  );
}
