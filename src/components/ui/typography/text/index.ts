import styled, { css } from 'styled-components'
import { light } from '@/styles'
import { TextProps } from '../types'

export const Text = styled('p')<TextProps>`
	${({
		color = 'primary',
		fontFamily = 'regular',
		fontWeight = 'medium',
		fontSize = 'lg',
		letterSpacing = 'px',
		lineHeight = 'base'
	}) => css`
		color: ${light.colors.brandColors[color]};
		font-weight: ${light.typography.fontWeight[fontWeight]};
		font-family: ${light.typography.fontFamily[fontFamily]};
		font-size: ${light.typography.fontSize[fontSize]};
		line-height: ${light.typography.lineHeight[lineHeight]};
		letter-spacing: ${light.spacing[letterSpacing]};
	`}
`
