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
	title: 'Gradient Circle',
	description: 'A description',
	attribution: {
		source: 'https://dribbble.com/shots/17474098-Mobile-Voice-Recorder',
		sourceName: 'Mobile Voice Recorder',
		attribution: [
			{
				name: 'Anton Lapko',
				url: 'https://dribbble.com/anronkai',
			},
		],
	},
	source: '__TIMER_URL__',
	component: Component,
}

export default TIMER
