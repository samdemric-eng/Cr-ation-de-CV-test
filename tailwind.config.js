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
        // Preset D — "Aura Digitale" (variante Golden Orange)
        void: '#1A1722',      // Primaire (fond profond, éclairci)
        accent: '#F5A524',    // Golden orange
        'accent-soft': '#FFC15E', // Golden clair (highlights)
        ghost: '#F4F1EA',     // Clair (chaud)
        graphite: '#252132',  // Sombre secondaire (éclairci)
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
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
