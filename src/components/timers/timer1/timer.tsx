import { TimerProps } from 'components/timers/time_manager'

import styles from './timer.module.css'

export const Timer = ({
	totalTime,
	remainingTime,
	totalTimeToDisplay,
	remainingtimeToDisplay,
}: TimerProps) => {
	return (
		<svg
			className={styles.base}
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<filter id="base-timer__dropshadow">
					<feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
					<feGaussianBlur result="blurOut" in="offOut" stdDeviation="1" />
					<feBlend in2="blurOut" mode="normal" in="SourceGraphic" />
				</filter>
			</defs>
			<circle
				className={styles.inner_circle}
				strokeWidth="1"
				strokeLinecap="round"
				strokeDasharray="0.1 0.9"
				strokeDashoffset="0.04"
				pathLength="60"
				r="41"
				cx="50"
				cy="50"
			/>
			<circle
				className={styles.completion_ring_stroke}
				strokeWidth="1"
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
					`${remainingTime} ${totalTime + 1}`
				}
				cx="50"
				cy="50"
			/>
			<text
				className={styles.inner_circle_time}
				textAnchor="middle"
				x="50"
				y="50"
			>
				{remainingtimeToDisplay}
			</text>
			<text
				className={styles.inner_circle_time_total}
				x="50"
				textAnchor="middle"
				y="60"
			>
				{totalTimeToDisplay}
			</text>
		</svg>
	)
}
