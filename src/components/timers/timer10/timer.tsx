import { useEffect } from 'react'

import { useTimerContext } from 'components/timers/time_context'
import { TimerProps } from 'components/timers/time_manager'

import styles from './timer.module.css'

export const Timer = ({
	totalTime,
	remainingTime,
	remainingtimeToDisplayTrim,
}: TimerProps) => {
	const { changeTime } = useTimerContext()

	useEffect(() => {
		changeTime(60)
	}, [])

	const progress = totalTime - remainingTime

	return (
		<svg
			className={styles.base}
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
		>
			<pattern
				id="pizzaPattern"
				patternUnits="userSpaceOnUse"
				width="30"
				height="30"
				patternTransform="rotate(30)"
			>
				<rect width="30" height="30" fill="#ED7878" />
				<circle r="8" cx="8" cy="12" fill="#334457" />
				<circle r="4" cx="20" cy="24" fill="#334457" />
			</pattern>

			<circle className={styles.inner_circle} r="50" cx="50" cy="50" />

			<circle
				className={styles.pizza_pattern_smooth}
				r="22"
				cx="50"
				cy="50"
				fill="transparent"
				stroke="url(#pizzaPattern)"
				strokeWidth="40"
				pathLength={totalTime}
				strokeDasharray={
					// Plus 1 to prevent a strange offset in the stroke
					// in chromium based browsers
					`${totalTime - remainingTime} ${totalTime + 1}`
				}
				transform="rotate(-90) translate(-100)"
			/>
			<circle
				className={styles.completion_ring_stroke}
				r="46"
				cx="50"
				cy="50"
			/>
			<circle
				className={styles.completion_ring_fill}
				r="46"
				cx="50"
				cy="50"
				pathLength={totalTime}
				strokeDasharray={
					// Plus 1 to prevent a strange offset in the stroke
					// in chromium based browsers
					`${progress} ${totalTime}`
				}
			/>
			<text
				className={styles.inner_circle_time}
				textAnchor="middle"
				x="50"
				y="55"
			>
				{remainingtimeToDisplayTrim}
			</text>
		</svg>
	)
}
