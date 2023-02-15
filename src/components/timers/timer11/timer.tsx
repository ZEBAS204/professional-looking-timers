import { useEffect } from 'react'
import { useTimerContext } from 'components/timers/time_context'
import { TimerProps } from 'components/timers/time_manager'

import styles from './timer.module.css'

export const Timer = ({ secondsPad, minutesPad, hoursPad }: TimerProps) => {
	const { changeTime } = useTimerContext()

	useEffect(() => {
		changeTime(30000)
	}, [])

	return (
		<svg viewBox="0 0 315 105" className={styles.base}>
			<defs>
				<filter id="filterGradient13">
					<feTurbulence type="fractalNoise" baseFrequency="4" result="noise" />
					<feBlend
						in="SourceGraphic"
						in2="noiseFilter"
						mode="multiply"
						result="noiseBlend"
					/>
					<feComposite operator="in" in="noiseBlend" in2="SourceGraphic" />
				</filter>
				<filter id="filterBroken">
					{
						// * ----------------------------------
						// * If you don't like the "broken numbers" effect, you can remove this filter entirely
						// * - (also remember to remove the filter="url(#filterBroken") from the text elements
						// * ----------------------------------
					}
					<feTurbulence
						type="turbulence"
						baseFrequency="0.002 0.004"
						numOctaves="1"
						stitchTiles="stitch"
						result="turbulence"
					/>
					<feColorMatrix
						type="saturate"
						values="10"
						in="turbulence"
						result="colormatrix"
					/>
					<feColorMatrix
						type="matrix"
						values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -15"
						in="colormatrix"
						result="colormatrix1"
					/>
					<feComposite
						in="SourceGraphic"
						in2="colormatrix1"
						operator="in"
						result="composite"
					/>
					<feDisplacementMap
						in="SourceGraphic"
						in2="colormatrix1"
						scale="2"
						xChannelSelector="R"
						yChannelSelector="A"
					/>
				</filter>
				<linearGradient id="gradient13" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#fc0" />
					<stop offset="0.5" stopColor="#5200ff" />
					<stop offset="1" stopColor="#fd15ff" />
				</linearGradient>
			</defs>
			<path
				fill="url(#gradient13)"
				filter="url(#filterGradient13)"
				d="M299.5,21.6c-17-19.9-46.8-22.2-66.7-5.3c-1.9,1.6-3.7,3.4-5.3,5.3c-5.3,6.2-10.7,9.3-16.2,9.5
	c-5.5-0.2-10.9-3.3-16.2-9.5c-1.6-1.9-3.4-3.7-5.3-5.3C178.4,6.6,163.7,3.2,150,5.9c-8.6,1.2-16.9,4.8-23.9,10.8
	c-1.9,1.6-3.7,3.4-5.3,5.3C110,34.6,98.3,34.6,87.5,22c-17-19.9-46.8-22.2-66.7-5.3c-19.9,17-22.2,46.8-5.3,66.7s46.8,22.2,66.7,5.3
	c1.9-1.6,3.7-3.4,5.3-5.3c10.8-12.7,22.5-12.7,33.3,0c11.6,13.6,29.1,19,45.4,15.7c10.9-1.7,21.2-7.1,28.9-16.1
	c5.3-6.2,10.7-9.3,16.2-9.5c5.5,0.2,10.9,3.3,16.2,9.5c17,19.9,46.8,22.2,66.7,5.3C314.1,71.3,316.5,41.5,299.5,21.6L299.5,21.6z"
			/>

			<g className={styles.text}>
				<text transform="matrix(1 0 0 1 18 69)" filter="url(#filterBroken)">
					{hoursPad}
				</text>
				<text transform="matrix(1 0 0 1 125 69)" filter="url(#filterBroken)">
					{minutesPad}
				</text>
				<text transform="matrix(1 0 0 1 230 69)" filter="url(#filterBroken)">
					{secondsPad}
				</text>
			</g>
		</svg>
	)
}
