import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from '@/routes'
import { light, ResetCSS } from '@/styles'
import { RootState } from '@/data/store'
import { LocalStorageHelper } from '@/helpers'
import { MockLocal } from '@/domain'
import { Snack } from '@/components'
import { useSelector } from 'react-redux'

export const App: FC = (): JSX.Element => {
	const localHelper = new LocalStorageHelper()

	if (!localHelper.returnMock('mock')) {
		localHelper.setMock('mock', MockLocal)
	}

	const { show } = useSelector((state: RootState) => ({
		show: state.alert.data
	}))

	return (
		<BrowserRouter>
			<ResetCSS />
			<ThemeProvider theme={light}>
				<Router />
				<Snack
					open={show.open}
					duration={show.duration}
					message={show.message}
					severity={show.severity}
				/>
			</ThemeProvider>
		</BrowserRouter>
	)
}
