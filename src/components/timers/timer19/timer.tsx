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
				<radialGradient
					id="timer19BackgroundGradient"
					cx="75"
					cy="70"
					r="72.8"
					fx="75"
					fy="70"
					gradientTransform="translate(0 -1)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#30f2f2" />
					<stop offset=".6" stopColor="#355b8c" />
					<stop offset="0.95" stopColor="#2a325d" stopOpacity="0" />
				</radialGradient>

				<mask id="timer19OrbMask">
					<rect width="100%" height="100%" fill="#fff" />
					<path
						d="M39.1,78.1C33,56.8,45.2,34.7,66.5,28.6S109.9,34.7,116,56"
						fill="#000"
					/>
				</mask>
			</defs>

			<rect fill="url(#timer19BackgroundGradient)" width="100%" height="100%" />
			<g className={styles.outerGlow}>
				<circle cy="67" cx="77.5" r="58" />
				<circle cy="67" cx="77.5" r="52" />
				<circle cy="67" cx="77.5" r="46" />
			</g>
			<g className={styles.stars}>
				<circle cx="15.2" cy="73.7" r="1.2" />
				<circle cx="40.6" cy="31.3" r=".5" />
				<circle cx="56.1" cy="8" r=".5" />
				<circle cx="77.5" cy="128.5" r=".9" />
				<circle cx="91.7" cy="111.8" r=".5" />
				<circle cx="134.9" cy="75.5" r=".3" />
				<circle cx="50" cy="124.3" r=".7" />
				<circle cx="51.3" cy="105.5" r="1" />
				<circle cx="112.6" cy="35" r=".7" />
				<circle cx="123" cy="21.1" r="1.1" />
				<circle cx="26.8" cy="104.8" r="1" />
				<circle cx="34.4" cy="76.5" r=".3" />
				<circle cx="123.3" cy="67.9" r=".8" />
				<circle cx="82.1" cy="112.6" r=".9" />
				<circle cx="70.3" cy="119.2" r="1.2" />
				<circle cx="27.9" cy="39.6" r="1" />
				<circle cx="29.1" cy="22.8" r=".6" />
				<circle cx="53" cy="25.7" r=".3" />
				<circle cx="79.4" cy="7" r=".6" />
				<circle cx="124" cy="82.8" r=".5" />
				<circle cx="108.9" cy="111.4" r="1.1" />
				<circle cx="88.5" cy="26.2" r=".5" />
				<circle cx="104.5" cy="10.8" r=".9" />
				<circle cx="122.2" cy="30.3" r=".1" />
				<circle cx="17.7" cy="44" r="1.1" />
				<circle cx="35.7" cy="59.5" r=".6" />
				<circle cx="43" cy="25.1" r=".3" />
			</g>

			<circle r="40" cy="67" cx="77.5" className={styles.planet} />
			<text y="57%" x="36%" className={styles.time}>
				{secondsPad}
			</text>

			<g mask="url(#timer19OrbMask)">
				<ellipse
					className={styles.orbPath}
					transform="matrix(0.94 -0.32 0.32 0.94 -18.5 27.8)"
					cx="75"
					cy="70"
					rx="54.7"
					ry="12.1"
				/>
			</g>
		</svg>
	)
}
