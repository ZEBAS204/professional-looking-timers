import { TimerContext } from 'components/timers/time_context'
import { Timer } from './timer'
import { Controls } from './controls'

const Component = (): JSX.Element => {
	return (
		<div className="flex flex-col items-center">
			<TimerContext>
				<Timer />
				<Controls />
			</TimerContext>
		</div>
	)
}

const TIMER = {
	title: 'Playful',
	description: 'A description',
	attribution: [],
	source: '#',
	component: Component,
}

export default TIMER
