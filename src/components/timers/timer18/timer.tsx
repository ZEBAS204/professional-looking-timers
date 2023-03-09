import { TimerProps } from 'components/timers/time_manager'

import styles from './timer.module.css'

export const Timer = ({ secondsPad }: TimerProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 150 140"
			className={styles.base}
		>
			<defs>
				<path
					id="timer19Orb1"
					d="M135.2,53.7C148.8,95.6,24.6,129.9,15,87C1.2,45.1,125.4,10.7,135.2,53.7z"
				/>
				<path
					id="timer19Orb2"
					d="M68.4,39.1c79.8-2.3,101.5,66.1,14.4,66.8C3,108.4-18.6,40,68.4,39.1z"
				/>
				<path
					id="timer19Orb3"
					d="M124.1,73.5c-11.9,44-126.5,79.8-98.2-6.9C37.8,22.6,152.3-13.2,124.1,73.5z"
				/>
				<path
					id="timer19Orb4"
					d="M14.8,86.3C1.2,44.4,125.3,10.1,135.1,53C148.8,94.9,24.5,129.3,14.8,86.3z"
				/>
				<path
					id="timer19Orb5"
					d="M81.6,100.9C1.7,103.2-20,34.8,67.1,34.1C146.9,31.6,168.6,100,81.6,100.9z"
				/>
				<path
					id="timer19Orb6"
					d="M26,66.5c11.9-44,126.5-79.8,98.2,6.9C112.2,117.4-2.3,153.2,26,66.5z"
				/>
			</defs>

			<circle r="40" cy="67" cx="77.5" className={styles.planet} />
			<g className={styles.orb}>
				<circle r="9">
					<animateMotion dur="3s" repeatCount="indefinite">
						<mpath xlinkHref="#timer19Orb1" />
					</animateMotion>
				</circle>
				<circle r="8">
					<animateMotion dur="3s" repeatCount="indefinite">
						<mpath xlinkHref="#timer19Orb2" />
					</animateMotion>
				</circle>
				<circle r="5">
					<animateMotion dur="3s" repeatCount="indefinite">
						<mpath xlinkHref="#timer19Orb3" />
					</animateMotion>
				</circle>
				<circle r="9">
					<animateMotion dur="3s" repeatCount="indefinite">
						<mpath xlinkHref="#timer19Orb4" />
					</animateMotion>
				</circle>
				<circle r="7">
					<animateMotion dur="3s" repeatCount="indefinite">
						<mpath xlinkHref="#timer19Orb5" />
					</animateMotion>
				</circle>
				<circle r="6">
					<animateMotion dur="3s" repeatCount="indefinite">
						<mpath xlinkHref="#timer19Orb6" />
					</animateMotion>
				</circle>
			</g>
			<path
				className={styles.planet}
				d="M37.5,67c0-22.1,17.9-40,40-40s40,17.9,40,40"
			/>
			<text y="57%" x="36%" className={styles.time}>
				{secondsPad}
			</text>
		</svg>
	)
}
