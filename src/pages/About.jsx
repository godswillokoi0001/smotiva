// src/pages/About.jsx
import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { SmotivaSymbol } from '../components/common/SmotivaLogo';
import CtaSection from '../components/home/CtaSection';
import { useTheme } from '../context/ThemeContext';

export default function About({ onOpenProjectModal }) {
  const { isDark } = useTheme();

  return (
    <div className="w-full pt-32 sm:pt-40">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 border-b border-inherit">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-heading font-semibold uppercase tracking-wider text-smotiva-coral">
            About Smotiva
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-smotiva-charcoal dark:text-white leading-[1.08]">
            Intelligence. Creativity. Execution.
          </h1>
          <p className="font-body text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
            Smotiva Digital Ltd is a digital growth partner that helps ambitious businesses build and improve their digital presence.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 border-b border-inherit">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-7 space-y-6 font-body text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-smotiva-charcoal dark:text-white leading-tight">
              Good businesses deserve to be seen properly.
            </h2>

            <p>
              We founded Smotiva because we kept seeing exceptional companies—businesses with real operations, real clients, and genuine market value—being held back by outdated, fragmented, or generic digital touchpoints.
            </p>

            <p>
              When high-stakes prospective clients, institutional partners, or investors visit a company online, they make decisions in seconds. A disorganized website or inconsistent branding doesn’t just look neglected—it quietly costs revenue and undermines market authority.
            </p>

            <p>
              Smotiva operates as a digital growth partner. We combine brand identity, bespoke digital products, visual communication, video, social content, and digital strategy into one coordinated, high-conviction presence.
            </p>
          </div>

          <div className="lg:col-span-5 p-8 rounded-2xl border border-smotiva-border dark:border-neutral-800 bg-white dark:bg-neutral-900/30 space-y-6 shadow-xs">
            <div className="flex items-center gap-3 border-b pb-4 border-smotiva-border dark:border-neutral-800">
              <SmotivaSymbol size={28} color="#F04C4C" />
              <div>
                <span className="font-heading font-bold text-sm text-smotiva-charcoal dark:text-white block">
                  Smotiva Digital Ltd
                </span>
                <span className="text-xs text-neutral-500 flex items-center gap-1">
                  <MapPin size={12} className="text-smotiva-blue" />
                  Abuja, Nigeria
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-neutral-400 block">
                What guides our work
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm font-body text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="font-mono text-smotiva-navy dark:text-smotiva-cyan font-bold">01.</span>
                  <span><strong>Strategy first:</strong> Diagnose commercial bottlenecks before opening design tools.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-smotiva-cyan font-bold">02.</span>
                  <span><strong>Disciplined craft:</strong> Restrained typography, negative space, and mathematical systems.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-smotiva-orange font-bold">03.</span>
                  <span><strong>Business utility:</strong> Creative execution measured by commercial impact.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-smotiva-amber font-bold">04.</span>
                  <span><strong>Long-term partnership:</strong> Ongoing stewardship as your enterprise expands.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CtaSection onStartProject={onOpenProjectModal} />
    </div>
  );
}
