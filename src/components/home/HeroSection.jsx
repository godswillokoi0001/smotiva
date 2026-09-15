// src/components/home/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, Sparkles, Clock, Globe, Layers, Check } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { SmotivaSymbol, SmotivaAppIcon } from '../common/SmotivaLogo';

export default function HeroSection({ onStartProject, onExploreWork }) {
  const { isDark } = useTheme();
  const [currentTime, setCurrentTime] = useState('');

  // Live time indicator in Abuja (WAT - West Africa Time, UTC+1)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in WAT (UTC+1)
      const options = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToDisciplines = () => {
    const elem = document.getElementById('disciplines');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-20 lg:pb-28 border-b border-smotiva-border dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Editorial Copy Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Live Studio Availability Badge */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border text-xs font-heading font-medium tracking-wide text-neutral-600 dark:text-neutral-300 border-smotiva-border dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-smotiva-coral opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-smotiva-coral" />
              </span>
              <span className="font-semibold text-smotiva-charcoal dark:text-white">
                Abuja, Nigeria
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">|</span>
              <span className="font-mono text-neutral-500 dark:text-neutral-400">
                {currentTime ? `${currentTime} WAT` : 'Active Studio'}
              </span>
              <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">|</span>
              <span className="hidden sm:inline text-neutral-500 dark:text-neutral-400">
                Accepting Q2/Q3 Engagements
              </span>
            </div>

            {/* Main Typographic Display Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-smotiva-charcoal dark:text-white leading-[1.07]">
              We build digital presence for businesses with something real to prove.
            </h1>

            {/* Clear, Grounded Subheading */}
            <p className="font-body text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed font-normal">
              Smotiva is a digital growth partner. We combine brand identity, bespoke digital flagships, and high-impact visual communication into one coherent commercial system.
            </p>

            {/* Action Buttons */}
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
                onClick={handleScrollToDisciplines}
                className="px-6 py-3.5 rounded-lg border font-heading font-semibold text-sm transition-colors inline-flex items-center gap-2 border-smotiva-border dark:border-neutral-700 text-smotiva-charcoal dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-500 bg-white/50 dark:bg-neutral-900/30"
              >
                <span>Explore 4 disciplines</span>
                <ArrowDown size={14} className="text-neutral-400" />
              </button>

              <button
                id="hero-see-work-btn"
                onClick={onExploreWork}
                className="text-xs font-heading font-semibold text-neutral-500 hover:text-smotiva-blue dark:hover:text-white transition-colors py-2 px-1"
              >
                View selected work ↓
              </button>
            </div>

            {/* Editorial Reassurance Metrics */}
            <div className="pt-6 border-t border-smotiva-border dark:border-neutral-800 grid grid-cols-3 gap-4 max-w-xl text-xs font-body text-neutral-500 dark:text-neutral-400">
              <div>
                <span className="font-heading font-bold text-sm text-smotiva-charcoal dark:text-white block">
                  4 Disciplines
                </span>
                <span>Unified under 1 roof</span>
              </div>
              <div>
                <span className="font-heading font-bold text-sm text-smotiva-charcoal dark:text-white block">
                  Sub-Second
                </span>
                <span>Web speed performance</span>
              </div>
              <div>
                <span className="font-heading font-bold text-sm text-smotiva-charcoal dark:text-white block">
                  Zero Bloat
                </span>
                <span>Direct access to senior craft</span>
              </div>
            </div>

          </div>

          {/* Editorial Visual Scorecard & Craft Preview */}
          <div className="lg:col-span-4 self-stretch flex flex-col justify-between pt-2">
            <div className="border rounded-2xl p-6 sm:p-7 transition-colors border-smotiva-border dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-6 shadow-xs">
              
              {/* Studio Identifier Header */}
              <div className="flex items-center justify-between border-b pb-4 border-smotiva-border dark:border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <SmotivaSymbol size={24} variant="coral" />
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-smotiva-charcoal dark:text-white">
                    Smotiva OS
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-smotiva-cream dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                  v2.4
                </span>
              </div>

              {/* 4 Disciplines Interactive Peek */}
              <div className="space-y-3">
                <span className="text-[11px] font-heading font-semibold tracking-widest uppercase text-neutral-400 block">
                  Synchronized Capabilities
                </span>
                
                <div className="space-y-2 text-sm font-body">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-smotiva-cream/70 dark:bg-neutral-800/40 border border-smotiva-border/60 dark:border-neutral-800/60">
                    <span className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-smotiva-charcoal dark:text-white">
                      <span className="w-2 h-2 rounded-full bg-smotiva-blue" />
                      01. Brand Architecture
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">Identity Systems</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-smotiva-cream/70 dark:bg-neutral-800/40 border border-smotiva-border/60 dark:border-neutral-800/60">
                    <span className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-smotiva-charcoal dark:text-white">
                      <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
                      02. Digital Flagships
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">Web & Platforms</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-smotiva-cream/70 dark:bg-neutral-800/40 border border-smotiva-border/60 dark:border-neutral-800/60">
                    <span className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-smotiva-charcoal dark:text-white">
                      <span className="w-2 h-2 rounded-full bg-smotiva-gold" />
                      03. Visual Content
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">Pitch & Media</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-smotiva-cream/70 dark:bg-neutral-800/40 border border-smotiva-border/60 dark:border-neutral-800/60">
                    <span className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-smotiva-charcoal dark:text-white">
                      <span className="w-2 h-2 rounded-full bg-smotiva-charcoal dark:bg-white" />
                      04. Digital Growth
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">Market Strategy</span>
                  </div>
                </div>
              </div>

              {/* Brand App Icon Variants Showcase */}
              <div className="pt-2 border-t border-smotiva-border dark:border-neutral-800">
                <span className="text-[10px] font-heading font-semibold tracking-wider uppercase text-neutral-400 block mb-2.5">
                  Design System Execution
                </span>
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-smotiva-cream dark:bg-neutral-800/60 border border-smotiva-border dark:border-neutral-700">
                  <div className="flex items-center gap-2.5">
                    <SmotivaAppIcon variant="coral" size={36} badgeText="8+" />
                    <SmotivaAppIcon variant="blue" size={36} badgeText="8+" />
                    <SmotivaAppIcon variant="gold" size={36} badgeText="8+" />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-neutral-400 block">Status</span>
                    <span className="text-xs font-heading font-bold text-smotiva-blue dark:text-white">Active Growth</span>
                  </div>
                </div>
              </div>

              {/* Studio Direct Credo */}
              <div className="pt-1 border-t border-smotiva-border dark:border-neutral-800">
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-body italic">
                  "Not just making things look better — making brands make commercial sense."
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
