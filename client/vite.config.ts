import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@context': path.resolve(__dirname, './src/components/context'),
			'@hooks': path.resolve(__dirname, './src/components/hooks'),
			'@interfaces': path.resolve(
				__dirname,
				'./src/components/interfaces'
			),
			'@tools': path.resolve(__dirname, './src/components/tools'),
			'@type': path.resolve(__dirname, './src/components/types'),
			'@ui': path.resolve(__dirname, './src/components/ui'),
			'@icons': path.resolve(__dirname, './src/components/ui/icons'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@routes': path.resolve(__dirname, './src/routes'),
			'@services': path.resolve(__dirname, './src/services'),
			'@store': path.resolve(__dirname, './src/store'),
			'@stories': path.resolve(__dirname, './src/stories')
		}
	},
	plugins: [react()]
})
