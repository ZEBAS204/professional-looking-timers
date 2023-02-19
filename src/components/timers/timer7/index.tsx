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
	title: 'Glassmorphism',
	description:
		'Make use of glassmorphism effect and a combination of gradients to simulate a fancy glass effect',
	attribution: [],
	source: '__TIMER_URL__',
	component: Component,
}

export default TIMER
