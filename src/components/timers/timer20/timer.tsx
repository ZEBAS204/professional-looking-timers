import { TimerProps } from 'components/timers/time_manager'

import styles from './timer.module.css'

// Generated using https://yoksel.github.io/svg-filters/#/presets/dancingStroke

export const Timer = ({ remainingtimeToDisplay }: TimerProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 40"
			className={styles.base}
		>
			<defs>
				<filter id="timer20Filter" height="140%" width="140%">
					<feMorphology
						operator="dilate"
						in="SourceAlpha"
						result="morphology"
						radius=".5 .3"
					/>
					<feFlood floodOpacity="1" result="flood" floodColor="red" />
					<feComposite
						in="flood"
						in2="morphology"
						operator="in"
						result="composite"
					/>
					<feComposite
						in="composite"
						in2="SourceAlpha"
						operator="out"
						result="composite1"
					/>
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.01 0.02"
						numOctaves="1"
						seed="0"
						stitchTiles="stitch"
						result="turbulence"
					/>
					<feDisplacementMap
						in="composite1"
						in2="turbulence"
						xChannelSelector="A"
						yChannelSelector="A"
						result="displacementMap"
						scale="17"
					/>
					<feMerge result="merge">
						<feMergeNode in="SourceGraphic" result="mergeNode" />
						<feMergeNode in="displacementMap" result="mergeNode1" />
					</feMerge>
				</filter>
			</defs>

			<text
				x="50%"
				y="60%"
				className={styles.time}
				filter="url(#timer20Filter)"
				textAnchor="middle"
			>
				{remainingtimeToDisplay}
			</text>
		</svg>
	)
}
