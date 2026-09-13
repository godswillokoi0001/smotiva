// src/components/common/SmotivaLogo.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

/**
 * The Authentic Smotiva Mark:
 * 4 dynamic geometric forms converging around a central circular negative space hub.
 * Based on the official Smotiva Brand Identity Presentation (2026).
 */
export function SmotivaSymbol({ 
  size = 36, 
  className = '', 
  variant = 'coral' // 'coral' (#FF4D4D), 'white' (#FFFFFF), 'blue' (#0057FF), 'black' (#121212)
}) {
  let fillColor = '#FF4D4D'; // Default signature Coral Red from brand guide
  if (variant === 'white' || variant === 'light') fillColor = '#FFFFFF';
  if (variant === 'blue') fillColor = '#0057FF';
  if (variant === 'black' || variant === 'dark') fillColor = '#121212';

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 54 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 ${className}`}
      aria-hidden="true"
    >
      {/* 
        Shape 1: Left Curved Wing hugging the central circular negative hub 
        Left vertical edge: x=4, y=10 to y=38
        Top sloped line to (20, 16)
        Concave circular arc around hub (cx=27, cy=24, r=8) to (20, 32)
        Bottom sloped line back to (4, 38)
      */}
      <path 
        d="M4 11L19 16.5C18.2 18.8 17.8 21.3 17.8 24C17.8 26.7 18.2 29.2 19 31.5L4 37V11Z" 
        fill={fillColor} 
      />

      {/* Shape 2: Top Right Dynamic Forward Triangle */}
      <path 
        d="M26 6L42 14.5L28.5 19C27.4 17.2 26 15.6 24.3 14.4L26 6Z" 
        fill={fillColor} 
      />

      {/* Shape 3: Bottom Right Dynamic Forward Triangle */}
      <path 
        d="M28.5 29L42 33.5L26 42L24.3 33.6C26 32.4 27.4 30.8 28.5 29Z" 
        fill={fillColor} 
      />

      {/* Shape 4: Far Right Forward Lead Triangle */}
      <path 
        d="M39 20L49 24L39 28V20Z" 
        fill={fillColor} 
      />
    </svg>
  );
}

export default function SmotivaLogo({ 
  variant = 'default', // 'default' (blue/black text + coral mark on cream), 'light' (white text + coral/white mark on dark), 'monochrome'
  showTagline = false,
  className = '',
  onClick,
  symbolSize = 34
}) {
  let isThemeDark = false;
  try {
    const themeContext = useTheme();
    isThemeDark = themeContext?.isDark || false;
  } catch {
    // Graceful fallback if rendered outside ThemeProvider
  }

  const isLight = variant === 'light' || isThemeDark;
  const markVariant = variant === 'light' ? 'white' : 'coral';

  return (
    <NavLink 
      to="/" 
      onClick={onClick}
      className={`inline-flex items-center gap-3.5 group cursor-pointer focus:outline-none ${className}`}
      aria-label="Smotiva - Digital Brand Growth Partner Home"
    >
      {/* Authentic Geometric Symbol */}
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <SmotivaSymbol size={symbolSize} variant={markVariant} />
      </div>

      {/* Wordmark with custom inverted triangular dot on the 'i' */}
      <div className="flex flex-col">
        <div className="flex items-center font-heading text-2xl md:text-[28px] font-bold tracking-tight leading-none transition-colors duration-200">
          <span className={isLight ? 'text-white' : 'text-smotiva-carbon group-hover:text-smotiva-blue'}>
            Smot
          </span>
          {/* Custom 'i' with inverted triangle dot from presentation */}
          <span className="relative inline-flex flex-col items-center">
            <svg 
              width="7" 
              height="6" 
              viewBox="0 0 7 6" 
              fill="currentColor" 
              className={`mb-0.5 ${isLight ? 'text-white' : 'text-smotiva-carbon group-hover:text-smotiva-blue'}`}
            >
              <polygon points="0,0 7,0 3.5,6" />
            </svg>
            <span className={isLight ? 'text-white' : 'text-smotiva-carbon group-hover:text-smotiva-blue'}>
              ı
            </span>
          </span>
          <span className={isLight ? 'text-white' : 'text-smotiva-carbon group-hover:text-smotiva-blue'}>
            va
          </span>
        </div>

        {showTagline && (
          <span className={`text-[10px] uppercase font-heading font-bold tracking-widest mt-1 ${
            isLight ? 'text-neutral-400' : 'text-smotiva-muted'
          }`}>
            Digital Brand Growth
          </span>
        )}
      </div>
    </NavLink>
  );
}
