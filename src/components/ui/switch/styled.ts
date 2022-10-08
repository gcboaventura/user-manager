import styled from 'styled-components'

export const Label = styled.p`
	font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
	font-family: ${({ theme }) => theme.typography.fontFamily.regular};
	font-size: ${({ theme }) => theme.typography.fontSize.md};
	line-height: ${({ theme }) => theme.typography.lineHeight.base};
	letter-spacing: ${({ theme }) => theme.spacing.px};
`
