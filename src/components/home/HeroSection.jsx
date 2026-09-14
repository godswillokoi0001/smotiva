// src/components/home/HeroSection.jsx
import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { SmotivaAppIcon } from '../common/SmotivaLogo';

export default function HeroSection({ onStartProject, onExploreWork }) {
  const { isDark } = useTheme();

  return (
    <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-20 lg:pb-28 border-b transition-colors border-inherit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-heading font-medium tracking-wide uppercase text-neutral-600 dark:text-neutral-400 border-smotiva-border dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50">
              <span className="w-2 h-2 rounded-full bg-smotiva-coral animate-pulse" />
              <span>Digital Growth Partner — Abuja, Nigeria</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-smotiva-charcoal dark:text-white leading-[1.06]">
              WE BUILD DIGITAL BRANDS THAT MOVE.
            </h1>

            <p className="font-body text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed font-normal">
              Smotiva helps ambitious businesses build stronger brands, better digital experiences and content that gets attention.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="hero-start-project-btn"
                onClick={onStartProject}
                className="px-7 py-3.5 rounded-lg bg-smotiva-blue text-white font-heading font-semibold text-sm hover:opacity-95 transition-opacity inline-flex items-center gap-2.5 shadow-sm"
              >
                <span>Start a project</span>
                <ArrowRight size={16} />
              </button>

              <button
                id="hero-see-work-btn"
                onClick={onExploreWork}
                className="px-7 py-3.5 rounded-lg border font-heading font-semibold text-sm transition-colors inline-flex items-center gap-2 border-smotiva-border dark:border-neutral-700 text-smotiva-charcoal dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-500 bg-white/50 dark:bg-neutral-900/30"
              >
                <span>See our work</span>
                <ArrowDown size={15} className="text-neutral-400" />
              </button>
            </div>
          </div>

          {/* Editorial Visual Pillar / Overview Panel with Presentation Assets */}
          <div className="lg:col-span-4 self-stretch flex flex-col justify-between pt-2">
            <div className="border rounded-2xl p-6 transition-colors border-smotiva-border dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-6 shadow-xs">
              <div>
                <span className="text-[11px] font-heading font-semibold tracking-widest uppercase text-neutral-400">
                  Capabilities & Craft
                </span>
                <div className="mt-3 space-y-2.5 text-sm font-body">
                  <div className="flex items-center justify-between border-b pb-2 border-smotiva-border/70 dark:border-neutral-800/70">
                    <span className="inline-flex items-center gap-2 text-smotiva-charcoal dark:text-neutral-300 font-medium">
                      <span className="w-2 h-2 rounded-full bg-smotiva-blue" />
                      01. Brand
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">Identity & Systems</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2 border-smotiva-border/70 dark:border-neutral-800/70">
                    <span className="inline-flex items-center gap-2 text-smotiva-charcoal dark:text-neutral-300 font-medium">
                      <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
                      02. Digital
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">Web & Platforms</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2 border-smotiva-border/70 dark:border-neutral-800/70">
                    <span className="inline-flex items-center gap-2 text-smotiva-charcoal dark:text-neutral-300 font-medium">
                      <span className="w-2 h-2 rounded-full bg-smotiva-gold" />
                      03. Content
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">Graphics & Video</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-smotiva-charcoal dark:text-neutral-300 font-medium">
                      <span className="w-2 h-2 rounded-full bg-smotiva-charcoal dark:bg-white" />
                      04. Growth
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">Strategy & Marketing</span>
                  </div>
                </div>
              </div>

              {/* Authentic Brand App Icon Variants from Presentation Slide 8 */}
              <div className="pt-2 border-t border-smotiva-border dark:border-neutral-800">
                <span className="text-[10px] font-heading font-semibold tracking-wider uppercase text-neutral-400 block mb-2.5">
                  Brand Variations & Identifiers
                </span>
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-smotiva-cream dark:bg-neutral-800/50 border border-smotiva-border dark:border-neutral-700">
                  <div className="flex items-center gap-2.5">
                    <SmotivaAppIcon variant="coral" size={38} badgeText="8+" />
                    <SmotivaAppIcon variant="blue" size={38} badgeText="8+" />
                    <SmotivaAppIcon variant="gold" size={38} badgeText="8+" />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-neutral-400 block">Smotiva OS</span>
                    <span className="text-[11px] font-heading font-bold text-smotiva-blue dark:text-white">Active Growth</span>
                  </div>
                </div>
              </div>

              <div className="pt-1 border-t border-smotiva-border dark:border-neutral-800">
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-body">
                  We combine strategic clarity with execution. No disconnected agencies, no generic templates.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
