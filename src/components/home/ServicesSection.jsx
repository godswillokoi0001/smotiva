// src/components/home/ServicesSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Layers, MessageSquare, Monitor, TrendingUp, Sparkles } from 'lucide-react';
import { servicesSystem } from '../../data/brandData';

export default function ServicesSection({ onStartProject }) {
  const [selectedPillar, setSelectedPillar] = useState('01');

  const icons = {
    '01': Layers,
    '02': MessageSquare,
    '03': Monitor,
    '04': TrendingUp,
  };

  const activeService = servicesSystem.find(s => s.number === selectedPillar) || servicesSystem[0];

  return (
    <section className="py-24 lg:py-32 bg-[#FAF8EF] border-t border-b border-[#E8E3D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-smotiva-carbon">
            <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
            <span>The Four-Pillar Unified Architecture</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-smotiva-carbon tracking-tight leading-tight">
            Not separate services. <br />
            <span className="text-smotiva-blue">One connected brand system.</span>
          </h2>

          <p className="font-body text-neutral-600 text-lg leading-relaxed">
            Most companies hire four different vendors for their logo, copy, website, and marketing. 
            The result is friction and inconsistency. Smotiva engineers these pillars as 
            interlocking gears of a single growth engine.
          </p>
        </div>

        {/* The System Pipeline Navigation Bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 p-2 bg-[#F4F0E6] rounded-2xl border border-[#E8E3D5]">
          {servicesSystem.map((item) => {
            const Icon = icons[item.number];
            const isSelected = selectedPillar === item.number;

            return (
              <button
                key={item.number}
                onClick={() => setSelectedPillar(item.number)}
                className={`p-4 rounded-xl text-left transition-all relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white shadow-xs border border-[#E8E3D5] text-smotiva-carbon'
                    : 'hover:bg-white/60 text-neutral-600'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-heading text-xs font-bold ${
                      isSelected ? 'text-smotiva-blue' : 'text-neutral-400'
                    }`}>
                      {item.number}
                    </span>
                    <Icon size={18} className={isSelected ? 'text-smotiva-coral' : 'text-neutral-400'} />
                  </div>
                  <div className="font-heading font-bold text-sm sm:text-base">
                    {item.pillar}
                  </div>
                </div>

                <div className="text-[11px] font-body text-neutral-500 mt-1 line-clamp-1">
                  {item.subtitle}
                </div>

                {isSelected && (
                  <motion.div
                    layoutId="service-active-pill"
                    className="absolute -bottom-1 left-4 right-4 h-1 bg-smotiva-coral rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Pillar Focus */}
        <div className="mt-8 bg-white rounded-3xl border border-[#E8E3D5] shadow-brand-card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Col: Core Strategy & Problem */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider bg-smotiva-blue text-white">
                  Pillar {activeService.number}
                </span>
                <span className="text-xs text-neutral-400">•</span>
                <span className="font-heading text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  {activeService.subtitle}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-smotiva-carbon leading-tight">
                {activeService.name}
              </h3>

              <p className="font-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                {activeService.description}
              </p>

              {/* The Friction It Eliminates */}
              <div className="p-4 rounded-2xl bg-[#FAF8EF] border border-[#E8E3D5] space-y-1 text-xs">
                <span className="font-heading font-bold text-smotiva-carbon uppercase tracking-wider block">
                  The Commercial Barrier This Eliminates:
                </span>
                <p className="font-body text-neutral-600 leading-relaxed">
                  {activeService.problemItSolves}
                </p>
              </div>

              {/* Commercial Outcome */}
              <div className="p-4 rounded-2xl bg-[#FAF8EF] border border-smotiva-blue/30 space-y-1 text-xs">
                <span className="font-heading font-bold text-smotiva-blue uppercase tracking-wider block flex items-center gap-1.5">
                  <Sparkles size={14} className="text-smotiva-coral" />
                  Target Commercial Outcome:
                </span>
                <p className="font-body text-neutral-800 font-medium leading-relaxed">
                  {activeService.outcome}
                </p>
              </div>
            </div>

            {/* Right Col: Deliverables & System Connectivity */}
            <div className="lg:col-span-6 bg-[#FAF8EF] p-6 sm:p-8 rounded-2xl border border-[#E8E3D5] space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E3D5]">
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-smotiva-carbon">
                  Deliverable Architecture:
                </h4>
                <span className="text-xs font-body text-neutral-500">
                  Built to scale
                </span>
              </div>

              <ul className="space-y-3.5">
                {activeService.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-smotiva-blue shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-smotiva-carbon font-medium">
                      {deliv}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-[#E8E3D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs font-body text-neutral-500">
                  Synchronized across the entire brand system
                </div>

                <button
                  onClick={onStartProject}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-smotiva-blue text-white font-heading text-xs font-bold hover:bg-smotiva-carbon transition-all shadow-xs"
                >
                  <span>Inquire About {activeService.pillar}</span>
                  <ArrowRight size={14} className="text-smotiva-coral" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
