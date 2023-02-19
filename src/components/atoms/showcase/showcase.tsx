import { useState, useRef, useEffect } from 'react'
import {
	CodeBracketIcon,
	LinkIcon,
	CubeIcon as CubeIconStroke,
} from '@heroicons/react/24/outline'
import {
	RocketLaunchIcon,
	UsersIcon,
	CubeIcon as CubeIconSolid,
} from '@heroicons/react/20/solid'
import Resizable from 'components/atoms/resizable'

import styles from './showcase.module.css'

const Tag = ({ icon: Icon, children }) => (
	<span className="px-3 py-1 flex items-center rounded-full text-white bg-indigo-500 ">
		{Icon && <Icon className="mr-2 h-5 w-5" aria-hidden="true" />}
		{children}
	</span>
)

export default function ({
	id,
	title,
	description,
	attribution,
	source,
	children,
}) {
	const [width, setWidth] = useState(null)
	const ref = useRef(null)

	useEffect(() => {
		const parentWidth = ref.current?.offsetWidth
		setWidth(parentWidth)
	}, [])

	return (
		<section className="flex flex-col mt-6 bg-dots-pattern" id={id} ref={ref}>
			<div className="lg:flex lg:items-center lg:justify-between bg-slate-700 rounded-t-xl p-4 shadow-ring">
				<div className="min-w-0 flex-1">
					<div className="group inline-flex gap-2 items-center">
						<h2 className="text-2xl font-bold leading-7 sm:text-3xl sm:tracking-tight text-slate-100 mr-2">
							{title}
						</h2>
						<Tag icon={RocketLaunchIcon}>Animated</Tag>
						<Tag icon={CubeIconSolid}>Filled</Tag>
						<Tag icon={CubeIconStroke}>Stroke</Tag>
						<a
							aria-hidden="true"
							href={`#${id}`}
							title="Copy link"
							className="opacity-0 group-hover:opacity-100 transition duration-200 text-slate-400 hover:text-indigo-500"
						>
							<LinkIcon className="h-6 w-6" />
						</a>
					</div>
					<div className="gap-3 flex flex-row flex-wrap text-slate-300">
						<p className="mr-2">{description}</p>
					</div>
				</div>
				<div className="mt-5 flex lg:mt-0 lg:ml-4">
					<div className="sm:ml-3">
						<a
							href={source}
							className="inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							<CodeBracketIcon
								className="-ml-1 mr-2 h-5 w-5 stroke-current stroke-2"
								aria-hidden="true"
							/>
							Source
						</a>
					</div>
				</div>
			</div>
			<Resizable initialWidth={width}>
				<div className="flex justify-center p-6 rounded-b-xl border-2 border-t-0 border-dashed border-slate-600 bg-dots-pattern bg-slate-900 bg-opacity-30">
					<div className={styles.resizableChildren}>{children}</div>
				</div>
			</Resizable>
		</section>
	)
}
