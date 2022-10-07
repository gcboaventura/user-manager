import { DefaultTheme } from './types'

export const defaultTheme: DefaultTheme = {
	typography: {
		fontFamily: {
			thin: 'Thin',
			italic: 'Italic',
			light: 'Light',
			regular: 'Regular',
			medium: 'Medium',
			bold: 'Bold'
		},
		fontWeight: {
			regular: 'regular',
			medium: 'medium',
			bold: 'bold'
		},
		fontSize: {
			xxs: '0.625rem',
			xs: '0.75rem',
			sm: '0.875rem',
			md: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			xl2: '1.5rem',
			xl4: '2rem',
			xl5: '2.25rem',
			xl6: '3rem',
			xl7: '4rem',
			xl8: '4.5rem',
			xl9: '6rem'
		},
		lineHeight: {
			none: '100%',
			shorter: '125%',
			short: '140%',
			base: '160%',
			tall: '180%'
		}
	},
	border: {
		borderRadius: {
			default: '0px',
			xs: '2.5px',
			sm: '5px',
			md: '10px',
			lg: '20px',
			full: '9999px'
		},
		borderWidth: {
			default: '0',
			thin: '1',
			medium: '1.5',
			thick: '2',
			heavy: '4'
		}
	},
	shadow: {
		default: '0 0 0',
		base: '4px 16px 0'
	},
	opacity: {
		default: '100%',
		semiOpaque: '90%',
		intense: '75%',
		medium: '50%',
		light: '25%',
		semiTransparent: '10%'
	},
	spacing: {
		none: '0',
		px: '1px',
		s1: '0.25rem',
		s2: '0.5rem',
		s3: '0.75rem',
		s4: '1rem',
		s5: '1.25rem',
		s6: '1.5rem',
		s8: '2rem',
		s10: '2.5rem',
		s12: '3rem',
		s16: '4rem'
	},
	animation: {
		instant: '0ms',
		faster: '100ms',
		fast: '200ms',
		normal: '300ms',
		slow: '400ms',
		slower: '500ms'
	},
	breakpoints: {
		xs: {
			min: '0px',
			max: '320px'
		},
		sm: {
			min: '321px',
			max: '480px'
		},
		md: {
			min: '481px',
			max: '600px'
		},
		lg: {
			min: '601px',
			max: '801px'
		},
		xl: {
			min: '802px',
			max: '1025px'
		},
		xxl: {
			min: '1026px',
			max: '1400px'
		},
		xxxl: {
			min: '1401px',
			max: '1700px'
		},
		full: {
			min: '1701px'
		}
	}
}
