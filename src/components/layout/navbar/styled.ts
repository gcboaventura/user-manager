import { Close, Menu } from '@/components/icons'
import styled from 'styled-components'

export const Navbar = styled.nav`
	background-color: ${({ theme }) => theme.colors.brandColors.secondary};
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

export const MenuIcon = styled(Menu)`
	width: 35px;
	height: 35px;
	cursor: pointer;
	color: white;
	transition: ${({ theme }) => theme.animation.faster} all linear;
`

export const CloseIcon = styled(Close)`
	width: 35px;
	height: 35px;
	cursor: pointer;
	color: white;
	transition: ${({ theme }) => theme.animation.faster} all linear;
`
