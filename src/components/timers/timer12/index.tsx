import { TimerContext } from 'components/timers/time_context'
import { Timer } from './timer'
import { Controls } from './controls'

const Component = (): JSX.Element => {
	return (
		<div>
			<TimerContext>
				<Timer />
				<Controls />
			</TimerContext>
		</div>
	)
}

const TIMER = {
	title: 'Glowing Heart',
	description:
		'A glowing heart to warm you on those cold nights (not a reference to O Canada)',
	attribution: [],
	source: '#',
	component: Component,
}

export default TIMER
