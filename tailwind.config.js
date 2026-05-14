export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Monochrome palette with one accent
        'neutral-dark': '#1a1a1a', // Deep charcoal for dark backgrounds
        'neutral-gray': '#6b7280', // Medium gray for secondary text
        'neutral-light': '#f3f4f6', // Light gray for backgrounds
        'neutral-white': '#ffffff', // Pure white
        'accent-teal': '#0891b2', // Muted teal accent (controlled, not loud)
      },
      fontFamily: {
        // Inter for headings and primary attention-grabbing text
        'heading': ['Inter', 'sans-serif'],
        // Inter for body text, paragraphs, and general readability
        'body': ['Inter', 'sans-serif'],
      },
    
    },
  },    
  plugins: [],  
}
