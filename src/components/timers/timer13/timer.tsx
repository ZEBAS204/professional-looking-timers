import { useEffect } from 'react'

import { useTimerContext } from 'components/timers/time_context'
import { TimerProps } from 'components/timers/time_manager'

import styles from './timer.module.css'

/*
 * Highly inspired by the bubbles made by Yoksel!
 * https://github.com/yoksel
 * https://codepen.io/yoksel/pen/BzZyBJ
 */

export const Timer = ({ seconds }: TimerProps) => {
	const { changeTime } = useTimerContext()

	useEffect(() => {
		changeTime(59)
	}, [])

	return (
		<svg
			className={styles.base}
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<path
					id="wavesPath"
					d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
				/>

				<mask id="wavesMask" maskContentUnits="userSpaceOnUse">
					<rect fill="black" width="100%" height="100%" />
					<circle r="49%" cx="50%" cy="50%" fill="white" />
				</mask>

				<radialGradient id="grad--spot" fx="50%" fy="20%">
					<stop offset="10%" stopColor="white" stopOpacity=".7" />
					<stop offset="70%" stopColor="white" stopOpacity="0" />
				</radialGradient>

				<radialGradient id="grad--bw-light" fy="10%">
					<stop offset="60%" stopColor="black" stopOpacity="0" />
					<stop offset="90%" stopColor="white" stopOpacity=".25" />
					<stop offset="100%" stopColor="black" />
				</radialGradient>

				<mask id="mask--light-top" maskContentUnits="objectBoundingBox">
					<rect
						fill="url(#grad--bw-light)"
						width="1"
						height="1"
						transform="rotate(180, .5, .5)"
					/>
				</mask>

				<mask id="mask--light-bottom" maskContentUnits="objectBoundingBox">
					<rect fill="url(#grad--bw-light)" width="1" height="1" />
				</mask>

				<symbol id="light-bottom" viewBox="0 0 200 200">
					<circle
						r="50%"
						cx="50%"
						cy="50%"
						fill="#fff"
						mask="url(#mask--light-bottom)"
					/>
				</symbol>

				<symbol id="light-top" viewBox="0 0 200 200">
					<circle
						r="50%"
						cx="50%"
						cy="50%"
						fill="gray"
						mask="url(#mask--light-top)"
					/>
				</symbol>

				<symbol id="spot-top" viewBox="0 0 200 200">
					<ellipse
						rx="55"
						ry="25"
						cx="55"
						cy="55"
						fill="url(#grad--spot)"
						transform="rotate(-45, 55, 55)"
					/>
				</symbol>

				<symbol id="spot-bottom" viewBox="0 0 200 200">
					<ellipse
						rx="20%"
						ry="10%"
						cx="150"
						cy="150"
						fill="url(#grad--spot)"
						transform="rotate(-225, 150, 150)"
					/>
				</symbol>
			</defs>

			<g className={styles.parallax} mask="url(#wavesMask)">
				{
					// * --------
					// * Adjust the translate position as much as you like to raise or lower the waves
					// * --------
				}
				<g transform="translate(0 20)">
					<use href="#wavesPath" x="48" y="0" />
					<text className={styles.text} textAnchor="middle" x="50" y="45">
						{seconds}
					</text>
					<use href="#wavesPath" x="48" y="3" />
					<use href="#wavesPath" x="48" y="5" />
					<use href="#wavesPath" x="48" y="7" />
				</g>
			</g>
			<use href="#spot-bottom" />
			<use href="#light-bottom" />
			<use href="#light-top" />
			<use href="#spot-top" />
		</svg>
	)
}
