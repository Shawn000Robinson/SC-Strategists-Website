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
          DEFAULT: '#fafafa',
          1: '#ffffff',
          2: '#f5f5f5',
          3: '#eeeeee',
        },
        border: {
          subtle: 'rgba(0,0,0,0.06)',
          DEFAULT: 'rgba(0,0,0,0.10)',
          strong: 'rgba(0,0,0,0.18)',
        },
        accent: {
          DEFAULT: '#1a3a5c',
          dim: 'rgba(26,58,92,0.10)',
          glow: 'rgba(26,58,92,0.06)',
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
