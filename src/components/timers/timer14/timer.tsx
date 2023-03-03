import { useEffect } from 'react'

import { useTimerContext } from 'components/timers/time_context'
import { TimerProps } from 'components/timers/time_manager'

import styles from './timer.module.css'

/*
 * Highly inspired by Yoksel!
 * https://github.com/yoksel
 * https://codepen.io/yoksel/pen/Nregqo
 */

export const Timer = ({ secondsPad, minutesPad, hoursPad }: TimerProps) => {
	const { changeTime } = useTimerContext()

	useEffect(() => {
		changeTime(59)
	}, [])

	return (
		<svg viewBox="0 0 830 180" className={styles.base}>
			<defs>
				<linearGradient id="gradient">
					<stop offset="0" stopColor="gold"></stop>
					<stop offset="30%" stopColor="red"></stop>
					<stop offset="60%" stopColor="darkviolet"></stop>
					<stop offset="100%" stopColor="deepskyblue"></stop>
				</linearGradient>

				<symbol id="text">
					<text x="50%" y="50%" dy=".35em" className={styles.text}>
						{hoursPad} &bull; {minutesPad} &bull; {secondsPad}
					</text>
				</symbol>

				<mask id="mask-top">
					<rect width="100%" height="50%" x="0" y="0%" fill="white" />
				</mask>

				<mask id="mask-bottom">
					<rect
						width="96%"
						height="96%"
						x="2%"
						y="2%"
						rx="20"
						fill="white"
						stroke="#999"
						strokeWidth="5"
					/>
					<rect width="100%" height="50%" x="0" y="0%" fill="black" />
					<use href="#text" stroke="none" fill="black" />
				</mask>
			</defs>

			<g fill="url(#gradient)" stroke="url(#gradient)" strokeWidth="5">
				<g mask="url(#mask-top)">
					<rect width="96%" height="96%" x="2%" y="2%" rx="20" fill="none" />
					<use href="#text" fill="none" strokeWidth="2" />
				</g>
				<g mask="url(#mask-bottom)">
					<rect width="96%" height="96%" x="2%" y="2%" rx="20" />
				</g>
			</g>
			<use href="#text" fill="none" stroke="none" textAnchor="middle" />
		</svg>
	)
}
