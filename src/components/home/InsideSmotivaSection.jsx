// src/components/home/InsideSmotivaSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { SmotivaSymbol } from '../common/SmotivaLogo';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InsideSmotivaSection() {
  const principles = [
    {
      title: 'Timeless over trendy',
      desc: 'We reject fleeting digital fads that look dated in twelve months. We build durable brand and digital infrastructure designed to endure for years.',
      number: '01'
    },
    {
      title: 'Simple over complicated',
      desc: 'Complexity is the mask of unclear thinking. We strip away unnecessary noise until only the sharpest, most undeniable commercial truth remains.',
      number: '02'
    },
    {
      title: 'Strategic over decorative',
      desc: 'Every color token, typographic weight, and spatial interval must have a commercial reason. Design is not subjective art; it is business strategy made visible.',
      number: '03'
    },
    {
      title: 'Memorable over familiar',
      desc: 'If your brand resembles everyone else in your sector, you compete purely on price. We carve an unmistakable, commanding category position.',
      number: '04'
    },
    {
      title: 'Functional across every touchpoint',
      desc: 'From an 8-pixel app icon to a high-speed web platform or investor pitch deck, our systems perform flawlessly across every screen.',
      number: '05'
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 border-b border-smotiva-border dark:border-neutral-800 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Two-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left: The Core Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white dark:bg-neutral-900 border border-smotiva-border dark:border-neutral-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-smotiva-charcoal dark:text-white">
                06 / Inside Smotiva
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-smotiva-charcoal dark:text-white leading-tight tracking-tight">
              Every strong brand starts with a question.
            </h2>

            <div className="space-y-4 font-body text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed pt-2">
              <p className="text-neutral-500 italic">
                Not "What should our logo look like?"
              </p>
              <p className="font-heading text-2xl font-bold text-smotiva-blue">
                "What should people feel when they experience our brand?"
              </p>
              <p className="pt-2">
                For Smotiva, the answer was never superficial aesthetics alone. <br className="hidden sm:inline" />
                It was <strong className="text-smotiva-charcoal dark:text-white font-bold">Clarity. Structure. Purpose.</strong>
              </p>
            </div>
          </div>

          {/* Right: Design Intent Callout */}
          <div className="lg:col-span-6 bg-white dark:bg-neutral-900/60 p-8 sm:p-10 rounded-3xl border border-smotiva-border dark:border-neutral-800 shadow-xs space-y-6 relative">
            <div className="flex items-center justify-between border-b border-smotiva-border dark:border-neutral-800 pb-5">
              <h3 className="font-heading text-2xl font-bold text-smotiva-charcoal dark:text-white">
                Design Intent Followed
              </h3>
              <SmotivaSymbol size={28} variant="coral" />
            </div>

            <p className="font-body text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
              Every client system we construct is guided by five fundamental, uncompromising principles. These principles become the filter for every layout, sentence, and line of code.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-heading text-xs font-bold text-smotiva-blue hover:text-smotiva-coral transition-colors group"
              >
                <span>Read our full strategic story and team background</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, idx) => (
            <div
              key={item.number}
              className={`p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-smotiva-border dark:border-neutral-800 shadow-xs hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-xs font-bold px-2.5 py-1 rounded bg-smotiva-cream dark:bg-neutral-800 text-smotiva-blue border border-smotiva-border dark:border-neutral-700">
                    {item.number}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-smotiva-coral/10 flex items-center justify-center text-smotiva-coral">
                    <Check size={12} strokeWidth={3} />
                  </div>
                </div>

                <h4 className="font-heading text-xl font-bold text-smotiva-charcoal dark:text-white mb-3">
                  {item.title}
                </h4>

                <p className="font-body text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-smotiva-coral" />
                <span className="font-body text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Smotiva Standard
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
