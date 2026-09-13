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
        smotiva: {
          blue: '#0057FF',        // Electric Cobalt Blue (Primary Brand)
          coral: '#FF4D4D',       // Vibrant Coral Red (Primary Mark & Accent)
          cream: '#FAF8EF',       // Warm Ivory Editorial Background
          creamSurface: '#F4F0E6',// Slightly darker cream container
          creamBorder: '#E8E3D5', // Cream container border
          carbon: '#121212',      // Deep Carbon Black
          darkSurface: '#1A1A1A', // Dark container surface
          darkBorder: '#282828',  // Dark container border
          ochre: '#F2A900',       // Warm Gold / Amber Accent
          white: '#FFFFFF',
          muted: '#737373',       // Neutral muted text
        },
        // Direct semantic tokens strictly locked to brand palette
        brand: {
          blue: '#0057FF',
          coral: '#FF4D4D',
          cream: '#FAF8EF',
          carbon: '#121212',
          ochre: '#F2A900',
        }
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
        widest: '0.15em',
      },
      boxShadow: {
        'brand-card': '0 4px 20px -2px rgba(18, 18, 18, 0.04), 0 2px 6px -1px rgba(18, 18, 18, 0.02)',
        'brand-card-hover': '0 20px 40px -15px rgba(0, 87, 255, 0.12), 0 0 1px 1px rgba(0, 87, 255, 0.2)',
        'brand-glow-blue': '0 0 40px -10px rgba(0, 87, 255, 0.4)',
        'brand-glow-coral': '0 0 40px -10px rgba(255, 77, 77, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },    
  plugins: [],  
}
