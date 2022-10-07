import { FC } from 'react'
import { Props } from '../types'

export const SimpleArrowDown: FC<Props> = ({ className, ...props }): JSX.Element => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className={className}
			{...props}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
		</svg>
	)
}
