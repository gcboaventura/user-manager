import styled from 'styled-components'
import { SimpleArrowDown, SimpleArrowUp } from '@/components/icons'

export const ArrowDown = styled(SimpleArrowDown)`
	width: 25px;
	height: 25px;
	color: ${({ theme }) => theme.colors.textColors.primary};
`
export const ArrowUp = styled(SimpleArrowUp)`
	width: 25px;
	height: 25px;
	color: ${({ theme }) => theme.colors.brandColors.primary};
`
export const WrapperIcon = styled.div`
	width: 20px;
	height: 20px;
	margin-right: 10px;
	color: ${({ theme }) => theme.colors.textColors.primary};
`
