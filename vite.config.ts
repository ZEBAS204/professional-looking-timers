import { defineConfig } from 'vite'
import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import webfontDownload from 'vite-plugin-webfont-dl'
import replace from '@rollup/plugin-replace'

const __PROJECT_SOURCE__ =
	'https://github.com/ZEBAS204/professional-looking-timers'

export default defineConfig((configEnv) => {
	const isDevelopment = configEnv.mode === 'development'

	return {
		plugins: [
			react(),
			webfontDownload([
				// TODO: use true type font
				'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;800&display=swap',
			]),
			replace({
				include: ['src/components/timers/**/index.tsx'],
				values: {
					__TIMER_URL__: (filePath: string) => {
						// We know that src is the root of our project, so we can remove everything on its left and,
						// get the timer folder, removing everything to the right of the last slash in the path.
						return (
							__PROJECT_SOURCE__ +
							filePath.substring(filePath.indexOf('/src')).split('index')[0]
						)
					},
				},
			}),
		],
		define: {
			__PROJECT_SOURCE__: JSON.stringify(__PROJECT_SOURCE__),
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
