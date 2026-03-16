/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#0a0a0a',
          1: '#111111',
          2: '#1a1a1a',
          3: '#222222',
        },
        border: {
          subtle: 'rgba(255,255,255,0.06)',
          DEFAULT: 'rgba(255,255,255,0.10)',
          strong: 'rgba(255,255,255,0.18)',
        },
        accent: {
          DEFAULT: '#4f8ef7',
          dim: 'rgba(79,142,247,0.15)',
          glow: 'rgba(79,142,247,0.08)',
        },
      },
      animation: {
        'grid-fade': 'gridFade 8s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        gridFade: {
          '0%': { opacity: '0.03' },
          '100%': { opacity: '0.07' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
