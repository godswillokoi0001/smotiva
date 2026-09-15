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
  return (
    <img
      src="/images/Smotiva%20Icon%20II.png"
      alt=""
      width={size}
      height={size}
      className={`shrink-0 object-contain transition-transform duration-200 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
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
      <img
        src="/images/Smotiva%20Icon%20I.png"
        alt=""
        className="object-contain"
        style={{ width: Math.round(size * 0.62), height: Math.round(size * 0.62) }}
      />
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

  const logoImage = (
    <img
      src="/images/Smotiva%20Logo%20PNG.png"
      alt="Smotiva"
      className="h-6 w-auto object-contain sm:h-7"
    />
  );

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
        {logoImage}
        {showTagline && (
          <span className="text-[10px] font-heading font-semibold tracking-wider uppercase text-neutral-500 mt-0.5">
            Digital Growth Partner
          </span>
        )}
      </NavLink>
    );
  }

  // Default: use the provided brand PNG logo across the site header/footer.
  return (
    <NavLink 
      to="/" 
      onClick={onClick}
      className={`inline-flex items-center group focus:outline-none ${className}`}
      aria-label="Smotiva - Digital Growth Partner"
    >
      {logoImage}
    </NavLink>
  );
}
