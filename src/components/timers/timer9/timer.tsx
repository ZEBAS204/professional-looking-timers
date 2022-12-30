import { useEffect } from 'react'
import { useTimerContext } from 'components/timers/time_context'
import { TimerProps } from 'components/timers/time_manager'

import styles from './timer.module.css'

export const Timer = ({ hours, minutes, seconds }: TimerProps) => {
	const { changeTime } = useTimerContext()

	useEffect(() => {
		changeTime(120)
	}, [])

	return (
		<>
			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				className={styles.svgTrick}
			>
				<defs>
					<filter id="round_clip_path">
						<feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
							result="round_clip_path"
						/>
						<feComposite
							in="SourceGraphic"
							in2="round_clip_path"
							operator="atop"
						/>
					</filter>
				</defs>
			</svg>
			<div className={styles.base}>
				<div className={`${styles.card} ${styles.hours}`}>
					<div className={styles.timeCard} />

					<p className={styles.timeCardTime}>{hours}</p>
					<p className={styles.timeText}>Hours</p>
				</div>

				<div className={styles.separator} />

				<div className={`${styles.card} ${styles.minutes}`}>
					<div className={styles.timeCard} />

					<p className={styles.timeCardTime}>{minutes}</p>
					<p className={styles.timeText}>Minutes</p>
				</div>

				<div className={styles.separator} />

				<div className={`${styles.card} ${styles.seconds}`}>
					<div className={styles.timeCard} />

					<p className={styles.timeCardTime}>{seconds}</p>
					<p className={styles.timeText}>Seconds</p>
				</div>
			</div>
		</>
	)
}
