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
		changeTime(30)
	}, [])

	return (
		<svg
			className={styles.base}
			viewBox="0 0 110 110"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<filter id="outerGradientGlow">
					<feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
					<feGaussianBlur result="blurOut" in="offOut" stdDeviation="2.5" />
					<feBlend in2="blurOut" mode="normal" in="SourceGraphic" />
				</filter>
				<linearGradient
					id="completion_ring_fill_gradient"
					x1="0%"
					y1="0%"
					x2="0%"
					y2="100%"
				>
					<stop offset="0%" stopColor="#00bc9b" />
					<stop offset="50%" stopColor="#20afff" />
					<stop offset="100%" stopColor="#ff4879" />
				</linearGradient>
				<circle
					id="completion_ring_fill"
					strokeLinecap="round"
					strokeLinejoin="round"
					pathLength={totalTime}
					r="45"
					cx="50%"
					cy="50%"
				/>
			</defs>

			<circle
				fill="url(#completion_ring_fill_gradient)"
				filter="url(#outerGradientGlow)"
				r="50"
				cx="50%"
				cy="50%"
				transform="translate(0,110) rotate(-90 0 0)"
			/>
			<circle className={styles.inner_circle} r="50" cx="50%" cy="50%" />
			<circle
				className={styles.inner_dashed_stroke}
				strokeWidth="1"
				r="40"
				cx="50%"
				cy="50%"
			/>
			<circle
				className={styles.completion_ring_stroke}
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
				r="45"
				cx="50%"
				cy="50%"
			/>
			<g>
				<use
					className={styles.completion_ring_fill_stroke}
					href="#completion_ring_fill"
					strokeDasharray={
						// Plus 1 to prevent a strange offset in the stroke
						// in chromium based browsers
						`${totalTime - remainingTime} ${totalTime + 1}`
					}
				/>
				<use
					stroke="url(#completion_ring_fill_gradient)"
					className={styles.completion_ring_fill}
					href="#completion_ring_fill"
					strokeDasharray={
						// Plus 1 to prevent a strange offset in the stroke
						// in chromium based browsers
						`${totalTime - remainingTime} ${totalTime + 1}`
					}
				/>
			</g>
			<text
				className={styles.inner_circle_time}
				textAnchor="middle"
				x="50%"
				y="55%"
			>
				{remainingtimeToDisplayTrim}
			</text>
		</svg>
	)
}
