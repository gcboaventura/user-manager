import { FC } from 'react'
import { Props } from './types'
import { LoadingLine } from '@/components'
import * as Styled from './styled'

export const Button: FC<Props> = ({
	onClick,
	children,
	disabled,
	variant,
	width,
	height,
	loading,
	icon,
	...rest
}): JSX.Element => {
	return (
		<Styled.Button
			$width={`${width}`}
			$variant={variant || 'contained'}
			$height={Number(height)}
			$icon={icon}
			$loading={loading}
			onClick={onClick}
			disabled={disabled}
			{...rest}
		>
			{loading ? (
				<Styled.WrapperLoading>
					<LoadingLine />
				</Styled.WrapperLoading>
			) : (
				<>{variant !== 'icon' && children}</>
			)}
			{!loading && icon && icon}
		</Styled.Button>
	)
}
