// src/components/common/ThemeToggle.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ 
  showLabel = false, 
  variant = 'header', // 'header' | 'pill'
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
        aria-label={`Current theme is ${theme}. Switch to ${isDark ? 'light' : 'dark'} mode.`}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-heading font-medium transition-colors border ${
          isDark 
            ? 'bg-smotiva-darkSurface text-neutral-200 border-smotiva-darkBorder hover:border-smotiva-cyan hover:text-white' 
            : 'bg-white text-smotiva-charcoal border-smotiva-border hover:border-smotiva-navy hover:text-smotiva-navy'
        } ${className}`}
      >
        <div className="relative w-3.5 h-3.5 flex items-center justify-center">
          <motion.div
            initial={false}
            animate={{ 
              rotate: isDark ? 90 : 0,
              scale: isDark ? 0 : 1,
              opacity: isDark ? 0 : 1
            }}
            transition={{ duration: 0.15 }}
            className="absolute"
          >
            <Sun size={14} className="text-smotiva-amber" />
          </motion.div>
          <motion.div
            initial={false}
            animate={{ 
              rotate: isDark ? 0 : -90,
              scale: isDark ? 1 : 0,
              opacity: isDark ? 1 : 0
            }}
            transition={{ duration: 0.15 }}
            className="absolute"
          >
            <Moon size={14} className="text-smotiva-cyan" />
          </motion.div>
        </div>
        <span>{isDark ? 'Dark Mode' : 'Light Mode'}</span>
      </button>
    );
  }

  // Compact toggle for Header bar
  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`p-2 rounded border transition-colors flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-smotiva-navy ${
        isDark
          ? 'bg-smotiva-darkSurface border-smotiva-darkBorder text-neutral-300 hover:text-white hover:border-smotiva-cyan'
          : 'bg-white border-smotiva-border text-neutral-700 hover:text-smotiva-navy hover:border-neutral-400'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
        {isDark ? (
          <Moon size={16} className="text-smotiva-cyan" />
        ) : (
          <Sun size={16} className="text-smotiva-amber" />
        )}
      </div>
    </button>
  );
}

