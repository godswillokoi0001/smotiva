// src/components/common/ThemeToggle.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ 
  showLabel = false, 
  variant = 'header', // 'header' | 'pill' | 'expanded'
  className = '' 
}) {
  const { theme, isDark, toggleTheme } = useTheme();

  if (variant === 'pill' || showLabel) {
    return (
      <button
        onClick={toggleTheme}
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={`Current theme is ${theme}. Switch to ${isDark ? 'light' : 'dark'} theme.`}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-heading font-semibold transition-all border ${
          isDark 
            ? 'bg-[#1E1E1E] text-neutral-200 border-[#333333] hover:border-smotiva-coral hover:text-white' 
            : 'bg-white text-smotiva-carbon border-[#E8E3D5] hover:border-smotiva-blue hover:text-smotiva-blue'
        } ${className}`}
      >
        <div className="relative w-4 h-4 flex items-center justify-center">
          <motion.div
            initial={false}
            animate={{ 
              rotate: isDark ? 180 : 0,
              scale: isDark ? 0 : 1,
              opacity: isDark ? 0 : 1
            }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Sun size={15} className="text-smotiva-ochre" />
          </motion.div>
          <motion.div
            initial={false}
            animate={{ 
              rotate: isDark ? 0 : -180,
              scale: isDark ? 1 : 0,
              opacity: isDark ? 1 : 0
            }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Moon size={15} className="text-smotiva-coral" />
          </motion.div>
        </div>
        <span>{isDark ? 'Dark System' : 'Light Canvas'}</span>
      </button>
    );
  }

  // Default compact icon toggle (perfect for Header bar)
  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative p-2.5 rounded-xl border transition-all duration-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-smotiva-blue/50 ${
        isDark
          ? 'bg-[#1C1C1C] border-[#2E2E2E] text-neutral-300 hover:text-white hover:border-smotiva-blue hover:bg-[#242424] shadow-xs'
          : 'bg-white border-[#E8E3D5] text-neutral-700 hover:text-smotiva-blue hover:border-smotiva-blue hover:bg-[#FAF8EF] shadow-2xs'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        {/* Sun icon for light mode */}
        <motion.div
          key="sun"
          initial={false}
          animate={{
            y: isDark ? -24 : 0,
            opacity: isDark ? 0 : 1,
            rotate: isDark ? 90 : 0,
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="absolute inset-0 flex items-center justify-center text-smotiva-ochre group-hover:rotate-45 transition-transform"
        >
          <Sun size={18} />
        </motion.div>

        {/* Moon icon for dark mode */}
        <motion.div
          key="moon"
          initial={false}
          animate={{
            y: isDark ? 0 : 24,
            opacity: isDark ? 1 : 0,
            rotate: isDark ? 0 : -90,
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="absolute inset-0 flex items-center justify-center text-smotiva-coral group-hover:-rotate-12 transition-transform"
        >
          <Moon size={18} />
        </motion.div>
      </div>
    </button>
  );
}
