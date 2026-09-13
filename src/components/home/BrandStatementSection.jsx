// src/components/home/BrandStatementSection.jsx
import React from 'react';
import { SmotivaSymbol } from '../common/SmotivaLogo';

export default function BrandStatementSection() {
  return (
    <section className="py-28 lg:py-40 bg-smotiva-carbon text-white relative overflow-hidden bg-grid-dark border-t border-[#222]">
      {/* Visual Dynamic Shape Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-smotiva-blue/20 rounded-bl-[160px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-smotiva-coral/15 rounded-tr-[140px] pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-12 relative z-10">
        
        {/* Symbol Hub */}
        <div className="inline-flex items-center justify-center p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
          <SmotivaSymbol size={52} variant="coral" />
        </div>

        {/* The 3 Core Philosophical Tenets */}
        <div className="space-y-4 sm:space-y-6">
          <div className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
            THINK CLEARLY.
          </div>
          <div className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-smotiva-coral leading-none">
            KNOW YOUR REASON.
          </div>
          <div className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-smotiva-blue leading-none">
            EXECUTE CREATIVELY.
          </div>
        </div>

        {/* Narrative Anchor */}
        <div className="pt-6 max-w-2xl mx-auto">
          <p className="font-body text-neutral-300 text-base sm:text-lg leading-relaxed">
            The name Smotiva was forged from <strong className="text-white">Smart</strong> (disciplined thinking),{' '}
            <strong className="text-white">Motive</strong> (clear strategic reason), and <strong className="text-white">Innovation</strong> (creative digital execution).{' '}
            We build brand systems that stand the test of time.
          </p>
        </div>

        {/* Architectural Identity Principles */}
        <div className="pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-body text-neutral-400">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="font-heading font-bold text-white block text-sm mb-1">Timeless</span>
            <span>Over temporary trends</span>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="font-heading font-bold text-white block text-sm mb-1">Simple</span>
            <span>Over needless complexity</span>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="font-heading font-bold text-white block text-sm mb-1">Strategic</span>
            <span>Over decorative noise</span>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="font-heading font-bold text-white block text-sm mb-1">Functional</span>
            <span>Across every customer touchpoint</span>
          </div>
        </div>

      </div>
    </section>
  );
}
