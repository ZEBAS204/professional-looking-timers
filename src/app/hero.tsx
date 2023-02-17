import { StarIcon } from '@heroicons/react/24/solid'
import {
	EyeIcon,
	ClipboardDocumentIcon,
	StarIcon as StarIconOutline,
} from '@heroicons/react/24/outline'
import Button from 'components/atoms/button'

import styles from './hero.module.css'

const Steps = ({ title, icon: Icon, stepnum, children }) => (
	<li className="flex rounded-lg p-8 flex-col bg-slate-700 shadow-ring">
		<div className="flex items-center mb-3">
			<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white">
				<Icon className="w-6 h-6" aria-hidden="true" />
			</div>
			<h2 className="flex items-center text-lg font-semibold leading-6 gap-2">
				<span className="text-indigo-500">Step {stepnum}</span>
				<span className="h-4 w-px bg-slate-500" />
				<span className="text-white">{title}</span>
			</h2>
		</div>
		<p className="leading-relaxed text-base text-justify text-slate-300">
			{children}
		</p>
	</li>
)

const Highlight = ({ children }) => (
	<span className={styles.highlight}>{children}</span>
)

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
				Professional-looking Timers
				{'\n'}
				<Highlight>with pure CSS styling</Highlight>
			</h1>
			<p className={styles.headerBottomDescription}>
				This is a collection of timers that have been designed and developed
				using <Highlight>pure CSS</Highlight> and <Highlight>SVG</Highlight>.
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
				<a href={__PROJECT_SOURCE__}>
					<Button>Visit on Github</Button>
				</a>
				<a href="#" title="Star project">
					<Button>
						<StarIcon className="w-6 h-6" />
					</Button>
				</a>
			</div>
			<ol className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-8">
				<Steps stepnum={1} title="Find the perfect component" icon={EyeIcon}>
					Every component is embedded live directly on the page, and you can
					even see what they look like at different breakpoints by dragging the
					slider on the right.
				</Steps>
				<Steps
					stepnum={2}
					title="Copy the snippet"
					icon={ClipboardDocumentIcon}
				>
					Click the <Highlight>Source</Highlight> button to see the code for a
					component. All components receive the time as props, so you can easily
					adapt to an existing workflow or, if you want, copy the code of the
					context.
				</Steps>
				<Steps
					stepnum={3}
					title="Customize to your liking"
					icon={StarIconOutline}
				>
					Every component is built entirely out of SVG and CSS, so you can
					easily modify anything you want to better fit your use case.
				</Steps>
			</ol>
		</header>
	)
}
