import { useState, useEffect } from 'react'
import { Resizable as ResizableComponent } from 'react-resizable'

import styles from './resizable.module.css'

const ResizeHandle = (_, ref) => (
	<div ref={ref} className={styles.resizeHandle}>
		<div className={styles.resizeHandleIcon} />
	</div>
)

const Resizable = ({ children, initialWidth, ...props }) => {
	const [width, setWidth] = useState(initialWidth)
	const minResizableWidth = 200

	const handleResize = (_, { size }) => {
		if (size.width > initialWidth) return
		if (size.width < minResizableWidth) return
		setWidth(size.width)
	}

	useEffect(() => {
		setWidth(initialWidth)
	}, [initialWidth])

	return (
		<ResizableComponent
			width={width}
			height={0}
			axis="x"
			handle={ResizeHandle}
			onResize={handleResize}
			style={{
				width: width,
			}}
			className={styles.resizable}
			{...props}
		>
			{children}
		</ResizableComponent>
	)
}

export { Resizable }
