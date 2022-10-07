import { Email } from '@/components'
import { Grid } from '@mui/material'
import styled from 'styled-components'
import BackgroundImage from '../../../assets/img/background.png'

export const Background = styled.div`
	position: absolute;
	z-index: -1;
	background-image: url(${BackgroundImage});
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 100vh;

	&::before {
		content: '';
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
`

export const Wrapper = styled(Grid)`
	height: 100vh;
`

export const Card = styled(Grid)`
	border-radius: ${({ theme }) => theme.border.borderRadius.sm};
	background-color: rgba(255, 255, 255, 0.9);
	backdrop-filter: blur(15px);
	padding: ${({ theme }) => theme.spacing.s4};
`

export const CardHeader = styled(Grid)``

export const EmailIcon = styled(Email)`
	color: ${({ theme }) => theme.colors.neutralColors.grey.g4};
	width: 20px;
	height: 20px;
`
