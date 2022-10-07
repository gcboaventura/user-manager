import styled from 'styled-components'
import { SimpleArrowDown, SimpleArrowUp } from '@/components/icons'
import { Link as Lin } from 'react-router-dom'

export const ArrowDown = styled(SimpleArrowDown)`
	width: 25px;
	height: 25px;
	color: ${({ theme }) => theme.colors.brandColors.primary};
`
export const ArrowUp = styled(SimpleArrowUp)`
	width: 25px;
	height: 25px;
	color: ${({ theme }) => theme.colors.brandColors.primary};
`

export const Link = styled(Lin)`
	font-size: ${({ theme }) => theme.typography.fontSize.md};
	font-family: ${({ theme }) => theme.typography.fontFamily.regular};
	letter-spacing: ${({ theme }) => theme.spacing.px};
	text-decoration: none;
	color: ${({ theme }) => theme.colors.textColors.primary};
`
export const WrapperIcon = styled.div`
	width: 20px;
	height: 20px;
	margin-right: 20px;
	color: ${({ theme }) => theme.colors.textColors.primary};
`
