import type { Config } from 'tailwindcss'

const config: Config = {
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
      },
    },
  },
  plugins: [],
}
export default config
