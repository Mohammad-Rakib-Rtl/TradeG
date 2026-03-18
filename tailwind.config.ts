import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0B0B0F',
        orangeGlow: '#FFB200',
        canvas: '#ECE9DF'
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at 12% 82%, rgba(255,140,0,0.45), transparent 38%), radial-gradient(circle at 72% 26%, rgba(46,126,255,0.22), transparent 42%), linear-gradient(120deg, #0b0e1b 0%, #150f23 50%, #0a1a32 100%)'
      },
      boxShadow: {
        glow: '0 12px 36px rgba(255,184,0,0.35)'
      }
    }
  },
  plugins: []
};

export default config;
