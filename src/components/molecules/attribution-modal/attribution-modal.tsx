import { ComponentProps, useState } from 'react'
import Modal from 'components/atoms/modal'

interface AttributionProps
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

export const AttributionModal = ({ attributions }: AttributionProps) => {
	const [modalIsOpen, setIsOpen] = useState(false)

	const setModalOpen = () => setIsOpen(!modalIsOpen)

	if (!attributions?.source) return <></>

	return (
		<Modal title="Attributions" isOpen={modalIsOpen} handleClose={setModalOpen}>
			<Attributions {...attributions} />
		</Modal>
	)
}
