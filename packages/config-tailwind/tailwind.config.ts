import type { Config } from 'tailwindcss'

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  theme: {
		screens: {
			sm:'480px',
			md:'768px',
			lg:'976px',
			lg2:'1145px',
			xl:'1440px'
		},
    extend: {}
  },
  plugins: []
}
export default config
