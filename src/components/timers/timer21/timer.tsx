import { TimerProps } from 'components/timers/time_manager'

import styles from './timer.module.css'

export const Timer = ({ hours, minutes, seconds }: TimerProps) => {
	return (
		<svg
			className={styles.base}
			viewBox="0 0 450 470"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g fillRule="evenodd" strokeLinecap="round">
				<path fill="#028f65" d="m180 214 200 51-41 170-43 20-167-39 48-204" />
				<path fill="#158229" d="m338 436-30-15-13 38 42-23" />
				<g stroke="#48ad90">
					<path d="M177 213c49 9 95 22 202 52m-201-53c73 19 147 38 201 54m2 1c-16 63-31 127-44 169m42-171-40 170m0-1c-15 11-33 17-40 23m41-22-42 23m-2 1c-48-11-96-23-166-45m167 43c-61-13-121-29-169-41m1-2c11-47 22-95 49-201m-49 202 50-202m0-1s0 0 0 0m0 0s0 0 0 0" />
					<path d="M340 436c-10-5-17-8-34-13m32 11-31-11m1-1c-6 13-11 23-11 37m10-38c-2 11-5 18-11 38m-2 1 43-25m-42 23c16-8 31-15 44-23m0 0s0 0 0 0m0 0s0 0 0 0" />
				</g>

				<path fill="#f86769" d="m191 63 199-50 49 166-23 39-169 49-55-201" />
				<path fill="#ca5d04" d="m441 180-34 2 8 38 24-41" />
				<g stroke="#ff9ac4">
					<path d="M189 64c61-17 122-31 203-54M191 66c42-14 85-24 200-54m3 1c14 47 26 99 46 166M392 11c16 61 34 123 48 167m1 1c-7 11-17 24-25 39m24-40-26 42m2 1c-65 17-132 31-169 46m167-47-167 45m1 0c-20-68-41-135-57-201m56 203L190 65m1 0s0 0 0 0m0 0s0 0 0 0" />
					<path d="M438 180c-10 1-17 3-34 2m37-3-36 4m3 1c-2 12 3 28 6 38m-9-38c2 9 5 17 8 37m2 1c6-17 16-27 24-41m-26 41c6-12 14-23 28-42m-1-1s0 0 0 0m0 0s0 0 0 0" />
				</g>

				<path fill="#d36feb" d="M10 79h207l6 172-36 33-173 3-3-211" />
				<path fill="#a884ff" d="m220 251-33-3v36l33-30" />
				<g stroke="#ff9ac4">
					<path d="m11 79 208-2M10 78l209 1m0 1c1 51 2 98 1 170m-1-172c-1 67 1 131 3 173m0 3c-12 9-20 18-37 29m38-32c-10 8-18 16-35 34m-3-1c-40 5-82 3-171 1m173-1c-40 1-80 2-175 2m0 1c2-80-1-155-1-209m2 207c-2-78-3-157-2-207m-1 0s0 0 0 0m0 0s0 0 0 0" />
					<path d="M223 251c-7 1-16 0-37-3m36 5-34-5m1 0c-1 13-5 24-5 40m4-41-3 39m2-1 33-34m-35 34 37-33m-1 1s0 0 0 0m0 0s0 0 0 0" />
				</g>
			</g>
			<g
				dominantBaseline="text-before-edge"
				textAnchor="middle"
				className={styles.time}
			>
				<g fill="#48ad90">
					<text x="59" transform="rotate(15 -954 916)">
						{seconds}
					</text>
					<text x="59" y="43.2" transform="rotate(15 -954 916)">
						SECONDS
					</text>
				</g>
				<g fill="#ff9ac4">
					<text x="59" transform="rotate(-15 511 -879)">
						{minutes}
					</text>
					<text x="59" y="43.2" transform="rotate(-15 511 -879)">
						MINUTES
					</text>
				</g>
				<g fill="#ff9ac4">
					<text x="59" transform="translate(46 132)">
						{hours}
					</text>
					<text x="59" y="43.2" transform="translate(46 132)">
						HOURS
					</text>
				</g>
			</g>
		</svg>
	)
}
