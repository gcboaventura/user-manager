import styled, { css } from 'styled-components'
import { StyledButtonProps } from './types'
import { shade } from 'polished'

export const WrapperLoading = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	& > svg {
		color: white;
		width: 60px;
		height: 60px;
	}
`

const COLOR = {
	contained: css`
		color: ${({ theme }) => theme.colors.neutralColors.white};
		background: ${({ theme }) => theme.colors.brandColors.primary};

		&:hover {
			background-color: ${({ theme }) => shade(0.2, theme.colors.brandColors.primary)};
		}
	`,

	text: css`
		color: ${({ theme }) => theme.colors.brandColors.primary};
		background: transparent;

		&:hover {
			background-color: ${({ theme }) => shade(0.2, theme.colors.brandColors.terciary)};
		}
	`,

	outline: css`
		color: ${({ theme }) => theme.colors.brandColors.secondary};
		background: transparent;
		border: 1px solid;
		border-color: ${({ theme }) => theme.colors.brandColors.secondary};

		&:hover {
			background-color: ${({ theme }) => shade(0.2, theme.colors.brandColors.terciary)};
		}
	`,
	icon: css`
		background: ${({ theme }) => theme.colors.brandColors.primary};
		color: ${({ theme }) => theme.colors.neutralColors.white};
		width: fit-content;

		& > svg {
			margin-left: 0;
		}

		&:hover {
			background-color: ${({ theme }) => shade(0.2, theme.colors.brandColors.primary)};
		}
	`
}

function disabledBorder(
	color: string,
	borderSize: string,
	borderSolid: string,
	borderColor: string
) {
	if (color === 'tertiary' || color === 'icon') return 'none'

	return `${borderSize} ${borderSolid} ${borderColor}`
}

function disabledBackgroundBorder(color: string, backgroundColor: string) {
	return 'grey'
}

export const Button = styled.button<StyledButtonProps>`
	font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
	font-family: ${({ theme }) => theme.typography.fontFamily.regular};
	font-size: ${({ theme }) => theme.typography.fontSize.lg};
	line-height: ${({ theme }) => theme.typography.lineHeight.base};
	letter-spacing: ${({ theme }) => theme.spacing.px};
	border-radius: ${({ theme }) => theme.border.borderRadius.sm};
	transition: ${({ theme }) => theme.animation.slow} all linear;
	letter-spacing: ${({ theme }) => theme.spacing.px};
	padding: 0 ${({ theme }) => theme.spacing.s2};
	border: none;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	cursor: pointer;

	${({ $loading }) =>
		$loading &&
		css`
			pointer-events: none;
		`}

	${({ $icon }) =>
		$icon &&
		css`
			& > svg {
				width: 22px;
				height: 22px;
				margin-left: 5px;
			}
		`}

	${({ $width, $height, $variant, theme }) =>
		css`
			width: ${$width ? $width : 'auto'};
			height: ${$height}px;
			${COLOR[$variant]}

			:disabled {
				color: ${theme.colors.neutralColors.white};
				border: ${disabledBorder($variant, theme.border.borderWidth.default, '2px', 'solid')};
				background-color: ${disabledBackgroundBorder(
					$variant,
					theme.colors.brandColors.quarternary
				)};
				cursor: none;

				:hover {
					background-color: ${disabledBackgroundBorder(
						$variant,
						theme.colors.brandColors.terciary
					)};
				}
			}
		`}
`
