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
        // Tokens extraits du CSS réel d'instarocket-ai.com
        cream: {
          50: '#FBFAF8',
          100: '#F6F3F0',
          200: '#F4F5F8',
        },
        ink: {
          900: '#242A4F',
          700: '#414458',
          500: '#6b7280',
          400: '#9ca3af',
        },
        teal: {
          600: '#0B7A7F',
          500: '#0E8E93',
          400: '#1FB2B7',
          200: '#90E7EA',
          50: '#f0f7f7',
        },
        peach: {
          200: '#F3E0D2',
        },
        line: {
          200: '#e1e8ed',
        },
      },
      fontFamily: {
        sans: ['var(--font-sora)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '28px',
        blob: '2.4rem',
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
        'spin-slow': 'spinSlow 22s linear infinite',
        'spin-slower': 'spinSlow 26s linear infinite reverse',
        'cta-glow': 'ctaGlow 2.2s ease-in-out infinite',
        'fade-slide-in': 'fadeSlideIn 0.7s ease-out forwards',
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        ctaGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(14, 142, 147, 0.45)' },
          '55%': { boxShadow: '0 0 0 14px rgba(14, 142, 147, 0)' },
        },
        fadeSlideIn: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
