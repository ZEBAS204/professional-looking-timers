/// <reference types="vite/client" />

interface ComponentAttribution {
	source: string
	isIspiredBy?: boolean
	sourceName?: string
	attribution?: Array<{
		name: string
		url?: string
	}>
}

declare global {
	const __PROJECT_SOURCE__: string

	interface TimerComponent {
		component: (...args: unknown[]) => JSX.Element
		title: string
		description?: string
		content?: React.ReactNode
		source: '__TIMER_URL__'
		attribution?: ComponentAttribution
	}

	type Attributions = ComponentAttribution
}

export {}
