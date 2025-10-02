import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lime: '#D6FF57',
        'lime-fallback': '#E3F65C',
        'deep-green': '#0C2E1C',
        navy: '#0B1020',
        'off-white': '#F7F9F4',
        'near-black': '#0A0A0A',
        'off-white-pill': '#F2F3F1',
        'footer-bg': '#EAFDB3',
        // Sigma brand colors
        'sigma-lime': '#D6FF57',
        'sigma-off-white-pill': '#F2F3F1',
        'sigma-dark-green': '#0C2E1C',
        'sigma-footer-bg': '#EAFDB3',
        // Semantic brand tokens
        brand: {
          lime: {
            50: '#F7F9F4',
            100: '#EAFDB3',
          },
          yellow: '#D6FF57',
        },
        ink: {
          400: '#6B7280',
          600: '#4B5563',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
