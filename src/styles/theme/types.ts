export interface ThemeModel {
	colors: Colors
	typography: Typography
	border: Border
	shadow: Shadow
	opacity: Opacity
	spacing: Spacing
	animation: Animation
	breakpoints: BreakPoints
}

export interface DefaultTheme {
	typography: Typography
	border: Border
	shadow: Shadow
	opacity: Opacity
	spacing: Spacing
	animation: Animation
	breakpoints: BreakPoints
}

interface Colors {
	brandColors: {
		primary: string
		secondary: string
		terciary: string
		quarternary: string
	}
	textColors: {
		primary: string
		secondary: string
		terciary: string
		quarternary: string
	}
	semanticColors: {
		success: string
		danger: string
		warning: string
		new: string
	}
	neutralColors: {
		black: string
		white: string
		background: string
		grey: {
			g1: string
			g2: string
			g3: string
			g4: string
			g5: string
		}
	}
}

interface Typography {
	fontFamily: {
		thin: string
		italic: string
		light: string
		regular: string
		medium: string
		bold: string
	}
	fontWeight: {
		regular: string
		medium: string
		bold: string
	}
	fontSize: {
		xxs: string
		xs: string
		sm: string
		md: string
		lg: string
		xl: string
		xl2: string
		xl4: string
		xl5: string
		xl6: string
		xl7: string
		xl8: string
		xl9: string
	}
	lineHeight: {
		none: string
		shorter: string
		short: string
		base: string
		tall: string
	}
}

interface Border {
	borderRadius: {
		default: string
		xs: string
		sm: string
		md: string
		lg: string
		full: string
	}
	borderWidth: {
		default: string
		thin: string
		medium: string
		thick: string
		heavy: string
	}
}

interface Shadow {
	default: string
	base: string
}

interface Opacity {
	default: string
	semiOpaque: string
	intense: string
	medium: string
	light: string
	semiTransparent: string
}

interface Spacing {
	none: string
	px: string
	s1: string
	s2: string
	s3: string
	s4: string
	s5: string
	s6: string
	s8: string
	s10: string
	s12: string
	s16: string
}

interface Animation {
	instant: string
	faster: string
	fast: string
	normal: string
	slow: string
	slower: string
}

interface IntervaelBreakpoint {
	min: string
	max?: string
}

interface BreakPoints {
	xs: IntervaelBreakpoint
	sm: IntervaelBreakpoint
	md: IntervaelBreakpoint
	lg: IntervaelBreakpoint
	xl: IntervaelBreakpoint
	xxl: IntervaelBreakpoint
	xxxl: IntervaelBreakpoint
	full: IntervaelBreakpoint
}
