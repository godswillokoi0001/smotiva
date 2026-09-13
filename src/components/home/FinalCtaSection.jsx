// src/components/home/FinalCtaSection.jsx
import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { SmotivaSymbol } from '../common/SmotivaLogo';

export default function FinalCtaSection({ onStartProject }) {
  return (
    <section className="py-24 lg:py-32 bg-[#FAF8EF] border-t border-b border-[#E8E3D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-white border border-[#E8E3D5] p-8 sm:p-14 lg:p-16 shadow-brand-card relative overflow-hidden">
          
          {/* Corner Aesthetic Curve */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-smotiva-blue/10 rounded-bl-[160px] pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-smotiva-ochre/15 rounded-tr-[120px] pointer-events-none -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Col: Messaging */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-smotiva-carbon">
                <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
                <span>Next Decisive Step</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-smotiva-carbon tracking-tightest leading-[1.12]">
                Let’s make your digital presence <br />
                <span className="text-smotiva-blue">make sense.</span>
              </h2>

              <p className="font-body text-neutral-600 text-lg sm:text-xl max-w-2xl leading-relaxed">
                Tell us where your brand is today and where you want it to go. 
                Whether you need a full brand overhaul, an authoritative digital flagship, or complete systemic alignment, 
                we start with a clear, diagnostic conversation.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onStartProject}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-smotiva-blue text-white font-heading font-bold text-base hover:bg-smotiva-carbon transition-all shadow-brand-card hover:shadow-brand-hover group"
                >
                  <span>Start a Project</span>
                  <ArrowRight size={18} className="text-smotiva-coral transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="mailto:contact@smotiva.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border border-[#E8E3D5] text-smotiva-carbon font-heading font-bold text-base hover:bg-[#FAF8EF] transition-all shadow-2xs"
                >
                  <Mail size={16} className="text-smotiva-blue" />
                  <span>contact@smotiva.com</span>
                </a>
              </div>

              {/* Guarantees */}
              <div className="pt-6 border-t border-[#E8E3D5] flex flex-wrap items-center gap-6 text-xs text-neutral-600 font-body">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-smotiva-blue" />
                  <span>Diagnostic response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-smotiva-blue" />
                  <span>Zero generic sales pitch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-smotiva-blue" />
                  <span>Transparent scoping & fixed phases</span>
                </div>
              </div>
            </div>

            {/* Right Col: Quick Snapshot Card */}
            <div className="lg:col-span-4 bg-[#FAF8EF] p-8 rounded-3xl border border-[#E8E3D5] shadow-xs space-y-6">
              <div className="border-b border-[#E8E3D5] pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-bold text-xs uppercase tracking-widest text-neutral-400">
                    Studio Hub
                  </span>
                  <SmotivaSymbol size={22} variant="coral" />
                </div>
                <h4 className="font-heading font-bold text-xl text-smotiva-carbon">
                  Abuja, Nigeria
                </h4>
                <p className="font-body text-xs text-neutral-500 mt-1">
                  Serving high-growth enterprises nationally across Nigeria and globally.
                </p>
              </div>

              <div className="space-y-3 text-xs font-body text-neutral-700">
                <div className="flex items-center gap-2.5">
                  <MapPin size={15} className="text-smotiva-blue shrink-0" />
                  <span>Federal Capital Territory, Nigeria</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={15} className="text-smotiva-blue shrink-0" />
                  <span>contact@smotiva.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={15} className="text-smotiva-blue shrink-0" />
                  <span>+234 (0) 800 SMOTIVA</span>
                </div>
              </div>

              <button
                onClick={onStartProject}
                className="w-full py-3 rounded-xl bg-smotiva-carbon hover:bg-smotiva-blue text-white font-heading font-bold text-xs transition-colors text-center shadow-xs"
              >
                Schedule Diagnostic Call
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
