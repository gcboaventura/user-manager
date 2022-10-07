import { ReactNode } from 'react'

export interface Props {
	icon?: ReactNode
	name: string
	path: string
	onClose(): void
	pl?: boolean
	sub?: boolean
}
