import { StarIcon, LinkIcon } from '@heroicons/react/24/solid'
import Button from 'components/atoms/button'
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
]

export default function App() {
	return (
		<main className={styles.main}>
			<Hero />
			<section className={styles.showcase}>
				{showcase.map(
					({ component, title, description, attribution, source }, key) => {
						const id = title.replace(' ', '-')
						/*<div className={styles.showcaseInfo}>
									<div
										className={styles.showcaseInfoLinkIcon}
										onClick={() => {
											// TODO: set URL to point to the #{id}
										}}
									>
										<LinkIcon />
									</div>
						*/
						return (
							<div className={styles.showcaseContent} id={id} key={key}>
								<div className={styles.showcaseLine}></div>
								<div className={styles.showcaseInfo}>
									<h4>
										{title} -{' '}
										<a className={styles.showcaseSource} href={source}>
											SOURCE
										</a>
									</h4>
									{description}
									<div>Contributors: {attribution}</div>
								</div>
								<div className={styles.showcaseContentClock}>{component()}</div>
							</div>
						)
					}
				)}
			</section>
		</main>
	)
}
