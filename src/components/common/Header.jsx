// src/components/common/Header.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import SmotivaLogo from './SmotivaLogo';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

export default function Header({ onOpenProjectModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', isHome: true },
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isLinkActive = (link) => {
    if (link.isHome) {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname.startsWith(link.path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 border-b ${
          scrolled
            ? isDark
              ? 'bg-smotiva-charcoal/95 backdrop-blur-md border-neutral-800 py-3.5'
              : 'bg-smotiva-cream/95 backdrop-blur-md border-smotiva-border py-3.5'
            : isDark
              ? 'bg-smotiva-charcoal border-transparent py-4'
              : 'bg-smotiva-cream border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo with presentation-7 lockup: "Smotiva" in Blue + Symbol in Coral */}
          <SmotivaLogo variant="auto" symbolSize={26} />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={`font-body text-sm font-medium transition-colors relative py-1 flex items-center gap-1.5 ${
                    active
                      ? 'text-smotiva-blue font-semibold'
                      : isDark
                        ? 'text-neutral-300 hover:text-white'
                        : 'text-smotiva-charcoal hover:text-smotiva-blue'
                  }`}
                >
                  <span>{link.name}</span>
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-smotiva-coral shrink-0" />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Theme Toggle + Primary CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={onOpenProjectModal}
              className="px-4 py-2 rounded-lg text-sm font-heading font-semibold bg-smotiva-blue text-white hover:bg-smotiva-charcoal dark:hover:bg-white dark:hover:text-smotiva-charcoal transition-colors border border-transparent shadow-xs"
            >
              Start a project
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border transition-colors ${
                isDark 
                  ? 'border-neutral-800 text-neutral-200' 
                  : 'border-smotiva-border text-neutral-800'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className={`fixed inset-x-0 top-[60px] z-30 p-6 md:hidden border-b transition-colors shadow-lg ${
              isDark 
                ? 'bg-smotiva-charcoal border-neutral-800 text-white' 
                : 'bg-smotiva-cream border-smotiva-border text-neutral-900'
            }`}
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const active = isLinkActive(link);
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-heading text-lg py-2 border-b transition-colors flex items-center justify-between ${
                      isDark ? 'border-neutral-800' : 'border-smotiva-border'
                    } ${
                      active 
                        ? 'text-smotiva-blue font-bold' 
                        : isDark ? 'text-neutral-200' : 'text-neutral-800'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && (
                      <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
                    )}
                  </NavLink>
                );
              })}

              <div className="pt-3 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProjectModal();
                  }}
                  className="w-full py-3 rounded-lg bg-smotiva-blue text-white font-heading font-semibold text-center text-sm shadow-xs"
                >
                  Start a project
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


