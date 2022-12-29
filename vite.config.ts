import { defineConfig } from 'vite'
import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import webfontDownload from 'vite-plugin-webfont-dl'

export default defineConfig((configEnv) => {
	const isDevelopment = configEnv.mode === 'development'

	return {
		plugins: [
			react(),
			webfontDownload([
				'https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap',
			]),
		],
		resolve: {
			alias: {
				app: resolve(__dirname, 'src/app'),
				components: resolve(__dirname, 'src/components'),

			},
		},
		css: {
			modules: {
				generateScopedName: isDevelopment
					? '[name]__[local]__[hash:base64:5]'
					: '[hash:base64:5]',
			},
		},
	}
})

/*
				'@/': resolve(__dirname, '.'),
				'@src': resolve(__dirname, 'src'),
				'@assets': resolve(__dirname, 'src/assets'),
				'@styles': resolve(__dirname, 'src/assets/scss'),
				'@components': resolve(__dirname, 'src/components'),
				'@layouts': resolve(__dirname, 'src/layouts'),
				'@pages': resolve(__dirname, 'src/pages'),
				'@utils': resolve(__dirname, 'src/utils'),
				'@contexts': resolve(__dirname, 'src/components/contexts'),
			*/
