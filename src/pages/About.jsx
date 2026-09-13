// src/pages/About.jsx
import React from 'react';
import { SmotivaSymbol } from '../components/common/SmotivaLogo';
import FinalCtaSection from '../components/home/FinalCtaSection';

export default function About({ onOpenProjectModal }) {
  return (
    <div className="min-h-screen bg-[#FAF8EF] pt-32 sm:pt-40">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 border-b border-[#E8E3D5]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-smotiva-carbon">
            <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
            <span>About Smotiva</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-smotiva-carbon tracking-tightest leading-tight">
            We exist because good businesses <br />
            <span className="text-smotiva-blue">deserve to be seen properly.</span>
          </h1>

          <p className="font-body text-neutral-600 text-lg sm:text-xl leading-relaxed">
            Smotiva is a Digital Brand Growth Partner based in Abuja, Nigeria, working with 
            enterprises across Africa and globally to build clear, cohesive, and commercially authoritative brand systems.
          </p>
        </div>
      </section>

      {/* The Origin Story & Anatomy */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-smotiva-coral">
              The Founding Observation
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-smotiva-carbon leading-tight">
              A value problem or a communication problem?
            </h2>

            <p className="font-body text-neutral-700 text-base sm:text-lg leading-relaxed">
              We started Smotiva after noticing a recurring tragedy in the business world: 
              exceptional founders and established enterprises doing world-class work in the physical world, 
              yet being completely misrepresented by their digital touchpoints.
            </p>

            <p className="font-body text-neutral-600 text-sm sm:text-base leading-relaxed">
              Their websites took 8 seconds to load. Their logos looked like clip-art from 2012. 
              Their pitch decks were a maze of jargon. Their social media channels looked like 
              they were run by three different people who had never spoken to each other.
            </p>

            <p className="font-body text-neutral-600 text-sm sm:text-base leading-relaxed">
              When high-value clients, institutional partners, or investors looked them up online, 
              they hesitated. Not because the business lacked capability, but because its presentation 
              failed to communicate that capability with authority.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-[#E8E3D5] text-sm sm:text-base font-heading font-bold text-smotiva-carbon shadow-2xs">
              "We realized businesses don't need another generic design agency. They need an architectural partner who can organize their entire digital brand into one coherent system."
            </div>
          </div>

          {/* Right Col: The Name & Anatomy */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-[#E8E3D5] shadow-brand-card space-y-8">
            <div className="text-center pb-6 border-b border-[#E8E3D5]">
              <div className="inline-flex p-4 rounded-2xl bg-[#FAF8EF] border border-[#E8E3D5] mb-4">
                <SmotivaSymbol size={52} variant="coral" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-smotiva-carbon">
                The Anatomy of Smotiva
              </h3>
              <p className="font-body text-xs text-neutral-500 mt-1">
                Where clear thinking meets creative execution
              </p>
            </div>

            <div className="space-y-4 font-body text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-[#FAF8EF] border border-[#E8E3D5]">
                <span className="font-heading font-bold text-sm text-smotiva-blue block mb-1">
                  SMART
                </span>
                <p className="text-neutral-600 leading-relaxed">
                  Disciplined analysis, strategic diagnosis, and rigorous commercial understanding before any creative work.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8EF] border border-[#E8E3D5]">
                <span className="font-heading font-bold text-sm text-smotiva-coral block mb-1">
                  MOTIVE
                </span>
                <p className="text-neutral-600 leading-relaxed">
                  Knowing your reason. Every brand choice, color decision, and paragraph exists for an intentional commercial purpose.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8EF] border border-[#E8E3D5]">
                <span className="font-heading font-bold text-sm text-smotiva-ochre block mb-1">
                  INNOVATION
                </span>
                <p className="text-neutral-600 leading-relaxed">
                  High-craft execution, modern web architecture, and distinct visual systems that elevate market stature.
                </p>
              </div>
            </div>

            <div className="pt-2 text-center text-xs font-mono font-bold text-neutral-500 tracking-wider">
              SMART + MOTIVE + INNOVATION = SMOTIVA
            </div>
          </div>

        </div>
      </section>

      {/* The Geometric Mark Story */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 border-t border-[#E8E3D5]">
        <div className="p-8 sm:p-14 rounded-3xl bg-smotiva-carbon text-white shadow-brand-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-smotiva-blue/20 rounded-bl-[180px] pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-smotiva-coral">
              The Official Mark
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              The Geometric Convergence System
            </h2>

            <p className="font-body text-neutral-300 text-base sm:text-lg leading-relaxed">
              The Smotiva mark represents four distinct geometric forms converging around a central negative-space hub. 
              It symbolizes how fragmented commercial touchpoints—identity, communication, digital web platforms, and growth strategy—align into one unified, high-performance brand.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs font-body">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="font-heading font-bold text-white block text-sm mb-1">Clarity</span>
                <span className="text-neutral-400">Removing noise</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="font-heading font-bold text-white block text-sm mb-1">Structure</span>
                <span className="text-neutral-400">Stable rules</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="font-heading font-bold text-white block text-sm mb-1">Movement</span>
                <span className="text-neutral-400">Forward velocity</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="font-heading font-bold text-white block text-sm mb-1">Unity</span>
                <span className="text-neutral-400">One system</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <FinalCtaSection onStartProject={onOpenProjectModal} />
    </div>
  );
}
