// src/components/home/HeroSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, AlertCircle, RefreshCw, Eye } from 'lucide-react';
import { SmotivaSymbol } from '../common/SmotivaLogo';
import { useTheme } from '../../context/ThemeContext';

export default function HeroSection({ onStartProject, onExploreWork }) {
  // Visual Hook State: 'aligned' (Smotiva Coherent System) vs 'fragmented' (Status Quo)
  const [systemMode, setSystemMode] = useState('aligned'); // 'aligned' | 'fragmented'
  const [activeElement, setActiveElement] = useState(null); // for logo rationale interactive exploration
  const { isDark } = useTheme();

  const touchpoints = [
    {
      id: 'brand',
      num: '01',
      name: 'Brand Identity',
      fragmented: { x: -85, y: -70, rotate: -14, label: 'Outdated & Generic Logo', border: '#FF4D4D' },
      aligned: { x: 0, y: -115, rotate: 0, label: 'Mathematical Geometric System', border: '#0057FF' },
      desc: 'Positioning, typography, design tokens'
    },
    {
      id: 'web',
      num: '02',
      name: 'Digital Platform',
      fragmented: { x: 95, y: -50, rotate: 12, label: 'Bloated WordPress Template', border: '#FF4D4D' },
      aligned: { x: 110, y: -35, rotate: 0, label: 'Sub-Second Flagship Platform', border: '#0057FF' },
      desc: 'High-speed UX & conversion architecture'
    },
    {
      id: 'comm',
      num: '03',
      name: 'Communication',
      fragmented: { x: -115, y: 55, rotate: 16, label: 'Impenetrable Technical Jargon', border: '#FF4D4D' },
      aligned: { x: 68, y: 90, rotate: 0, label: 'Crystal-Clear Commercial Pitch', border: '#0057FF' },
      desc: 'Value proposition & sales collateral'
    },
    {
      id: 'growth',
      num: '04',
      name: 'Growth Engine',
      fragmented: { x: 80, y: 75, rotate: -10, label: 'Marketing Running in Silos', border: '#FF4D4D' },
      aligned: { x: -68, y: 90, rotate: 0, label: 'Synchronized Category Authority', border: '#0057FF' },
      desc: 'Compounding brand equity & campaigns'
    }
  ];

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 lg:pb-32 overflow-hidden bg-[#FAF8EF] bg-grid-subtle">
      {/* Editorial Decorative Corner Curves (from presentation cover & outro) */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-smotiva-blue/10 rounded-bl-[180px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-smotiva-ochre/15 rounded-tr-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authoritative Editorial Positioning */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Supertag Label with Coral Red Indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#E8E3D5] shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-smotiva-coral animate-pulse" />
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-smotiva-carbon">
                Digital Brand Growth Partner
              </span>
            </div>

            {/* Main Headline in Lufga Typography */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[64px] font-bold text-smotiva-carbon leading-[1.06] tracking-tightest">
              Good businesses deserve to be{' '}
              <span className="relative inline-block text-smotiva-blue">
                seen properly.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-smotiva-coral" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                  <path d="M0 6C50 2 150 2 200 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Strategic Value Proposition */}
            <p className="font-body text-neutral-700 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Most ambitious companies do not have a capability problem. They have a{' '}
              <strong className="text-smotiva-carbon font-semibold">presentation, communication, and structural coherence problem</strong>.
              Smotiva builds and unifies your brand identity, digital flagship, and messaging into one unmistakable, high-conviction system.
            </p>

            {/* Core Metrics Ribbon */}
            <div className="pt-2 grid grid-cols-3 gap-4 max-w-lg border-y border-[#E8E3D5] py-4">
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-bold text-smotiva-carbon block">100%</span>
                <span className="font-body text-xs text-neutral-600 uppercase tracking-wider">System Fidelity</span>
              </div>
              <div className="border-l border-[#E8E3D5] pl-4">
                <span className="font-heading text-2xl sm:text-3xl font-bold text-smotiva-blue block">&lt;1.0s</span>
                <span className="font-body text-xs text-neutral-600 uppercase tracking-wider">Web Speed</span>
              </div>
              <div className="border-l border-[#E8E3D5] pl-4">
                <span className="font-heading text-2xl sm:text-3xl font-bold text-smotiva-coral block">0 Silos</span>
                <span className="font-body text-xs text-neutral-600 uppercase tracking-wider">Unified Engine</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-smotiva-blue text-white font-heading font-bold text-base hover:bg-smotiva-carbon transition-all shadow-brand-card hover:shadow-brand-hover group"
              >
                <span>Start a Project</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 text-smotiva-coral" />
              </button>

              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white border border-[#E8E3D5] text-smotiva-carbon font-heading font-bold text-base hover:bg-[#F4F0E6] transition-all shadow-2xs"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight size={18} className="text-neutral-500" />
              </button>
            </div>

            <p className="font-body text-xs text-neutral-500 italic">
              "Think clearly. Know your reason. Execute creatively." — Smotiva Foundational Tenet
            </p>
          </div>

          {/* Right Column: The System Convergence Cockpit (Interactive Visual Instrument) */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E3D5] shadow-brand-card">
              
              {/* Cockpit Mode Toggle */}
              <div className="flex items-center justify-between pb-5 border-b border-[#E8E3D5] mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                    Brand Diagnostic Engine
                  </span>
                  <span className="font-heading text-sm font-bold text-smotiva-carbon">
                    {systemMode === 'aligned' ? 'The Smotiva Coherent System' : 'Fragmented Status Quo'}
                  </span>
                </div>

                <div className="flex items-center p-1 rounded-xl bg-[#FAF8EF] border border-[#E8E3D5]">
                  <button
                    onClick={() => setSystemMode('aligned')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold transition-all ${
                      systemMode === 'aligned'
                        ? 'bg-smotiva-blue text-white shadow-xs'
                        : 'text-neutral-600 hover:text-smotiva-carbon'
                    }`}
                  >
                    Aligned
                  </button>
                  <button
                    onClick={() => setSystemMode('fragmented')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold transition-all ${
                      systemMode === 'fragmented'
                        ? 'bg-smotiva-coral text-white shadow-xs'
                        : 'text-neutral-600 hover:text-smotiva-carbon'
                    }`}
                  >
                    Fragmented
                  </button>
                </div>
              </div>

              {/* Dynamic Interactive Stage */}
              <div className="relative h-[340px] flex items-center justify-center overflow-hidden bg-[#FAF8EF] rounded-2xl border border-[#E8E3D5]">
                
                {/* Central Negative Hub Reference Circle */}
                <div className="absolute w-28 h-28 rounded-full border border-dashed border-neutral-300 flex items-center justify-center pointer-events-none" />

                {/* Central Mark */}
                <motion.div
                  animate={{
                    scale: systemMode === 'aligned' ? 1.05 : 0.85,
                    opacity: systemMode === 'aligned' ? 1 : 0.4
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="relative z-20 flex flex-col items-center justify-center cursor-pointer"
                  onClick={() => setSystemMode(systemMode === 'aligned' ? 'fragmented' : 'aligned')}
                >
                  <div className="p-4 rounded-2xl bg-white shadow-md border border-[#E8E3D5]">
                    <SmotivaSymbol 
                      size={54} 
                      variant={systemMode === 'aligned' ? 'coral' : (isDark ? 'white' : 'black')} 
                    />
                  </div>
                  <span className="font-heading text-[11px] font-bold text-smotiva-carbon mt-2 uppercase tracking-wider">
                    {systemMode === 'aligned' ? 'Central Hub of Clarity' : 'Lost In Silos'}
                  </span>
                </motion.div>

                {/* Orbiting / Disconnected Touchpoints */}
                {touchpoints.map((tp) => {
                  const state = systemMode === 'aligned' ? tp.aligned : tp.fragmented;

                  return (
                    <motion.div
                      key={tp.id}
                      animate={{
                        x: state.x,
                        y: state.y,
                        rotate: state.rotate,
                        opacity: 1
                      }}
                      transition={{ type: 'spring', stiffness: 180, damping: 20 }}
                      className="absolute z-30 pointer-events-auto"
                    >
                      <div className={`px-3 py-2 rounded-xl bg-white border shadow-xs transition-all ${
                        systemMode === 'aligned'
                          ? 'border-smotiva-blue/40 shadow-xs'
                          : 'border-smotiva-coral/50 shadow-2xs'
                      }`}>
                        <div className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            systemMode === 'aligned' ? 'bg-smotiva-blue' : 'bg-smotiva-coral'
                          }`} />
                          <span className="font-heading text-xs font-bold text-smotiva-carbon whitespace-nowrap">
                            {tp.name}
                          </span>
                        </div>
                        <p className={`text-[10px] font-body mt-0.5 whitespace-nowrap ${
                          systemMode === 'aligned' ? 'text-neutral-500' : 'text-smotiva-coral font-medium'
                        }`}>
                          {state.label}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Connecting Laser Guidelines when Aligned */}
                {systemMode === 'aligned' && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" stroke="#0057FF" strokeWidth="1" strokeDasharray="3 3" opacity="0.3">
                    <line x1="50%" y1="50%" x2="50%" y2="18%" />
                    <line x1="50%" y1="50%" x2="78%" y2="40%" />
                    <line x1="50%" y1="50%" x2="68%" y2="78%" />
                    <line x1="50%" y1="50%" x2="32%" y2="78%" />
                  </svg>
                )}
              </div>

              {/* Cockpit Status Bar */}
              <div className="mt-5 p-4 rounded-xl bg-[#FAF8EF] border border-[#E8E3D5] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {systemMode === 'aligned' ? (
                    <CheckCircle2 size={16} className="text-smotiva-blue shrink-0" />
                  ) : (
                    <AlertCircle size={16} className="text-smotiva-coral shrink-0" />
                  )}
                  <span className="font-body text-xs text-neutral-700">
                    {systemMode === 'aligned' 
                      ? 'All touchpoints point to one strategic outcome.'
                      : 'Commercial value leaks across disconnected vendors.'}
                  </span>
                </div>
                <button
                  onClick={() => setSystemMode(systemMode === 'aligned' ? 'fragmented' : 'aligned')}
                  className="font-heading text-xs font-bold text-smotiva-blue hover:text-smotiva-coral flex items-center gap-1 transition-colors"
                >
                  <RefreshCw size={12} />
                  <span>Toggle</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
