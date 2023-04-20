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
	title: "Pizza o'clock",
	description: 'A description',
	attribution: {
		source: 'https://dribbble.com/shots/2791746-Pizza-Time',
		sourceName: 'Pizza Time',
		isIspiredBy: true,
		attribution: [
			{
				name: 'Anjan Shrestha',
				url: 'https://dribbble.com/anjhero',
			},
		],
	},
	source: '__TIMER_URL__',
	component: Component,
}

export default TIMER
