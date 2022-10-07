import 'styled-components'
import { ThemeModel } from '../theme/types'

export interface Theme extends ThemeModel {}

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
