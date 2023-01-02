import { useEffect } from 'react'
import styled from '@emotion/styled'

import { useTimerContext } from 'components/timers/time_context'
import { TimerProps } from 'components/timers/time_manager'

import styles from './timer.module.css'

const dynamicStyle = ({ totalTime, progress }) => {
	const progressPercent = Math.round((progress / totalTime) * 100) + 1

	return {
		height: '100%',
		width: '100%',
		'border-radius': ' 50%',
		transform: 'rotate(-2.5deg)',
		'transform-origin': 'center center 0',

		//! The effect WILL LOOK JAGGED ON FIREFOX
		//! https://bugzilla.mozilla.org/show_bug.cgi?id=1625917
		//! https://bugzilla.mozilla.org/show_bug.cgi?id=1715370
		'background-image': `conic-gradient(transparent ${progressPercent}%, #334457 0)`,
	}
}

const PizzaGradientComponent = styled.div`
	${dynamicStyle}
`

export const Timer = ({
	totalTime,
	remainingTime,
	remainingtimeToDisplayTrim,
}: TimerProps) => {
	const { changeTime } = useTimerContext()

	useEffect(() => {
		changeTime(60)
	}, [])

	const progress = totalTime - remainingTime

	return (
		<svg
			className={styles.base}
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<pattern
					id="pizzaPattern"
					patternUnits="userSpaceOnUse"
					width="30"
					height="30"
					patternTransform="rotate(30)"
				>
					<rect width="30" height="30" fill="#ED7878" />
					<circle r="8" cx="8" cy="12" fill="#334457" />
					<circle r="4" cx="20" cy="24" fill="#334457" />
				</pattern>
			</defs>

			<circle className={styles.inner_circle} r="50" cx="50" cy="50" />

			<circle fill="url(#pizzaPattern)" r="42" cx="50" cy="50" />
			<foreignObject x="0" y="0" width="100" height="100">
				<PizzaGradientComponent totalTime={totalTime} progress={progress} />
			</foreignObject>

			<circle
				className={styles.completion_ring_stroke}
				r="46"
				cx="50"
				cy="50"
			/>
			<circle
				className={styles.completion_ring_fill}
				r="46"
				cx="50"
				cy="50"
				pathLength={totalTime}
				strokeDasharray={
					// Plus 1 to prevent a strange offset in the stroke
					// in chromium based browsers
					`${progress} ${totalTime}`
				}
			/>
			<text
				className={styles.inner_circle_time}
				textAnchor="middle"
				x="50"
				y="55"
			>
				{remainingtimeToDisplayTrim}
			</text>
		</svg>
	)
}
