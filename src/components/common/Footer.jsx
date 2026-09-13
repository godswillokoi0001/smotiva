// src/components/common/Footer.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, MapPin, Mail, Phone, Globe } from 'lucide-react';
import SmotivaLogo, { SmotivaSymbol } from './SmotivaLogo';
import ThemeToggle from './ThemeToggle';

export default function Footer({ onOpenProjectModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-smotiva-carbon text-white pt-20 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section: Brand Statement & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          <div className="lg:col-span-7 space-y-6">
            <SmotivaLogo variant="light" symbolSize={38} showTagline={true} />
            
            <p className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white font-medium tracking-tight max-w-xl leading-snug">
              Good businesses deserve to be seen properly.
            </p>
            
            <p className="font-body text-neutral-400 text-sm sm:text-base max-w-lg leading-relaxed">
              Smotiva is a Digital Brand Growth Partner. We align brand strategy, 
              identity design, digital platforms, and ongoing communication into one clear, high-impact system.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end space-y-6">
            <div className="text-left lg:text-right">
              <span className="font-heading text-xs uppercase tracking-widest text-smotiva-coral font-bold block mb-2">
                Have an ambitious vision?
              </span>
              <p className="text-sm text-neutral-400 max-w-sm">
                Let's talk about where your brand is today and where it needs to be.
              </p>
            </div>

            <button
              onClick={onOpenProjectModal}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-smotiva-blue text-white font-heading font-bold text-sm hover:bg-smotiva-coral transition-all shadow-brand-card hover:shadow-brand-hover group"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Middle Section: Navigation & Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 py-14 border-b border-neutral-800 text-sm">
          {/* Col 1: System */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-neutral-400">
              The System
            </h4>
            <ul className="space-y-2.5 font-body text-neutral-300">
              <li>
                <NavLink to="/projects" className="hover:text-smotiva-coral transition-colors">
                  Selected Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-smotiva-coral transition-colors">
                  Four-Pillar Architecture
                </NavLink>
              </li>
              <li>
                <NavLink to="/approach" className="hover:text-smotiva-coral transition-colors">
                  The Smotiva Process
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-smotiva-coral transition-colors">
                  About & Philosophy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-neutral-400">
              Services
            </h4>
            <ul className="space-y-2.5 font-body text-neutral-300">
              <li>
                <NavLink to="/services#brand" className="hover:text-smotiva-coral transition-colors">
                  01 — Brand Identity
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#communicate" className="hover:text-smotiva-coral transition-colors">
                  02 — Visual Communication
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#build" className="hover:text-smotiva-coral transition-colors">
                  03 — Web & Platforms
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#grow" className="hover:text-smotiva-coral transition-colors">
                  04 — Growth & Direction
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Col 3: Presence & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-neutral-400">
              Presence
            </h4>
            <div className="space-y-2 font-body text-neutral-300 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-smotiva-blue shrink-0 mt-0.5" />
                <span>Abuja, Federal Capital Territory, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-smotiva-blue shrink-0" />
                <span>Serving enterprises globally</span>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Channels */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-neutral-400">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 font-body text-neutral-300">
              <li>
                <a 
                  href="mailto:contact@smotiva.com" 
                  className="inline-flex items-center gap-2 hover:text-smotiva-coral transition-colors"
                >
                  <Mail size={15} className="text-smotiva-blue" />
                  <span>contact@smotiva.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+2348000000000" 
                  className="inline-flex items-center gap-2 hover:text-smotiva-coral transition-colors"
                >
                  <Phone size={15} className="text-smotiva-blue" />
                  <span>+234 (0) 800 SMOTIVA</span>
                </a>
              </li>
              <li className="pt-2">
                <NavLink 
                  to="/contact" 
                  className="text-xs font-heading font-bold text-smotiva-coral hover:underline inline-flex items-center gap-1"
                >
                  View Inquiry Form <ArrowUpRight size={14} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Philosophy, Copyright & Theme Switcher */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-white">SMOTIVA</span>
            <span>—</span>
            <span className="tracking-wide">Think clearly. Know your reason. Execute creatively.</span>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle variant="pill" showLabel={true} className="text-[11px] py-1 px-3" />
            <div>
              © {currentYear} Smotiva. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
