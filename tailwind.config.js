// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Direct brand color tokens from attached Smotiva identity presentation
        'smotiva-blue': '#0052FF',       // Primary Brand Cobalt Electric Blue
        'smotiva-coral': '#F04C4C',      // Primary Brand Coral / Poppy Red
        'smotiva-cream': '#FAF7F0',      // Signature Warm Cream / Off-White Canvas
        'smotiva-charcoal': '#141416',   // Deep Charcoal Black
        'smotiva-gold': '#E5A100',       // Secondary Ochre / Amber Gold
        'smotiva-border': '#E8E4DA',     // Refined Border on Cream
        'smotiva-white': '#FFFFFF',      // Pure White
        'smotiva-nearwhite': '#FAF7F0',  // Near-white is now the signature warm cream

        // Compatibility aliases mapped directly to brand palette
        'smotiva-navy': '#0052FF',       // Maps to Electric Blue #0052FF
        'smotiva-cyan': '#0052FF',       // Maps to Electric Blue #0052FF
        'smotiva-orange': '#F04C4C',     // Maps to Coral Red #F04C4C
        'smotiva-amber': '#E5A100',      // Maps to Ochre Gold #E5A100

        // Structured object for smotiva.* classes
        smotiva: {
          // Primary colors from presentation
          blue: '#0052FF',
          coral: '#F04C4C',
          cream: '#FAF7F0',
          charcoal: '#141416',
          gold: '#E5A100',
          border: '#E8E4DA',
          white: '#FFFFFF',
          nearwhite: '#FAF7F0',

          // Compatibility aliases
          navy: '#0052FF',
          cyan: '#0052FF',
          orange: '#F04C4C',
          amber: '#E5A100',
          
          canvas: '#FAF7F0',     // Signature Warm Cream Canvas
          canvasAlt: '#F4F0E6',  // Secondary Surface Warm Tone
          surface: '#FFFFFF',    // Crisp White Card Surface
          darkCanvas: '#141416', // Deep Charcoal Dark Canvas
          darkSurface: '#1F1F23',// Elevated Dark Surface
          darkBorder: '#27272A', // Dark Border
        },
      },
      fontFamily: {
        heading: ['Lufga', 'system-ui', 'sans-serif'],
        display: ['Lufga', 'system-ui', 'sans-serif'],
        body: ['General Sans', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['General Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
        tight: '-0.015em',
        wide: '0.05em',
        widest: '0.12em',
      },
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
    },
  },    
  plugins: [],  
}


