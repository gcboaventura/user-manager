import { light } from '@/styles'

export interface Props {
	color?: keyof typeof light.colors.textColors
	fontWeight?: keyof typeof light.typography.fontWeight
	fontSize?: keyof typeof light.typography.fontSize
	fontFamily?: keyof typeof light.typography.fontFamily
	letterSpacing?: keyof typeof light.spacing
	lineHeight?: keyof typeof light.typography.lineHeight
}

export interface TitleProps extends Props {
	level?: 1 | 2
}

export interface CaptionProps extends Props {
	level?: 3 | 4 | 5 | 6
}

export interface TextProps extends Props {}
