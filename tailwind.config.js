/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ch: {
          950: '#0D0D0D',
          900: '#111111',
          850: '#141414',
          800: '#1A1A1A',
          750: '#1E1E1E',
          700: '#222222',
          650: '#262626',
          600: '#2A2A2A',
          500: '#333333',
          400: '#444444',
          300: '#555555',
        },
        rouge: {
          950: '#450a0a',
          900: '#7f1d1d',
          800: '#991B1B',
          700: '#B91C1C',
          600: '#DC2626',
          500: '#EF4444',
          400: '#F87171',
          300: '#FCA5A5',
        },
        verdant: {
          900: '#052e16',
          800: '#14532d',
          700: '#166534',
          600: '#16a34a',
          500: '#22c55e',
          400: '#4ade80',
        },
        or: {
          700: '#b45309',
          600: '#d97706',
          500: '#f59e0b',
          400: '#fcd34d',
          300: '#fde68a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-red': 'pulseRed 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(220, 38, 38, 0.4)' },
          '70%': { boxShadow: '0 0 0 20px rgba(220, 38, 38, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(3deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-2deg)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
