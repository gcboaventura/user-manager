import { defaultTheme } from './default-theme'
import { ThemeModel } from './types'

export const light: ThemeModel = {
	colors: {
		brandColors: {
			primary: '#F75F1E',
			secondary: '#1D1D1E',
			terciary: '#FAFBFC',
			quarternary: '#5D5D5D'
		},
		textColors: {
			primary: '#1D1D1E',
			secondary: '#495057',
			terciary: '#adb5bd',
			quarternary: '#f8f9fa'
		},
		neutralColors: {
			black: '#231F20',
			white: '#FFFFFF',
			background: '#f8f9fa',
			grey: {
				g1: '#F2F2F2',
				g2: '#CCCCCC',
				g3: '#A5A5A5',
				g4: '#7F7F7F',
				g5: '#595959'
			}
		},
		semanticColors: {
			danger: '#FF686B',
			new: '#669BBC',
			success: '#ACD8AA',
			warning: '#FFF275'
		}
	},
	...defaultTheme
}
