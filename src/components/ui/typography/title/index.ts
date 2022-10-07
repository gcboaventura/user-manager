import styled, { css } from 'styled-components'
import { light } from '@/styles'
import { TitleProps } from '../types'

export const Title = styled('h1').attrs<TitleProps>(({ level }) => ({
	as: `h${level ? level : 1}`
}))<TitleProps>`
	${({
		color = 'primary',
		fontFamily = 'regular',
		fontWeight = 'medium',
		fontSize = 'xl4',
		letterSpacing = 'px',
		lineHeight = 'none'
	}) => css`
		color: ${light.colors.brandColors[color]};
		font-weight: ${light.typography.fontWeight[fontWeight]};
		font-family: ${light.typography.fontFamily[fontFamily]};
		font-size: ${light.typography.fontSize[fontSize]};
		line-height: ${light.typography.lineHeight[lineHeight]};
		letter-spacing: ${light.spacing[letterSpacing]};
	`}
`
