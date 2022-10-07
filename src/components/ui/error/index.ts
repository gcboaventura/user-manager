import styled from 'styled-components'

export const ErrorMessage = styled.span`
	color: ${({ theme }) => theme.colors.semanticColors.danger};
	font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
	font-family: ${({ theme }) => theme.typography.fontFamily.regular};
	font-size: ${({ theme }) => theme.typography.fontSize.xs};
	line-height: ${({ theme }) => theme.typography.lineHeight.base};
	letter-spacing: ${({ theme }) => theme.spacing.px};
`
