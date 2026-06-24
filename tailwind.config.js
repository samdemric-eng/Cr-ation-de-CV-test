/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Design system "Ember" — warm charcoal + orange→peach gradient
        void: '#0E0A08',      // Fond brun charbon chaud
        surface: '#181210',   // Surface des cartes (utilisée en glass)
        accent: '#EE6C3A',    // Orange chaud
        'accent-soft': '#F8B27E', // Pêche
        ghost: '#F6EDE6',     // Texte clair chaud
        muted: '#B3A599',     // Texte atténué
        graphite: '#181210',  // Alias rétro-compat (= surface)
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #EC6A3C 0%, #F9B98A 100%)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      transitionTimingFunction: {
        magnetic: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
