import type { Config } from 'tailwindcss'
import sharedConfig from '@gameblog/tailwind-config'
import { nextui } from '@nextui-org/react'

const config: Config = {
  presets: [sharedConfig],
  content: [
    './src/**/*.{ts,tsx,scss,css,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [nextui()]
}
export default config
