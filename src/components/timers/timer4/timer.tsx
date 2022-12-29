import { TimerProps } from 'components/timers/time_manager'

import styles from './timer.module.css'

export const Timer = ({
	hoursPad: hours,
	minutesPad: minutes,
	secondsPad: seconds,
}: TimerProps) => {
	return (
		<div className={styles.base}>
			<div className={styles.timeDisplay}>
				<p className={styles.timeDisplayCurrent}>{hours}</p>
			</div>
			<p>:</p>
			<div className={styles.timeDisplay}>
				<p className={styles.timeDisplayCurrent}>{minutes}</p>
			</div>
			<p>:</p>
			<div className={styles.timeDisplay}>
				<p className={styles.timeDisplayCurrent}>{seconds}</p>
			</div>
			<p className={styles.timeType}>Hours</p>
			<div />
			<p className={styles.timeType}>Minutes</p>
			<div />
			<p className={styles.timeType}>Seconds</p>
		</div>
	)
}
