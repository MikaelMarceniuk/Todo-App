import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-mobile': 'url("/bg-mobile-dark.jpg")',
        'dark-desktop': 'url("/bg-desktop-dark.jpg")',
        'white-mobile': 'url("/bg-mobile-light.jpg")',
        'white-desktop': 'url("/bg-desktop-light.jpg")',
      },
    },
  },
  plugins: [],
}
export default config
