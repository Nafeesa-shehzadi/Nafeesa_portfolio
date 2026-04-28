import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        accent: '#00FFB2',
        accent2: '#B16FFF',
        accent3: '#FF6FB1',
        bg: '#04070F',
        bg2: '#080D1A',
        bg3: '#0D1526',
      }
    }
  },
  plugins: [],
}
export default config
