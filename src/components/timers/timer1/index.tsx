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
	title: 'Timer 1',
	description: 'A description',
	attribution: {
		source: 'https://github.com/ZEBAS204/I-GEN',
		sourceName: 'I-GEN',
	},
	source: '__TIMER_URL__',
	component: Component,
}

export default TIMER
