import type { Config } from 'tailwindcss'

/**
 * tailwind.config.ts — Design tokens branchés sur CSS variables.
 *
 * Les couleurs viennent de siteConfig.colors, injectées en CSS vars dans
 * app/layout.tsx (`--color-primary-rgb`, etc.). Changer 3 hex dans site.config.ts
 * re-thème TOUT le site (clé du template N+1), sans toucher aux composants.
 *
 * Les vars stockent des canaux RGB (« r g b ») → support des modificateurs
 * d'opacité Tailwind (bg-primary/10, text-accent/80…).
 */
const withOpacity = (v: string) => `rgb(var(${v}) / <alpha-value>)`

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: withOpacity('--color-primary-rgb'),
          dark: withOpacity('--color-primary-dark-rgb'),
        },
        accent: withOpacity('--color-accent-rgb'),
        dark: withOpacity('--color-dark-rgb'),
        light: withOpacity('--color-light-rgb'),
      },
      fontFamily: {
        sans: ['var(--font-sora)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
      },
      keyframes: {
        'hero-shine': {
          '0%':   { transform: 'translateX(-120%) skewX(-18deg)', opacity: '0' },
          '15%':  { opacity: '1' },
          '85%':  { opacity: '1' },
          '100%': { transform: 'translateX(300%) skewX(-18deg)', opacity: '0' },
        },
      },
      animation: {
        'hero-shine': 'hero-shine 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
