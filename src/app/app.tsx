import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Showcase as ComponentShowcase } from 'components/atoms/showcase'
import Hero from './hero'
import styles from './app.module.css'

import {
	Timer1,
	Timer1Inverted,
	Timer2,
	Timer3,
	Timer4,
	Timer5,
	Timer6,
	Timer7,
	Timer8,
	Timer9,
	Timer10,
	Timer10Inverted,
	Timer11,
	Timer12,
} from 'components/timers'

const showcase = [
	Timer1,
	Timer1Inverted,
	Timer2,
	Timer3,
	Timer4,
	Timer5,
	Timer6,
	Timer7,
	Timer8,
	Timer9,
	Timer10,
	Timer10Inverted,
	Timer11,
	Timer12,
].map(({ title, ...rest }, key) => ({
	...rest,
	title,
	id: title.replace(' ', '-') + key,
}))

export default function App() {
	return (
		<>
			<main className={styles.main}>
				<Hero />

				<div
					className="h-2 w-full bg-slate-700 bg-opacity-50"
					aria-hidden="true"
				/>

				<section className={styles.showcase}>
					{showcase.map(({ component: Component, ...props }) => (
						<ComponentShowcase key={props.id} {...props}>
							<Component />
						</ComponentShowcase>
					))}
				</section>
			</main>
			<footer className={styles.footer}>
				<div className={styles.footerHeader}>
					<h1 className={styles.contributeHeader}>Want to include your own?</h1>
					<a href={__PROJECT_SOURCE__} className={styles.contributeButton}>
						<span className={styles.contributeButtonIcon}>
							<ArrowRightIcon aria-hidden="true" />
						</span>
						<span className={styles.contributeButtonText}>Contribute</span>
						<span className={styles.Invisible}>Contribute</span>
					</a>
				</div>
				<svg
					viewBox="0 0 900 900"
					className={styles.blobBG}
					preserveAspectRatio="none"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g transform="translate(900, 0)">
						<path
							d="M0 459.7C-41 432.9 -82.1 406 -128.2 394.7C-174.4 383.4 -225.7 387.5 -268.6 369.7C-311.5 351.9 -346.1 312.1 -371.9 270.2C-397.7 228.3 -414.8 184.4 -428 139.1C-441.2 93.7 -450.4 46.8 -459.7 0L0 0Z"
							fill="#131f37"
						/>
						<path
							d="M0 383.1C-34.2 360.7 -68.4 338.3 -106.9 328.9C-145.3 319.5 -188.1 323 -223.8 308.1C-259.6 293.3 -288.4 260.1 -309.9 225.2C-331.4 190.3 -345.7 153.7 -356.6 115.9C-367.6 78.1 -375.4 39 -383.1 0L0 0Z"
							fill="#4d345e"
						/>
						<path
							d="M0 306.5C-27.4 288.6 -54.7 270.7 -85.5 263.1C-116.3 255.6 -150.5 258.4 -179.1 246.5C-207.7 234.6 -230.7 208.1 -247.9 180.1C-265.2 152.2 -276.5 123 -285.3 92.7C-294.1 62.5 -300.3 31.2 -306.5 0L0 0Z"
							fill="#96446e"
						/>
						<path
							d="M0 229.9C-20.5 216.4 -41 203 -64.1 197.3C-87.2 191.7 -112.8 193.8 -134.3 184.9C-155.8 176 -173 156 -186 135.1C-198.9 114.2 -207.4 92.2 -214 69.5C-220.6 46.8 -225.2 23.4 -229.9 0L0 0Z"
							fill="#d55e64"
						/>
						<path
							d="M0 153.2C-13.7 144.3 -27.4 135.3 -42.7 131.6C-58.1 127.8 -75.2 129.2 -89.5 123.2C-103.8 117.3 -115.4 104 -124 90.1C-132.6 76.1 -138.3 61.5 -142.7 46.4C-147.1 31.2 -150.1 15.6 -153.2 0L0 0Z"
							fill="#f88f4a"
						/>
					</g>
					<g transform="translate(0, 600)">
						<path
							d="M0 -459.7C51.7 -461 103.4 -462.3 142.1 -437.2C180.8 -412.1 206.5 -360.6 235.1 -323.6C263.8 -286.6 295.4 -264 322.8 -234.5C350.2 -205.1 373.5 -168.8 395.6 -128.6C417.8 -88.3 438.7 -44.2 459.7 0L0 0Z"
							fill="#131f37"
						/>
						<path
							d="M0 -383.1C43.1 -384.2 86.1 -385.2 118.4 -364.3C150.6 -343.4 172.1 -300.5 195.9 -269.7C219.8 -238.8 246.1 -220 269 -195.4C291.9 -170.9 311.3 -140.7 329.7 -107.1C348.1 -73.6 365.6 -36.8 383.1 0L0 0Z"
							fill="#4d345e"
						/>
						<path
							d="M0 -306.5C34.5 -307.3 68.9 -308.2 94.7 -291.5C120.5 -274.7 137.6 -240.4 156.7 -215.7C175.8 -191 196.9 -176 215.2 -156.4C233.5 -136.7 249 -112.5 263.8 -85.7C278.5 -58.9 292.5 -29.4 306.5 0L0 0Z"
							fill="#96446e"
						/>
						<path
							d="M0 -229.9C25.8 -230.5 51.7 -231.1 71 -218.6C90.4 -206.1 103.2 -180.3 117.6 -161.8C131.9 -143.3 147.7 -132 161.4 -117.3C175.1 -102.5 186.8 -84.4 197.8 -64.3C208.9 -44.2 219.4 -22.1 229.9 0L0 0Z"
							fill="#d55e64"
						/>
						<path
							d="M0 -153.2C17.2 -153.7 34.5 -154.1 47.4 -145.7C60.3 -137.4 68.8 -120.2 78.4 -107.9C87.9 -95.5 98.5 -88 107.6 -78.2C116.7 -68.4 124.5 -56.3 131.9 -42.9C139.3 -29.4 146.2 -14.7 153.2 0L0 0Z"
							fill="#f88f4a"
						/>
					</g>
				</svg>
			</footer>
		</>
	)
}
