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
		<div className={styles.base}>
			<div className={styles.card}>
				<div className={`${styles.gradientCard} ${styles.hours}`}>
					<div className={styles.gradientCardBehind} />
					<p className={styles.gradientTime}>{hours}</p>
					<p className={styles.gradientTimeText}>hours</p>
				</div>
			</div>

			<div className={styles.card}>
				<div className={`${styles.gradientCard} ${styles.minutes}`}>
					<div className={styles.gradientCardBehind} />
					<p className={styles.gradientTime}>{minutes}</p>
					<p className={styles.gradientTimeText}>minutes</p>
				</div>
			</div>

			<div className={styles.card}>
				<div className={`${styles.gradientCard} ${styles.seconds}`}>
					<div className={styles.gradientCardBehind} />
					<p className={styles.gradientTime}>{seconds}</p>
					<p className={styles.gradientTimeText}>seconds</p>
				</div>
			</div>
		</div>
	)
}
