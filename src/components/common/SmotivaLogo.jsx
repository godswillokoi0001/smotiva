// src/components/common/SmotivaLogo.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

/**
 * Authentic Smotiva Symbol:
 * Four-piece geometric forward-play cluster pointing right with circular negative space core.
 * Extracted directly from Smotiva Brand Conceptualization presentation.
 */
export function SmotivaSymbol({ 
  size = 30, 
  color, 
  className = '',
  variant = 'coral' // 'coral', 'blue', 'cream', 'white', 'charcoal'
}) {
  // Determine fill color from variant if not explicitly passed
  let resolvedColor = color;
  if (!resolvedColor) {
    switch (variant) {
      case 'blue':
        resolvedColor = '#0052FF';
        break;
      case 'cream':
        resolvedColor = '#FAF7F0';
        break;
      case 'white':
        resolvedColor = '#FFFFFF';
        break;
      case 'charcoal':
        resolvedColor = '#141416';
        break;
      case 'gold':
        resolvedColor = '#E5A100';
        break;
      case 'coral':
      default:
        resolvedColor = '#F04C4C';
        break;
    }
  }

  return (
    <svg 
      width={size} 
      height={Math.round((size * 42) / 52)} 
      viewBox="0 0 52 42" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-200 ${className}`}
      aria-hidden="true"
    >
      {/* Piece 1: Left Wing with circular arc notch */}
      <path 
        d="M5 8.5C5 7.4 6 6.8 7 7.3L19.8 13.2C20.8 13.7 21 14.8 20.4 15.6C19 17.4 18.2 19.6 18.2 21C18.2 22.4 19 24.6 20.4 26.4C21 27.2 20.8 28.3 19.8 28.8L7 34.7C6 35.2 5 34.6 5 33.5V8.5Z" 
        fill={resolvedColor} 
      />
      {/* Piece 2: Top-right upward angled triangle */}
      <path 
        d="M25.8 5.6C26.7 4.9 28 5.3 28.5 6.3L39.8 14.1C40.6 14.7 40.4 16 39.5 16.3L26.6 18C25.6 18.1 24.8 17.3 25 16.3L25.8 5.6Z" 
        fill={resolvedColor} 
      />
      {/* Piece 3: Bottom-right downward angled triangle */}
      <path 
        d="M26.6 24L39.5 25.7C40.4 26 40.6 27.3 39.8 27.9L28.5 35.7C28 36.7 26.7 37.1 25.8 36.4L25 25.7C24.8 24.7 25.6 23.9 26.6 24Z" 
        fill={resolvedColor} 
      />
      {/* Piece 4: Far-right lead triangle */}
      <path 
        d="M35.5 17.4C35.5 16.6 36.4 16.1 37.1 16.5L45.4 20.4C46.1 20.8 46.1 21.8 45.4 22.2L37.1 26.1C36.4 26.5 35.5 26 35.5 25.2V17.4Z" 
        fill={resolvedColor} 
      />
    </svg>
  );
}

/**
 * Authentic Smotiva Typographic Wordmark:
 * Set in Lufga with signature inverted triangular dot (▼) replacing the dot on 'i'.
 */
export function SmotivaWordmark({ 
  className = '', 
  color, 
  sizeClass = 'text-xl sm:text-2xl',
  ariaLabel = 'Smotiva'
}) {
  return (
    <span 
      className={`font-heading font-bold tracking-tight inline-flex items-baseline select-none ${sizeClass} ${className}`}
      style={color ? { color } : undefined}
      aria-label={ariaLabel}
    >
      <span>Smot</span>
      <span className="relative inline-flex flex-col items-center mx-[0.5px]">
        {/* Signature downward triangle dot */}
        <svg 
          viewBox="0 0 10 8" 
          fill="currentColor" 
          className="w-[0.38em] h-[0.3em] mb-[0.08em] transform -translate-y-[0.18em]"
          aria-hidden="true"
        >
          <path d="M5 8L0.6 0.8H9.4L5 8Z" />
        </svg>
        <span className="leading-none inline-block">ı</span>
      </span>
      <span>va</span>
    </span>
  );
}

/**
 * Authentic Smotiva App Icon Variation (from presentation slide 8):
 * Rounded squircle container with centered cream/white symbol and notification badge.
 */
export function SmotivaAppIcon({ 
  variant = 'coral', // 'coral', 'blue', 'gold'
  size = 48,
  showBadge = true,
  badgeText = '8+',
  className = ''
}) {
  const bgClasses = {
    coral: 'bg-smotiva-coral text-white',
    blue: 'bg-smotiva-blue text-white',
    gold: 'bg-smotiva-gold text-white',
  };

  return (
    <div 
      className={`relative inline-flex items-center justify-center rounded-2xl shadow-md ${bgClasses[variant] || bgClasses.coral} ${className}`}
      style={{ width: size, height: size }}
    >
      <SmotivaSymbol size={Math.round(size * 0.58)} color="#FAF7F0" />
      {showBadge && (
        <span className="absolute -top-1 -right-1 px-1.5 py-0.5 min-w-[18px] text-[10px] font-mono font-bold bg-[#E63946] text-white rounded-full flex items-center justify-center ring-2 ring-white dark:ring-neutral-900 leading-none">
          {badgeText}
        </span>
      )}
    </div>
  );
}

/**
 * Primary Smotiva Logo Lockup:
 * Reflects presentation slide 7: "Smotiva" in Electric Blue followed by the Symbol in Coral Red.
 * Supports light/dark mode and all background variations.
 */
export default function SmotivaLogo({ 
  variant = 'auto', // 'auto', 'on-light', 'on-blue', 'on-dark', 'on-coral', 'monochrome'
  layout = 'default', // 'default' (wordmark + symbol on right, matching presentation-7), 'left-symbol', 'symbol-only', 'wordmark-only'
  showTagline = false,
  className = '',
  onClick,
  symbolSize = 28,
  sizeClass = 'text-xl sm:text-2xl'
}) {
  let isThemeDark = false;
  try {
    const themeContext = useTheme();
    isThemeDark = themeContext?.isDark || false;
  } catch {
    // Graceful fallback
  }

  // Determine colors based on presentation specifications:
  // - On light/cream background (presentation-7 top): Wordmark = Electric Blue #0052FF, Symbol = Coral Red #F04C4C
  // - On blue background (presentation-7 middle): Wordmark = White #FFFFFF, Symbol = Warm Cream #FAF7F0
  // - On dark background (presentation-7 bottom): Wordmark = Electric Blue #0052FF, Symbol = Coral Red #F04C4C
  let wordmarkColor = '#0052FF';
  let symbolColor = '#F04C4C';

  if (variant === 'on-blue') {
    wordmarkColor = '#FFFFFF';
    symbolColor = '#FAF7F0';
  } else if (variant === 'on-coral') {
    wordmarkColor = '#FFFFFF';
    symbolColor = '#FAF7F0';
  } else if (variant === 'monochrome') {
    wordmarkColor = isThemeDark ? '#FFFFFF' : '#141416';
    symbolColor = isThemeDark ? '#FFFFFF' : '#141416';
  } else if (variant === 'auto') {
    if (isThemeDark) {
      wordmarkColor = '#0052FF';
      symbolColor = '#F04C4C';
    } else {
      wordmarkColor = '#0052FF';
      symbolColor = '#F04C4C';
    }
  }

  // Symbol only
  if (layout === 'symbol-only') {
    return (
      <NavLink to="/" onClick={onClick} className={`inline-flex items-center ${className}`} aria-label="Smotiva Home">
        <SmotivaSymbol size={symbolSize} color={symbolColor} />
      </NavLink>
    );
  }

  // Wordmark only
  if (layout === 'wordmark-only') {
    return (
      <NavLink to="/" onClick={onClick} className={`inline-flex items-center ${className}`} aria-label="Smotiva Home">
        <SmotivaWordmark color={wordmarkColor} sizeClass={sizeClass} />
      </NavLink>
    );
  }

  // Left symbol
  if (layout === 'left-symbol') {
    return (
      <NavLink 
        to="/" 
        onClick={onClick}
        className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}
        aria-label="Smotiva - Digital Growth Partner"
      >
        <div className="transition-transform duration-200 group-hover:scale-105">
          <SmotivaSymbol size={symbolSize} color={symbolColor} />
        </div>
        <div className="flex flex-col">
          <SmotivaWordmark color={wordmarkColor} sizeClass={sizeClass} />
          {showTagline && (
            <span className="text-[10px] font-heading font-semibold tracking-wider uppercase text-neutral-500 mt-0.5">
              Digital Growth Partner
            </span>
          )}
        </div>
      </NavLink>
    );
  }

  // Default: Presentation-7 lockup ("Smotiva" wordmark followed by Symbol on the right)
  return (
    <NavLink 
      to="/" 
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 sm:gap-3 group focus:outline-none ${className}`}
      aria-label="Smotiva - Digital Growth Partner"
    >
      <div className="flex flex-col">
        <SmotivaWordmark color={wordmarkColor} sizeClass={sizeClass} />
        {showTagline && (
          <span className="text-[10px] font-heading font-semibold tracking-wider uppercase text-neutral-500 mt-0.5">
            Digital Growth Partner
          </span>
        )}
      </div>

      <div className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:scale-105">
        <SmotivaSymbol size={symbolSize} color={symbolColor} />
      </div>
    </NavLink>
  );
}
