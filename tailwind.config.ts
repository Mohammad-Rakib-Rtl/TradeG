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
        orangeGlow: '#FF7A00'
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at 80% 20%, rgba(255,122,0,0.35), transparent 40%), linear-gradient(135deg, #0d0d13 0%, #121018 45%, #1c1320 100%)'
      },
      boxShadow: {
        glow: '0 10px 40px rgba(255,122,0,0.25)'
      }
    }
  },
  plugins: []
};

export default config;
