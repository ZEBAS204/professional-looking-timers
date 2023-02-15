import { useState, useEffect } from 'react'
import { Resizable as ResizableComponent } from 'react-resizable'

import styles from './resizable.module.css'

const BREAKPOINTS = [
	{
		short_name: 'sm',
		name: 'Extra small devices',
		size: 640,
	},
	{
		short_name: 'md',
		name: 'Small devices',
		size: 768,
	},
	{
		short_name: 'lg',
		name: 'Medium devices',
		size: 1024,
	},
	{
		short_name: 'xl',
		name: 'Large devices',
		size: 1280,
	},
]

const Breakpoints = ({ width }) => (
	<>
		{BREAKPOINTS.map(({ short_name, name, size }) => (
			<div
				key={short_name}
				title={name}
				className={
					width + 16 >= size
						? styles.breakpoint_active
						: styles.breakpoint_disabled
				}
				style={{ left: `${size - 16}px` }}
			>
				<span className="text-slate-50 font-bold absolute top-[10%]">
					{short_name}
				</span>
			</div>
		))}
	</>
)

const ResizeHandle = (_, ref) => (
	<div ref={ref} className={styles.resizeHandle}>
		<div className={styles.resizeHandleIcon} />
	</div>
)

const ResizableWithBreakpoints = ({ children, ...props }) => {
	return <ResizableComponent {...props}>{children}</ResizableComponent>
}

const Resizable = ({ children, initialWidth }) => {
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
		<>
			<div
				aria-hidden="true"
				className="h-2 w-full bg-slate-600 hidden lg:flex"
			>
				<div
					aria-hidden="true"
					className="flex relative h-full bg-indigo-400 "
					style={{
						width: `${width}px`,
					}}
				>
					<Breakpoints width={width} />
				</div>
			</div>
			<ResizableWithBreakpoints
				width={width}
				height={0}
				axis="x"
				handle={ResizeHandle}
				onResize={handleResize}
				style={{
					width: width,
				}}
				className={styles.resizable}
			>
				{children}
			</ResizableWithBreakpoints>
		</>
	)
}

export { Resizable }
