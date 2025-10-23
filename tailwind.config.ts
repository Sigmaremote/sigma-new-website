import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lime: '#D1FF94',
        'lime-fallback': '#C8FF66',
        'deep-green': 'hsl(156, 82%, 13%)',
        navy: '#0B1020',
        'off-white': '#F7F9F4',
        'near-black': '#0A0A0A',
        'off-white-pill': '#F2F3F1',
        'footer-bg': '#D1FF94',
        // Sigma brand colors
        'sigma-lime': '#D1FF94',
        'sigma-off-white-pill': '#F2F3F1',
        'sigma-dark-green': 'hsl(156, 82%, 13%)',
        'sigma-footer-bg': '#D1FF94',
        // Semantic brand tokens
        brand: {
          lime: {
            50: '#F0FFE5',
            100: '#D1FF94',
          },
          yellow: '#D1FF94',
        },
        ink: {
          400: '#6B7280',
          600: '#4B5563',
          900: '#111827',
        },
      },
      fontFamily: {
        satoshi: ["var(--font-sans)"],
        sans: ["var(--font-sans)"],
      },
      letterSpacing: {
        tightish: "-0.01em",
        tight: "-0.02em",
      },
    },
  },
  plugins: [],
}
export default config
