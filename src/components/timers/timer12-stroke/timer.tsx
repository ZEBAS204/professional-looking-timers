import { useEffect } from 'react'

import { useTimerContext } from 'components/timers/time_context'
import { TimerProps } from 'components/timers/time_manager'

import styles from './timer.module.css'

export const Timer = ({ totalTime, remainingTime, seconds }: TimerProps) => {
	const { changeTime } = useTimerContext()

	useEffect(() => {
		changeTime(59)
	}, [])

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 900 800"
			className={styles.base}
		>
			<defs>
				<filter id="timer12StrokeGlow">
					<feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
					<feGaussianBlur result="blurOut" in="offOut" stdDeviation="14" />
					<feBlend in2="blurOut" mode="normal" in="SourceGraphic" />
				</filter>
				<radialGradient id="timer12StrokeGradient" cx="0" cy="0.5" fr=".8">
					<stop offset="0" stopColor="#fa02b7"></stop>
					<stop offset="1" stopColor="#fb7446"></stop>
				</radialGradient>
				<symbol id="heartStroke">
					<path
						pathLength={totalTime}
						fill="none"
						strokeWidth="50"
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M450,748.2c-21.2,0-41.2-8.3-56.2-23.3L119,450.1C73.5,404.6,50.5,349,50.5,284.8c0-64.3,23-119.9,68.5-165.3   s101.1-68.5,165.3-68.5s119.9,23,165.3,68.5c0.1,0.1,0.2,0.1,0.4,0.1s0.3-0.1,0.4-0.1C495.8,74,551.4,50.9,615.7,50.9   c64.3,0,119.9,23,165.3,68.5c45.4,45.4,68.5,101.1,68.5,165.3c0,64.3-23,119.9-68.5,165.3L506.2,724.9   C491.2,739.9,471.2,748.2,450,748.2z"
					/>
				</symbol>
			</defs>

			<use
				href="#heartStroke"
				stroke="url(#timer12StrokeGradient)"
				strokeOpacity="0.25"
			/>
			<use
				href="#heartStroke"
				filter="url(#timer12StrokeGlow)"
				stroke="url(#timer12StrokeGradient)"
				className={styles.stroke}
				strokeDasharray={`${remainingTime} ${totalTime}`}
			/>
			<text transform="matrix(1 0 0 1 450 450)" className={styles.text}>
				{seconds}
			</text>
		</svg>
	)
}
