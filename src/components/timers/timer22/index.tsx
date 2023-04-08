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

const TIMER = {
	title: 'Smart Watch Mockup',
	description: 'A description',
	attribution: [],
	source: '__TIMER_URL__',
	component: Component,
}

export default TIMER
