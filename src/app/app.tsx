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
]

export default function App() {
	return (
		<main className={styles.main}>
			<header className={styles.header}>
				<h1 className={styles.headerTopTitle}>
					<span className={styles.headerTopTitleHighlight}>
						Professional-looking Timers
					</span>{' '}
					with pure CSS styling
				</h1>
				<p className={styles.headerBottomDescription}>
					This is a collection of timers that have been designed and developed
					using pure CSS.
					<br />
					These timers are not only visually appealing, but they are also fully
					functional and can be easily integrated into any application. My
					intention is to include a variety of different styles and designs to
					suit different needs and preferences.
					<br />
					All of the timers are easy to use and customize. They can be easily
					modified to fit the color scheme and branding of your application.
					<br />
					In addition, they are fully responsive, meaning they will look great
					on any device, regardless of screen size.
					<br />I hope you enjoy using this timers and find them useful in your
					projects. Happy codding!
				</p>
				<div className={styles.copy}>
					<a href="#">
						<Button>Visit on Github</Button>
					</a>
					<a href="#" title="Star project">
						<Button>
							<StarIcon className="w-6 h-6" />
						</Button>
					</a>
				</div>
			</header>

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
