// src/components/home/BrandRealityGallery.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SmotivaSymbol } from '../common/SmotivaLogo';
import { Sparkles, Globe, Smartphone, Layers, ArrowUpRight } from 'lucide-react';

export default function BrandRealityGallery() {
  const [activeColorway, setActiveColorway] = useState('blue'); // 'blue' | 'carbon' | 'cream'

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8EF] border-b border-[#E8E3D5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white border border-[#E8E3D5] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-smotiva-carbon">
                Real-World Brand Execution
              </span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-smotiva-carbon tracking-tightest leading-tight">
              A brand is not a file. <br />
              <span className="text-smotiva-blue">It is how you exist in the physical and digital world.</span>
            </h2>
          </div>

          <p className="font-body text-neutral-600 text-base max-w-md leading-relaxed">
            From the screen in a client's hand to physical stationery and apparel, every touchpoint adheres to the exact same geometric rules, typography hierarchy, and color tokens.
          </p>
        </div>

        {/* The Editorial Moodboard & Deliverables Grid (Directly mirroring slide 12 & 20) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Apparel / Editorial Lookbook Photo (Col 4) */}
          <div className="md:col-span-4 relative rounded-3xl overflow-hidden bg-smotiva-carbon border border-[#E8E3D5] group min-h-[420px] flex flex-col justify-end shadow-brand-card">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80" 
              alt="Smotiva Brand Ambassador Editorial" 
              className="absolute inset-0 w-full h-full object-cover object-top opacity-85 transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-smotiva-carbon via-smotiva-carbon/40 to-transparent" />
            
            <div className="relative z-10 p-7 text-white space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-smotiva-coral text-[11px] font-heading font-bold uppercase tracking-wider text-white">
                  Tangible Identity
                </span>
                <span className="text-xs text-neutral-300 font-mono">Apparel & Merch</span>
              </div>
              <h3 className="font-heading text-2xl font-bold leading-snug">
                Embroidered Apparel & Editorial Touchpoints
              </h3>
              <p className="font-body text-xs text-neutral-300">
                Crafted with the signature coral vector mark and Lufga display typography.
              </p>
            </div>
          </div>

          {/* Card 2: Center Interactive Core (Col 5) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Top Box: The Typography Specimen Card (Directly from Slide 12/20) */}
            <div className="p-8 rounded-3xl bg-smotiva-blue text-white relative overflow-hidden shadow-brand-card flex flex-col justify-between min-h-[220px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-smotiva-ochre/20 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-start justify-between relative z-10">
                <div>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-blue-200">
                    Primary Display Typography
                  </span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="font-heading text-6xl font-bold tracking-tighter">
                      Aa
                    </span>
                    <span className="font-heading text-3xl font-semibold tracking-tight text-white/90">
                      Lufga
                    </span>
                  </div>
                </div>
                <SmotivaSymbol size={36} variant="white" />
              </div>

              <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between font-heading text-xs tracking-wider text-white/80">
                <span>ABCDEFGHIJKLMN</span>
                <span className="font-mono text-[10px] text-white/60">DISPLAY WEIGHTS 500-800</span>
              </div>
            </div>

            {/* Bottom Box: The Digital Flagship Browser Bar & UI */}
            <div className="p-6 rounded-3xl bg-white border border-[#E8E3D5] shadow-brand-card flex flex-col justify-between flex-1">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E3D5]">
                {/* Browser Dots */}
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-smotiva-coral" />
                  <div className="w-3 h-3 rounded-full bg-smotiva-ochre" />
                  <div className="w-3 h-3 rounded-full bg-neutral-300" />
                </div>
                {/* Address Bar */}
                <div className="px-4 py-1 rounded-full bg-[#FAF8EF] border border-[#E8E3D5] text-xs font-mono text-smotiva-carbon flex items-center gap-2">
                  <Globe size={12} className="text-smotiva-blue" />
                  <span>https://smotiva.com</span>
                </div>
                <span className="text-[11px] font-mono text-neutral-400">SSL 256-BIT</span>
              </div>

              <div className="py-6 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading text-xl font-bold text-smotiva-carbon">
                    High-Velocity Web Systems
                  </h4>
                  <p className="font-body text-xs text-neutral-600 mt-1 max-w-xs">
                    Sub-second load speeds, editorial typography, zero bloated plugins.
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-[#FAF8EF] border border-[#E8E3D5] text-center shrink-0">
                  <span className="font-heading text-2xl font-bold text-smotiva-blue block">99</span>
                  <span className="text-[9px] font-mono uppercase text-neutral-500">Core Web Vitals</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E8E3D5] flex items-center justify-between text-xs font-body text-neutral-500">
                <span>Responsive across all viewports</span>
                <span className="font-heading font-semibold text-smotiva-blue flex items-center gap-1">
                  Engineered Clean <ArrowUpRight size={14} />
                </span>
              </div>
            </div>

          </div>

          {/* Card 3: Right Column Stationery & App Icon (Col 3) */}
          <div className="md:col-span-3 flex flex-col gap-6">
            
            {/* Stationery Box */}
            <div className="p-6 rounded-3xl bg-[#F4F0E6] border border-[#E8E3D5] shadow-brand-card flex flex-col justify-between flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-smotiva-carbon">
                  Corporate Suite
                </span>
                <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
              </div>

              {/* Minimal Business Card Representation */}
              <div className="p-5 rounded-xl bg-white border border-[#E8E3D5] shadow-xs space-y-4 my-2">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-base font-bold text-smotiva-carbon">Smotiva</span>
                  <SmotivaSymbol size={18} variant="coral" />
                </div>
                <div className="space-y-1 font-mono text-[9px] text-neutral-500">
                  <p className="font-bold text-smotiva-blue">DIGITAL BRAND GROWTH</p>
                  <p>hello@smotiva.com</p>
                  <p>Abuja • Lagos • Global</p>
                </div>
              </div>

              <p className="font-body text-xs text-neutral-600 mt-2">
                Premium letterpress card specs on 450gsm tactile cream stock.
              </p>
            </div>

            {/* App Icons Row (Mirroring slide 9, 18) */}
            <div className="p-5 rounded-3xl bg-smotiva-carbon text-white flex items-center justify-between shadow-brand-card">
              <div className="flex items-center gap-3">
                {/* Coral App Icon */}
                <div className="relative w-12 h-12 rounded-2xl bg-smotiva-coral flex items-center justify-center shadow-xs">
                  <SmotivaSymbol size={22} variant="white" />
                  <span className="absolute -top-1.5 -right-1.5 bg-smotiva-carbon text-white font-mono text-[9px] font-bold px-1 py-0.5 rounded-full border border-white/40">
                    8+
                  </span>
                </div>
                {/* Blue App Icon */}
                <div className="relative w-12 h-12 rounded-2xl bg-smotiva-blue flex items-center justify-center shadow-xs">
                  <SmotivaSymbol size={22} variant="white" />
                </div>
                {/* Ochre App Icon */}
                <div className="relative w-12 h-12 rounded-2xl bg-smotiva-ochre flex items-center justify-center shadow-xs">
                  <SmotivaSymbol size={22} variant="white" />
                </div>
              </div>

              <span className="text-[10px] font-mono text-neutral-400 text-right leading-tight">
                Mobile App <br /> Icons
              </span>
            </div>

          </div>

        </div>

        {/* Brand Icon Motif Banner (from presentation slide 9, 18, 20) */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F4F0E6] border border-[#E8E3D5] flex items-center justify-around flex-wrap gap-6 text-smotiva-carbon">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-smotiva-blue flex items-center justify-center text-white font-heading font-bold text-xs">
              01
            </div>
            <span className="font-heading text-sm font-bold">Brand Architecture</span>
          </div>

          <div className="h-6 w-px bg-[#E8E3D5] hidden md:block" />

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-smotiva-coral flex items-center justify-center text-white font-heading font-bold text-xs">
              02
            </div>
            <span className="font-heading text-sm font-bold">Verbal & Visual Messaging</span>
          </div>

          <div className="h-6 w-px bg-[#E8E3D5] hidden md:block" />

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-smotiva-carbon flex items-center justify-center text-white font-heading font-bold text-xs">
              03
            </div>
            <span className="font-heading text-sm font-bold">Bespoke Web Platforms</span>
          </div>

          <div className="h-6 w-px bg-[#E8E3D5] hidden md:block" />

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-smotiva-ochre flex items-center justify-center text-white font-heading font-bold text-xs">
              04
            </div>
            <span className="font-heading text-sm font-bold">Compound Brand Growth</span>
          </div>
        </div>

      </div>
    </section>
  );
}
