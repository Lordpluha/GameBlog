import type { Config } from 'tailwindcss'
import sharedConfig from '@gameblog/tailwind-config'
import theme from '@gameblog/tailwind-config/NextUITheme'
import { nextui } from '@nextui-org/react'

const config: Config = {
  // presets: [sharedConfig],
  content: [
    './src/**/*.{ts,tsx,scss,css}',
    '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [nextui(theme)]
}

export default config
