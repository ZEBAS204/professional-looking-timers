import { TimerProps } from 'components/timers/time_manager'

import styles from './timer.module.css'

export const Timer = ({ hoursPad, minutesPad, secondsPad }: TimerProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 105 121"
			className={styles.base}
		>
			<path className={styles.leftSideView} d="m3 32 49.6 28.5v57.2L3 89.1z" />
			<path className={styles.topView} d="M52.6 3.4 102 31.9 52.6 60.5 3 32Z" />
			<path className={styles.rightSideView} d="M102 32v57l-49.4 28.6V60.5z" />
			<path className={styles.leftSideView} d="M52.6 60.5V12.7l41.4 24v47.8z" />
			<g className={styles.time}>
				<text className={styles.minutes}>{minutesPad}</text>
			</g>
			<path
				className={styles.rightSideView}
				d="M52.6 12.7v47.8L11 84.5V36.6Z"
			/>
			<g className={styles.time}>
				<text className={styles.hours}>{hoursPad}</text>
			</g>
			<path
				className={styles.topView}
				d="m52.6 60.5 41.4 24-41.4 23.9-41.5-24Z"
			/>
			<g className={styles.time}>
				<text className={styles.seconds}>{secondsPad}</text>
			</g>
			<path
				className={styles.rightSideView}
				d="m63.9 54-11.3 6.5v13l11.3-6.4Z"
			/>
			<path
				className={styles.topView}
				d="M52.6 47.5 63.9 54l-11.3 6.5L41.3 54Z"
			/>
			<path
				className={styles.leftSideView}
				d="m41.3 54 11.3 6.5v13l-11.3-6.4z"
			/>
			<g className={styles.timeFormat}>
				<text className={styles.timeFormatHours}>h</text>
				<text className={styles.timeFormatMinutes}>m</text>
				<text className={styles.timeFormatSeconds}>s</text>
			</g>
		</svg>
	)
}
