import { TimerProps } from 'components/timers/time_manager'

import styles from './timer.module.css'

export const Timer = ({
	totalTime,
	remainingTime,
	hoursPad: hours,
	minutesPad: minutes,
	secondsPad: seconds,
}: TimerProps) => {
	return (
		<svg
			className={styles.base}
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				className={styles.completion_ring_stroke}
				strokeWidth="4"
				width="90"
				height="90"
				rx="10"
				x="5"
				y="5"
			/>
			<rect
				className={styles.completion_ring_fill_seconds}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="4"
				pathLength={totalTime}
				r="45"
				strokeDasharray={
					// Make a look like a race adding a second stroke
					// remove this if you don't like the effect
					`${
						// Do not display the stroke when no time was elapsed
						!(totalTime - remainingTime) ? 0 : totalTime - remainingTime + 0.5
					} ${totalTime + 1}`
				}
				width="90"
				height="90"
				rx="10"
				x="5"
				y="5"
			/>
			<rect
				className={styles.completion_ring_fill}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="4"
				pathLength={totalTime}
				r="45"
				strokeDasharray={
					// Plus 1 to prevent a strange offset in the stroke
					// in chromium based browsers
					`${totalTime - remainingTime} ${totalTime + 1}`
				}
				width="90"
				height="90"
				rx="10"
				x="5"
				y="5"
			/>
			<text
				className={styles.inner_circle_time}
				textAnchor="middle"
				x="45"
				y="40"
			>
				{hours}h
			</text>
			<text
				className={styles.inner_circle_time}
				textAnchor="middle"
				x="50" // Need to follow h character
				y="70"
			>
				{minutes}m
			</text>
			<text
				className={styles.inner_circle_time_seconds}
				textAnchor="middle"
				x="50"
				y="88"
			>
				{seconds}s
			</text>
		</svg>
	)
}
