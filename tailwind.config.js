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
        navy: {
          950: '#070D1A',
          900: '#0B1426',
          800: '#0F1E3A',
          700: '#1E3A5F',
          600: '#1D4ED8',
        },
        water: {
          500: '#0EA5E9',
          400: '#38BDF8',
          300: '#7DD3FC',
        },
        urgent: {
          600: '#EA580C',
          500: '#F97316',
          400: '#FB923C',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-cta': 'pulseCta 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        pulseCta: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(249, 115, 22, 0.5)' },
          '70%': { boxShadow: '0 0 0 25px rgba(249, 115, 22, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(5deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-3deg)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
