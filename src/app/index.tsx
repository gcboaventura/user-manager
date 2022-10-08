import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from '@/routes'
import { light, ResetCSS } from '@/styles'
import { LocalStorageHelper } from '@/helpers'
import { MockLocal } from '@/domain'
import { Snack } from '@/components'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/config-store'

export const App: FC = (): JSX.Element => {
	const localHelper = new LocalStorageHelper()

	if (!localHelper.returnMock('mock')) {
		localHelper.setMock('mock', MockLocal)
	}

	const {
		alert: { duration, message, open, severity }
	} = useSelector((state: RootState) => ({
		alert: state.alert.data
	}))

	return (
		<BrowserRouter>
			<ResetCSS />
			<ThemeProvider theme={light}>
				<Router />
				<Snack open={open} severity={severity} duration={duration} message={message} />
			</ThemeProvider>
		</BrowserRouter>
	)
}
