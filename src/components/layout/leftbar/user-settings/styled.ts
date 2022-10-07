import styled, { css } from 'styled-components'
import { Box, Grid } from '@mui/material'
import { Engine } from '@/components/icons'

export const Username = styled.p`
	color: ${({ theme }) => theme.colors.neutralColors.white};
	font-family: ${({ theme }) => theme.typography.fontFamily.medium};
	font-size: ${({ theme }) => theme.typography.fontSize.lg};
	letter-spacing: ${({ theme }) => theme.spacing.px};
	margin-top: 3px;
`
export const Office = styled.p`
	color: ${({ theme }) => theme.colors.neutralColors.white};
	font-family: ${({ theme }) => theme.typography.fontFamily.regular};
	font-size: ${({ theme }) => theme.typography.fontSize.xs};
	letter-spacing: ${({ theme }) => theme.spacing.px};
	margin-top: 7px;
`

export const Business = styled.p`
	color: ${({ theme }) => theme.colors.neutralColors.white};
	font-family: ${({ theme }) => theme.typography.fontFamily.regular};
	font-size: ${({ theme }) => theme.typography.fontSize.xs};
	letter-spacing: ${({ theme }) => theme.spacing.px};
	margin-top: 7px;
`

export const BoxWrapper = styled(Box)`
	background-color: ${({ theme }) => theme.colors.brandColors.primary};
`

export const IconConfig = styled(Engine)`
	width: 20px;
	height: 20px;
	color: white;
	cursor: pointer;
`
export const Header = styled(Grid)`
	border-bottom: 1px solid ${({ theme }) => theme.colors.brandColors.quarternary};
	margin-bottom: 10px;
`

export const Involucro = styled.p`
	color: ${({ theme }) => theme.colors.neutralColors.white};
	font-family: ${({ theme }) => theme.typography.fontFamily.medium};
	font-size: ${({ theme }) => theme.typography.fontSize.lg};
	letter-spacing: ${({ theme }) => theme.spacing.px};
	margin-bottom: 10px;
`
