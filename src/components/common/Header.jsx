// src/components/common/Header.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Approach', path: '/approach' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? isDark
              ? 'bg-[#121212]/95 backdrop-blur-md border-b border-[#282828] shadow-md py-3.5'
              : 'bg-[#FAF8EF]/95 backdrop-blur-md border-b border-[#E8E3D5] shadow-xs py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <SmotivaLogo variant={isDark ? 'light' : 'default'} symbolSize={34} />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-body text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-smotiva-blue font-semibold'
                      : isDark
                        ? 'text-neutral-300 hover:text-white'
                        : 'text-neutral-700 hover:text-smotiva-blue'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-smotiva-coral rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Actions: Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-3.5">
            <ThemeToggle />

            <button
              onClick={onOpenProjectModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-smotiva-blue text-white font-heading text-sm font-semibold hover:bg-smotiva-coral transition-all shadow-xs group"
            >
              <span>Start a Project</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white"
              />
            </button>
          </div>

          {/* Mobile Menu Trigger & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2.5">
            <ThemeToggle className="scale-90" />
            <button
              onClick={onOpenProjectModal}
              className="px-3 py-1.5 rounded-lg bg-smotiva-blue text-white font-heading text-xs font-semibold"
            >
              Start Project
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isDark 
                  ? 'text-neutral-200 hover:bg-neutral-800' 
                  : 'text-neutral-800 hover:bg-neutral-200/50'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-[68px] z-30 shadow-xl p-6 md:hidden border-b transition-colors ${
              isDark 
                ? 'bg-[#181818] border-[#2C2C2C] text-white' 
                : 'bg-white border-neutral-200 text-neutral-800'
            }`}
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-heading text-lg py-2 border-b flex items-center justify-between ${
                      isDark ? 'border-[#262626]' : 'border-neutral-100'
                    } ${
                      isActive 
                        ? 'text-smotiva-blue font-bold' 
                        : isDark ? 'text-neutral-200' : 'text-neutral-700'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={18} className="text-neutral-400" />
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-heading text-lg py-2 border-b flex items-center justify-between ${
                  isDark 
                    ? 'border-[#262626] text-neutral-200' 
                    : 'border-neutral-100 text-neutral-700'
                }`}
              >
                <span>Direct Contact</span>
                <ArrowUpRight size={18} className="text-neutral-400" />
              </NavLink>

              {/* Theme Mode Switch Row in Mobile Menu */}
              <div className={`py-3 flex items-center justify-between border-b ${
                isDark ? 'border-[#262626]' : 'border-neutral-100'
              }`}>
                <span className="font-heading text-sm font-semibold">
                  Theme Appearance
                </span>
                <ThemeToggle variant="pill" showLabel={true} />
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProjectModal();
                  }}
                  className="w-full py-3 rounded-lg bg-smotiva-blue text-white font-heading font-semibold text-center text-sm shadow-md"
                >
                  Start a Project
                </button>
                <p className="text-xs text-neutral-500 font-body text-center mt-2">
                  "Good businesses deserve to be seen properly."
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

