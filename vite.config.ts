import { defineConfig } from 'vite'
import { resolve } from 'path'
import { readFileSync } from 'fs'

import react from '@vitejs/plugin-react'
import webfontDownload from 'vite-plugin-webfont-dl'
import replace from '@rollup/plugin-replace'

const __PROJECT_SOURCE__ =
	'https://github.com/ZEBAS204/professional-looking-timers'

/**
 * Get the current git branch of the project
 * Defaults to master branch
 */
const getGitBranch = () => {
	const dir = (e: string) => resolve(__dirname, e)
	const defaultBranch = 'master'
	try {
		const rev = readFileSync(dir('.git/HEAD')).toString().trim()
		if (rev.indexOf(':') === -1) return defaultBranch // DETACHED branch

		return rev.split('/').pop()
	} catch (err) {
		console.error('Failed to get Git branch.', err)
		return defaultBranch
	}
}

export default defineConfig((configEnv) => {
	const isDevelopment = configEnv.mode === 'development'

	return {
		plugins: [
			react(),
			webfontDownload([
				// TODO: use true type font
				'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;800&display=swap',
				'https://fonts.googleapis.com/css2?family=Monoton&display=swap', // Timer 14
				'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap', // Timer 22
			]),
			replace({
				include: ['src/components/timers/**/index.tsx'],
				values: {
					__TIMER_URL__: (filePath: string) => {
						// We know that src is the root of our project, so we can remove everything on its left and,
						// get the timer folder, removing everything to the right of the last slash in the path.
						return (
							__PROJECT_SOURCE__ +
							'/tree/' +
							getGitBranch() +
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
				hooks: resolve(__dirname, 'src/hooks'),
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
