import styled, { css } from 'styled-components'
import { PropsLabelStyle } from './types'

export const Label = styled.label<PropsLabelStyle>`
	color: ${({ theme }) => theme.colors.textColors.primary};
	font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
	font-family: ${({ theme }) => theme.typography.fontFamily.regular};
	font-size: ${({ theme }) => theme.typography.fontSize.sm};
	line-height: ${({ theme }) => theme.typography.lineHeight.base};
	letter-spacing: ${({ theme }) => theme.spacing.px};

	${({ $error }) =>
		$error &&
		css`
			color: ${({ theme }) => theme.colors.semanticColors.danger};
		`}
`

export const Required = styled.span`
	margin-left: ${({ theme }) => theme.spacing.s1};
`
