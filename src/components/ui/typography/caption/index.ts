import styled, { css } from 'styled-components'
import { light } from '@/styles'
import { CaptionProps } from '../types'

export const Caption = styled('h1').attrs<CaptionProps>(({ level }) => ({
	as: `h${level ? level : 3}`
}))<CaptionProps>`
	${({
		color = 'secondary',
		fontFamily = 'medium',
		fontWeight = 'medium',
		fontSize = 'xl',
		letterSpacing = 'px',
		lineHeight = 'none'
	}) =>
		css`
			overflow: hidden;
			color: ${light.colors.brandColors[color]};
			font-weight: ${light.typography.fontWeight[fontWeight]};
			font-family: ${light.typography.fontFamily[fontFamily]};
			font-size: ${light.typography.fontSize[fontSize]};
			line-height: ${light.typography.lineHeight[lineHeight]};
			letter-spacing: ${light.spacing[letterSpacing]};
		`}
`
