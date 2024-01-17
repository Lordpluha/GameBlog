/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'light-gray': {
					DEFAULT: 'rgba(116,124,129,1)',
					80: 'rgba(116,124,129,0.8)'
				},
				'dark-gray': {
					primary: 'rgb(65,71,74)',
					DEFAULT: 'rgba(38,42,44,1)'
				},
				gray: {
					DEFAULT: 'rgba(38,42,44,1)'
				},
				'light-green': {
					DEFAULT: 'rgba(0,168,121,1)'
				},
				'light-red': {
					primary: 'rgb(239,89,98, 1)',
					DEFAULT: 'rgba(0,168,121,1)'
				},
				'light-violet': {
					DEFAULT: 'rgba(56,61,110,1)'
				}
			},
			boxShadow: {
				commentForm: '0 0 0 2px rgba(56,61,110,1)'
			}
		}
	},
	plugins: []
}
