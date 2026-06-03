import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Hanchi Care LTD Color Theme
        primary: {
          50: '#fff8f0',
          100: '#ffe8d6',
          200: '#ffd0ad',
          300: '#ffb884',
          400: '#ffa05b',
          500: '#FF8C00', // Main orange
          600: '#e67e00',
          700: '#cc7000',
          800: '#b36200',
          900: '#995400',
        },
        secondary: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#f0f0f0',
          400: '#e0e0e0',
          500: '#ffffff', // White
        },
        dark: {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e8e8e8',
          300: '#d3d3d3',
          400: '#999999',
          500: '#666666',
          600: '#555555',
          700: '#444444',
          800: '#333333', // Dark gray
          900: '#222222',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
