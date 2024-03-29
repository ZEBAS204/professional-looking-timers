import { useState, useRef, useEffect, PropsWithChildren } from 'react'
import { CodeBracketIcon, LinkIcon } from '@heroicons/react/24/outline'

import Resizable from 'components/atoms/resizable'
import Tag from 'components/atoms/tag'

import styles from './showcase.module.css'
import AttributionButton from 'components/molecules/attribution-button'

interface ShowcaseProps
	extends PropsWithChildren<unknown>,
		Omit<TimerComponent, 'component'> {
	id: string
}

export default function Showcase({
	id,
	title,
	description,
	attribution,
	source,
	children,
}: ShowcaseProps) {
	const [width, setWidth] = useState<number>(null)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		let debounceTime: ReturnType<typeof setTimeout>

		const resize = () => setWidth(ref.current?.offsetWidth)
		resize()

		const handleResize = () => {
			clearTimeout(debounceTime)
			debounceTime = setTimeout(resize, 250)
		}
		window.addEventListener('resize', handleResize)

		return () => {
			removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<section
			className="flex flex-col mt-6 bg-dots-pattern relative"
			id={id}
			ref={ref}
		>
			<div className="lg:flex lg:items-center lg:justify-between bg-slate-700 rounded-t-xl p-4 shadow-ring">
				<div className="min-w-0 flex-1">
					<div className="inline-flex gap-2 items-center flex-wrap">
						<div className="group inline-flex gap-1 items-center basis-full md:basis-[auto]">
							<h2 className="text-2xl font-bold leading-7 sm:text-3xl sm:tracking-tight text-slate-100 mr-2">
								{title}
							</h2>
							<a
								aria-hidden="true"
								href={`#${id}`}
								title="Copy link"
								className="opacity-0 group-hover:opacity-100 transition duration-200 text-slate-400 hover:text-indigo-500"
							>
								<LinkIcon className="h-6 w-6" />
							</a>
						</div>
						<Tag icon="animated">Animated</Tag>
						<Tag icon="filled">Filled</Tag>
						<Tag icon="outlined">Stroke</Tag>
						<Tag icon="misc">Misc</Tag>
						<Tag
							icon="warning"
							title="This element may look different in some browsers"
						>
							May look different
						</Tag>
					</div>
					<div className="gap-3 flex flex-row flex-wrap text-slate-300">
						<p className="mr-2">{description}</p>
					</div>
				</div>
				<div className="mt-5 flex lg:mt-0 lg:ml-4">
					<div className="sm:ml-3">
						<AttributionButton attributions={attribution} />
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
				<div className="flex justify-center p-6 rounded-b-xl border border-slate-600 border-t-0 bg-dots-pattern bg-slate-900 ">
					<div className={styles.resizableChildren}>{children}</div>
				</div>
			</Resizable>
		</section>
	)
}
