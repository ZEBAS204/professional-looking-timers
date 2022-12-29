import { TimerProps } from 'components/timers/time_manager'

import styles from './timer.module.css'

export const Timer = ({
	hours,
	minutes,
	seconds,
	totalTimeToDisplay,
}: TimerProps) => {
	const calcTimeOffset = (time: number) => ({
		top: time + 1 > 59 ? '0' : time + 1,
		bottom: time - 1 < 0 ? '59' : time - 1,
	})

	const hoursOffset = calcTimeOffset(hours)
	const minutesOffset = calcTimeOffset(minutes)
	const secondsOffset = calcTimeOffset(seconds)

	return (
		<>
			<div className={styles.base}>
				<p className={styles.timeType}>Hours</p>
				<p className={styles.timeType}>Minutes</p>
				<p className={styles.timeType}>Seconds</p>
				<div className={styles.timeDisplay}>
					<p>{hoursOffset.top}</p>
					<p className={styles.timeDisplayCurrent}>{hours}</p>
					<p>{hoursOffset.bottom}</p>
				</div>
				<div className={styles.timeDisplay}>
					<p>{minutesOffset.top}</p>
					<p className={styles.timeDisplayCurrent}>{minutes}</p>
					<p>{minutesOffset.bottom}</p>
				</div>
				<div className={styles.timeDisplay}>
					<p>{secondsOffset.top}</p>
					<p className={styles.timeDisplayCurrent}>{seconds}</p>
					<p>{secondsOffset.bottom}</p>
				</div>
			</div>
			<p className={styles.remaining}>{totalTimeToDisplay}</p>
		</>
	)
}
