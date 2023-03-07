import { TimerProps } from 'components/timers/time_manager'

import styles from './timer.module.css'

export const Timer = ({ hoursPad, minutesPad, secondsPad }: TimerProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 105"
			className={styles.base}
		>
			<g>
				<polygon
					className={styles.topView}
					points="91.7,26.5 50.3,50.6 8.7,26.5 50.1,2.5"
				/>
				<polygon
					className={styles.leftSideView}
					points="50.3,50.6 49.9,102.5 8.3,78.5 8.7,26.5"
				/>
				<polygon
					className={styles.rightSideView}
					points="91.7,26.5 91.3,78.5 49.9,102.5 50.3,50.6"
				/>
			</g>
			<g className={styles.time}>
				<text className={styles.hours}>{hoursPad}</text>
				<text className={styles.minutes}>{minutesPad}</text>
				<text className={styles.seconds}>{secondsPad}</text>
			</g>
		</svg>
	)
}
