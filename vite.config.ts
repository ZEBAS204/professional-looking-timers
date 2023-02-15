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
				// TODO: use true type font
				'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;800&display=swap',
			]),
		],
		define: {
			__PROJECT_SOURCE__: JSON.stringify(
				'https://github.com/ZEBAS204/professional-looking-timers'
			),
		},
		resolve: {
			alias: {
				app: resolve(__dirname, 'src/app'),
				components: resolve(__dirname, 'src/components'),
				utils: resolve(__dirname, 'src/utils'),
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
