import { forwardRef, ComponentProps, useState } from 'react'
import { StarIcon } from '@heroicons/react/24/outline'
import Modal from 'components/atoms/modal'

interface AttributionButtonProps
	extends Omit<ComponentProps<'button'>, 'className' | 'onClick'> {
	attributions: Attributions
}

const Attributions = (attributions: Attributions) => {
	const {
		source = '#',
		sourceName: AttSourceName,
		attribution,
		isIspiredBy,
	} = attributions

	const ispired = isIspiredBy ? 'Inspired by ' : ''
	const sourceName = AttSourceName ?? 'This fantastic work'

	return (
		<>
			<span>
				{ispired}
				<a href={source} target="_blank" rel="nofollow noreferrer">
					{sourceName}
				</a>
			</span>
			{' created by the talented:'}
			{attribution &&
				attribution.map((att) => (
					<span key={att.name.replace(' ', '_')} className="flex gap-2">
						<a href={att.url || '#'}>@{att.name}</a>
					</span>
				))}
		</>
	)
}

export const AttributionButton = forwardRef<
	HTMLButtonElement,
	AttributionButtonProps
>(({ attributions, ...rest }, ref) => {
	const [modalIsOpen, setIsOpen] = useState(false)

	const setModalOpen = () => setIsOpen(!modalIsOpen)

	if (!attributions?.source) return <></>

	return (
		<>
			<Modal
				title="Attributions"
				isOpen={modalIsOpen}
				handleClose={setModalOpen}
			>
				<Attributions {...attributions} />
			</Modal>

			<button
				ref={ref}
				onClick={setModalOpen}
				className="inline-flex items-center rounded-md border border-transparent bg-amber-300 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-amber-400 focus:outline-none focus:ring-2 focus:bg-amber-400 focus:ring-offset-2"
				{...rest}
			>
				<StarIcon
					className="-ml-1 mr-2 h-5 w-5 stroke-current stroke-2"
					aria-hidden="true"
				/>
				Attributions
			</button>
		</>
	)
})
