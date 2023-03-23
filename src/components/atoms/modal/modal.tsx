import { PropsWithChildren } from 'react'
import Modal from 'react-modal'
import Button from 'components/atoms/button'

import './modal.css'

Modal.setAppElement('#root')

const customStyles = {
	overlay: {
		zIndex: 1000,
		background: 'rgba(22, 23, 47, 0.75)',
		backdropFilter: 'blur(3px)',
	},
	content: {
		background: 'rgb(51, 65, 85)', // slate-700
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		border: 0,
		padding: 0,
		borderRadius: '0.5rem',
	},
}

const Title = ({ children }) => {
	if (!children) return <></>

	return (
		<div className="text-white font-sans text-lg font-semibold leading-6 border-slate-600 border-b-2 border-opacity-50 p-4">
			<h3>{children}</h3>
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

	//! Using conditional rendering with strict mode will bring
	//! react-modal's issue #808 (github.com/reactjs/react-modal/issues/808)
	if (!isOpen) return null

	return (
		<Modal
			isOpen
			closeTimeoutMS={200}
			onRequestClose={onClose}
			contentLabel={title}
			style={customStyles}
		>
			<Title>{title}</Title>
			<div className="px-4 py-3 sm:px-6">{children}</div>
			<div className="flex flex-shrink-0 flex-wrap items-center justify-end border-slate-600 border-t-2 border-opacity-50 px-4 py-3 sm:px-6">
				<Button onClick={onClose}>Close</Button>
			</div>
		</Modal>
	)
}
