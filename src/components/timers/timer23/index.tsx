import { TimerContext } from 'components/timers/time_context'
import { Timer } from './timer'
import { Controls } from './controls'

const Component = (): JSX.Element => {
	return (
		<TimerContext>
			<Timer />
			<Controls />
		</TimerContext>
	)
}

const TIMER: TimerComponent = {
	title: 'Smart Watch',
	description: 'A description',
	attribution: {
		source:
			'https://www.freepik.com/free-vector/smart-watch-cartoon-vector-icon-illustration-technology-object-icon-concept-isolated-premium-vector-flat-cartoon-style_18380902.htm',
		sourceName: 'Smart watch cartoon',
		attribution: [
			{
				name: 'catalyststuff',
				url: 'https://www.freepik.com/author/catalyststuff',
			},
		],
	},
	source: '__TIMER_URL__',
	component: Component,
}

export default TIMER
