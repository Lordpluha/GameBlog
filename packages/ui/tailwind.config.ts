import type { Config } from 'tailwindcss'
import sharedConfig from '@gameblog/tailwind-config'
import { nextui } from '@nextui-org/react'

const config: Config = {
  presets: [sharedConfig],
  content: [
    './src/**/*.{ts,tsx,scss,css}',
    './node_modules/@nextui-org/theme/dist/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  // prefix: 'ui-',
  darkMode: 'class',
  plugins: [nextui()]
}

export default config
