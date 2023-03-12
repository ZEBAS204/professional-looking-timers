import { PropsWithChildren } from 'react'
import Modal from 'react-modal'
import Button from 'components/atoms/button'

Modal.setAppElement('#root')

const customStyles = {
	overlay: {
		zIndex: 1000,
		background: 'rgba(22, 23, 47, 0.75)',
		backdropFilter: 'blur(2px)',
	},
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		padding: 0,
		borderRadius: '0.5rem',
	},
}

const Title = ({ children }) => {
	if (!children) return <></>

	return (
		<div className="border-slate-700 border-b-2 border-opacity-50">
			<h1>{children}</h1>
		</div>
	)
}

interface ModalProps extends PropsWithChildren<unknown> {
	title?: string
	isOpen?: boolean
	handleClose?: () => void
}

export default function ({
	isOpen = true,
	handleClose,
	title,
	children,
}: ModalProps) {
	const onClose = () => {
		if (handleClose) handleClose()
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel={title}
			style={customStyles}
		>
			<Title>{title}</Title>
			<div className="px-4 py-3 sm:px-6">{children}</div>
			<div className="flex flex-shrink-0 flex-wrap items-center justify-end border-slate-700 border-t-2 border-opacity-50 px-4 py-3 sm:px-6">
				<Button onClick={onClose}>Close</Button>
			</div>
		</Modal>
	)
}
