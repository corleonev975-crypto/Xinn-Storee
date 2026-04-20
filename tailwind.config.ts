import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d8efff',
          200: '#b8e4ff',
          300: '#86d3ff',
          400: '#4ab9ff',
          500: '#1796ff',
          600: '#0073e6',
          700: '#005ab8',
          800: '#074d93',
          900: '#0b417a'
        }
      }
    }
  },
  plugins: []
};

export default config;
