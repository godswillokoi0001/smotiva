// src/components/home/InsideSmotivaSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { SmotivaSymbol } from '../common/SmotivaLogo';
import { ArrowRight, Check } from 'lucide-react';

export default function InsideSmotivaSection({ onExploreApproach }) {
  const principles = [
    {
      title: 'Timeless over trendy',
      desc: 'We reject fleeting digital fads that look outdated in twelve months. We build durable visual equity designed to endure for a decade.',
      number: '01'
    },
    {
      title: 'Simple over complicated',
      desc: 'Complexity is the mask of unclear thinking. We strip away unnecessary noise until only the sharpest, most undeniable truth remains.',
      number: '02'
    },
    {
      title: 'Strategic over decorative',
      desc: 'Every color token, typographic weight, and spatial hierarchy must have a commercial reason. Design is not art; it is business strategy made visible.',
      number: '03'
    },
    {
      title: 'Memorable over familiar',
      desc: 'If your brand resembles everyone else in your industry, you compete purely on price. We carve an unmistakable, commanding category position.',
      number: '04'
    },
    {
      title: 'Functional across every touchpoint',
      desc: 'From an 8-pixel app icon to a high-speed web platform or investor pitch deck, the system performs flawlessly everywhere.',
      number: '05'
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#FAF8EF] border-t border-b border-[#E8E3D5] overflow-hidden">
      {/* Abstract Geometric Corner Accent inspired by Brand Presentation Slide 2 & 3 */}
      <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-smotiva-blue/10 rounded-bl-[160px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-smotiva-ochre/15 rounded-tr-[120px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Two-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left: The Core Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white border border-[#E8E3D5] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-smotiva-carbon">
                Inside Smotiva
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-smotiva-coral leading-tight tracking-tightest">
              Every strong brand starts with a question.
            </h2>

            <div className="space-y-4 font-body text-lg sm:text-xl text-smotiva-carbon/90 leading-relaxed pt-2">
              <p className="text-neutral-500 italic">
                Not "What should our logo look like?"
              </p>
              <p className="font-heading text-2xl font-bold text-smotiva-blue">
                "What should people feel when they experience our brand?"
              </p>
              <p className="pt-2">
                For Smotiva, the answer was never creativity alone. <br className="hidden sm:inline" />
                It was <strong className="text-smotiva-carbon font-bold">Clarity. Structure. Purpose.</strong>
              </p>
            </div>
          </div>

          {/* Right: Design Intent Callout */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E3D5] shadow-brand-card space-y-6 relative">
            <div className="flex items-center justify-between border-b border-[#E8E3D5] pb-5">
              <h3 className="font-heading text-2xl font-bold text-smotiva-coral">
                Design intent followed
              </h3>
              <SmotivaSymbol size={32} variant="coral" />
            </div>

            <p className="font-body text-neutral-700 leading-relaxed">
              Both visual directions and every client system we construct are guided by five fundamental, uncompromising principles. These principles became the foundation for every design decision.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreApproach}
                className="inline-flex items-center gap-2 font-heading text-sm font-bold text-smotiva-blue hover:text-smotiva-coral transition-colors group"
              >
                <span>Read our full strategic framework</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className={`p-8 rounded-2xl bg-white border border-[#E8E3D5] shadow-2xs hover:shadow-brand-card transition-all duration-300 flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-xs font-bold px-2.5 py-1 rounded bg-[#FAF8EF] text-smotiva-blue border border-[#E8E3D5]">
                    {item.number}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-smotiva-coral/10 flex items-center justify-center text-smotiva-coral">
                    <Check size={12} strokeWidth={3} />
                  </div>
                </div>

                <h4 className="font-heading text-xl sm:text-2xl font-bold text-smotiva-carbon mb-3">
                  {item.title}
                </h4>

                <p className="font-body text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-smotiva-coral" />
                <span className="font-body text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  Smotiva Standard
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
