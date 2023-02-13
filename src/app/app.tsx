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
].map(({ title, ...rest }, key) => ({
	...rest,
	title,
	id: title.replace(' ', '-') + key,
}))

export default function App() {
	return (
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
	)
}
