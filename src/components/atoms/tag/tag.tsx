import { FC, ReactNode, ComponentProps } from 'react'

import { CubeIcon as CubeIconStroke } from '@heroicons/react/24/outline'
import {
	RocketLaunchIcon,
	UsersIcon,
	CubeIcon as CubeIconSolid,
	CubeTransparentIcon,
	ExclamationTriangleIcon,
} from '@heroicons/react/20/solid'

import styles from './tag.module.css'

type IconTypeName =
	| 'community'
	| 'animated'
	| 'filled'
	| 'outlined'
	| 'warning'
	| 'misc'

interface IconElementType extends FC<ComponentProps<'svg'>> {
	title?: string
	titleId?: string
}

const allowedIcons: {
	[key in IconTypeName]: IconElementType
} = {
	community: UsersIcon,
	animated: RocketLaunchIcon,
	filled: CubeIconSolid,
	outlined: CubeIconStroke,
	warning: ExclamationTriangleIcon,
	misc: CubeTransparentIcon,
}

interface TagProps {
	icon: IconTypeName
	children?: ReactNode
	title?: string
}

export const Tag = ({ icon, children, title }: TagProps) => {
	const Icon = allowedIcons[icon]
	return (
		<span
			className="px-3 py-1 flex items-center rounded-full text-white bg-indigo-500"
			title={title}
		>
			<Icon className="mr-2 h-5 w-5" aria-hidden="true" />
			{children}
		</span>
	)
}
