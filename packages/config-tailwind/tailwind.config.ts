import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'
import theme from './theme'

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      gridTemplateRows: {
        '2auto': 'repeat(2, min-content)'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui(theme)]
}
export default config
