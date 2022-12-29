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

	return (
		<svg
			className={styles.base}
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				className={styles.completion_ring_stroke}
				strokeWidth="3"
				r="45"
				cx="50"
				cy="50"
			/>
			<circle
				className={styles.completion_ring_fill}
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
				pathLength={totalTime}
				r="45"
				strokeDasharray={
					// Plus 1 to prevent a strange offset in the stroke
					// in chromium based browsers
					`${totalTime - remainingTime} ${totalTime + 1}`
				}
				cx="50"
				cy="50"
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
