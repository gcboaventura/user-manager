import { FC, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from '@/routes'
import { light, ResetCSS } from '@/styles'
import { LocalStorageHelper } from '@/helpers'
import { Snack } from '@/components'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/config-store'
import { AuthMock } from '@/domain'

export const App: FC = (): JSX.Element => {
	const localHelper = new LocalStorageHelper()

	const {
		alert: { duration, message, open, severity },
		users
	} = useSelector((state: RootState) => ({
		alert: state.alert.data,
		users: state.mockUsers.data
	}))

	useEffect(() => {
		localHelper.setMock('mock-auth', AuthMock)
	}, [])

	useEffect(() => {
		localStorage.removeItem('mock-users')
		localHelper.setMock('mock-users', users)
	}, [users])

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
