import React from 'react'

type Variant = 'contained' | 'text' | 'outline' | 'icon'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
	children?: React.ReactNode
	disabled?: boolean
	variant?: Variant
	width?: string
	height?: number
	loading?: boolean
	icon?: React.ReactNode
}

export interface StyledButtonProps {
	$width: string
	$height: number
	$variant: Variant
	$icon?: React.ReactNode
	$loading?: boolean
}
