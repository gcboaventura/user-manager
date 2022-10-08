import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from '@/routes'
import { light, ResetCSS } from '@/styles'
import { LocalStorageHelper } from '@/helpers'
import { MockLocal } from '@/domain'
import { Provider } from 'react-redux'
import { store } from '../store/config-store'

export const App: FC = (): JSX.Element => {
	const localHelper = new LocalStorageHelper()

	if (!localHelper.returnMock('mock')) {
		localHelper.setMock('mock', MockLocal)
	}

	return (
		<Provider store={store}>
			<BrowserRouter>
				<ResetCSS />
				<ThemeProvider theme={light}>
					<Router />
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	)
}
