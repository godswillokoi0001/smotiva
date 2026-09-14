// src/components/common/Footer.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import SmotivaLogo from './SmotivaLogo';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

export default function Footer({ onOpenProjectModal }) {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  return (
    <footer className={`border-t transition-colors ${
      isDark 
        ? 'bg-smotiva-charcoal border-neutral-800 text-neutral-300' 
        : 'bg-smotiva-cream border-smotiva-border text-smotiva-charcoal'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-inherit">
          {/* Brand & Positioning */}
          <div className="md:col-span-6 space-y-4">
            <SmotivaLogo variant="auto" symbolSize={26} />
            <p className="font-body text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
              Smotiva Digital Ltd is a digital growth partner helping ambitious businesses build stronger brands, better digital experiences and content that gets attention.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenProjectModal}
                className="text-xs font-heading font-semibold text-smotiva-blue hover:underline inline-flex items-center gap-1"
              >
                Start a project with Smotiva →
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-heading font-semibold text-neutral-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <NavLink to="/work" className="hover:text-smotiva-blue transition-colors">
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-smotiva-blue transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-smotiva-blue transition-colors">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-smotiva-blue transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-heading font-semibold text-neutral-400">
              Contact & Social
            </h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <a href="mailto:hello@smotiva.com" className="hover:text-smotiva-blue transition-colors">
                  hello@smotiva.com
                </a>
              </li>
              <li className="text-neutral-500 dark:text-neutral-400 text-xs">
                Abuja, Nigeria
              </li>
              <li className="pt-2 flex items-center gap-4 text-xs font-medium">
                <a 
                  href="https://linkedin.com/company/smotiva" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-smotiva-blue transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://twitter.com/smotivadigital" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-smotiva-blue transition-colors"
                >
                  Twitter / X
                </a>
                <a 
                  href="https://instagram.com/smotivadigital" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-smotiva-blue transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom utility */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <div>
            © {currentYear} Smotiva Digital Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle variant="pill" showLabel={true} />
          </div>
        </div>
      </div>
    </footer>
  );
}

