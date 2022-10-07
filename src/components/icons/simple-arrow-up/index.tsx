import { FC } from 'react'
import { Props } from '../types'

export const SimpleArrowUp: FC<Props> = ({ className, ...props }): JSX.Element => {
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
			<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
		</svg>
	)
}
