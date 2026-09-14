// src/components/home/CtaSection.jsx
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { SmotivaSymbol } from '../common/SmotivaLogo';

export default function CtaSection({ onStartProject }) {
  return (
    <section className="py-24 sm:py-32 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-smotiva-border dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-10 sm:p-16 lg:p-20 text-center space-y-8 shadow-xs">
          
          {/* Subtle background brand symbol watermark */}
          <div className="absolute -right-8 -bottom-10 opacity-[0.04] dark:opacity-[0.06] pointer-events-none">
            <SmotivaSymbol size={320} color="#0052FF" />
          </div>

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-heading font-semibold uppercase tracking-widest text-smotiva-coral">
              Next Step
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-smotiva-charcoal dark:text-white leading-tight">
              Have something worth building?
            </h2>
            <p className="font-body text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto leading-relaxed">
              Tell us what you're working on. We'll figure out the best way to move it forward.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
            <button
              id="cta-start-project-btn"
              onClick={onStartProject}
              className="px-8 py-4 rounded-xl bg-smotiva-blue text-white font-heading font-semibold text-sm hover:opacity-95 transition-opacity inline-flex items-center gap-2.5 shadow-sm"
            >
              <span>Start a project</span>
              <ArrowRight size={16} />
            </button>

            <a
              href="mailto:hello@smotiva.com"
              className="px-8 py-4 rounded-xl border border-smotiva-border dark:border-neutral-700 font-heading font-semibold text-sm text-smotiva-charcoal dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors inline-flex items-center gap-2 bg-smotiva-cream/50 dark:bg-neutral-800/50"
            >
              <Mail size={16} className="text-smotiva-coral" />
              <span>hello@smotiva.com</span>
            </a>
          </div>

          <div className="pt-6 relative z-10">
            <p className="text-xs font-body text-neutral-400">
              Typical response time within 24 business hours. No spam, no obligation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
