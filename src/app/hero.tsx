import { StarIcon, LinkIcon } from '@heroicons/react/24/solid'
import {
	EyeIcon,
	ClipboardDocumentIcon,
	StarIcon as StarIconOutline,
} from '@heroicons/react/24/outline'
import Button from 'components/atoms/button'

import styles from './hero.module.css'

export default function () {
	return (
		<header className={styles.header}>
			<svg
				className={styles.gradient}
				viewBox="0 0 1155 678"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient
						id="hero_gradient_style_fill"
						x1="1155.49"
						x2="-78.208"
						y1=".177"
						y2="474.645"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#9089FC"></stop>
						<stop offset="1" stopColor="#FF80B5"></stop>
					</linearGradient>
				</defs>
				<path
					fill="url(#hero_gradient_style_fill)"
					fillOpacity="0.3"
					d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
				/>
			</svg>
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
				In addition, they are fully responsive, meaning they will look great on
				any device, regardless of screen size.
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
			<div className="text-gray-400 bg-gray-900">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
						<div className="p-4 md:w-1/3 flex">
							<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-200 text-indigo-400 flex-shrink-0 m-6">
								<EyeIcon />
							</div>
							<div className="flex-grow pl-6">
								<h2 className="text-white text-lg title-font font-medium mb-2">
									Find the perfect component
								</h2>
								<p className="leading-relaxed text-base">
									Every component is embedded live directly on the page, and you
									can even see what they look like at different breakpoints by
									dragging the slider on the right.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex">
							<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
								<ClipboardDocumentIcon />
							</div>
							<div className="flex-grow pl-6">
								<h2 className="text-white text-lg title-font font-medium mb-2">
									Copy the snippet
								</h2>
								<p className="leading-relaxed text-base">
									Click the "Source" button to see the code for a component. All
									components receive the time as props, so you can easily adapt
									to an existing workflow or, if you want, copy the code of the
									context.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex">
							<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
								<StarIconOutline />
							</div>
							<div className="flex-grow pl-6">
								<h2 className="text-white text-lg title-font font-medium mb-2">
									Customize to your liking
								</h2>
								<p className="leading-relaxed text-base">
									Every component is built entirely out of SVG and CSS, so you
									can easily modify anything you want to better fit your use
									case.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
