// src/components/home/AboutSection.jsx
import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 border-b transition-colors border-inherit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Location */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-smotiva-navy dark:text-smotiva-cyan">
              05 / About Smotiva
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
              A modern digital partner, built for execution.
            </h2>

            <div className="inline-flex items-center gap-2 text-xs font-heading font-medium text-neutral-500 dark:text-neutral-400">
              <MapPin size={14} className="text-smotiva-navy dark:text-smotiva-cyan" />
              <span>Headquartered in Abuja, Nigeria • Serving ambitious brands globally</span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-8 font-body text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <p className="text-lg sm:text-xl font-normal text-neutral-900 dark:text-neutral-100 leading-relaxed">
              Smotiva Digital Ltd is a digital growth partner. We help businesses build and improve their digital presence through strategy, brand identity, digital products, and high-impact content.
            </p>

            <div className="space-y-4">
              <p>
                We do not view ourselves as an outsourced creative shop or a task vendor. We partner with leaders who understand that their digital touchpoints are either expanding their commercial power or silently leaking credibility.
              </p>
              <p>
                As a modern African digital company based in Abuja, Nigeria, our team is young, focused, and deeply execution-oriented. We respect technical precision, typographic discipline, and business metrics. We believe that good businesses deserve to be seen properly—without the bloat, jargon, or guesswork of traditional agencies.
              </p>
            </div>

            {/* Core Pillars / Traits */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-smotiva-border dark:border-neutral-800">
              <div className="space-y-1">
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-smotiva-navy dark:text-smotiva-cyan block">
                  Pillar 01
                </span>
                <span className="text-sm font-heading font-semibold text-smotiva-charcoal dark:text-white">
                  Intelligence
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-smotiva-cyan block">
                  Pillar 02
                </span>
                <span className="text-sm font-heading font-semibold text-smotiva-charcoal dark:text-white">
                  Creativity
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-smotiva-orange block">
                  Pillar 03
                </span>
                <span className="text-sm font-heading font-semibold text-smotiva-charcoal dark:text-white">
                  Execution
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-smotiva-amber block">
                  Pillar 04
                </span>
                <span className="text-sm font-heading font-semibold text-smotiva-charcoal dark:text-white">
                  Business Value
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="text-xs font-heading font-semibold text-smotiva-navy dark:text-smotiva-cyan hover:underline inline-flex items-center gap-1.5"
              >
                <span>Read our full story and philosophy</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
