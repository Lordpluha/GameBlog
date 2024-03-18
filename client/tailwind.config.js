/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		screens: {
			sm:'480px',
			md:'768px',
			lg:'976px',
			lg2:'1145px',
			xl:'1440px'
		},
		extends: {

		}
	},
	plugins: []
}