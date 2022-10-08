import { Mock } from '@/domain'
import { LocalStorageHelper } from '@/helpers'
import { put } from 'redux-saga/effects'
import { AlertActions } from '../../alert/action'
import { fetchLoginMockAction, LoginMockActions } from './action'

export function* fetchLoginMock(action: fetchLoginMockAction) {
	const localHelper = new LocalStorageHelper()

	const { email, password } = action.payload

	const { auth }: Mock = localHelper.returnMock('mock')

	const token: string = 'any_token'

	const error: Error = { message: 'Login inválido', name: 'ServerError' }

	if (auth.email === email && auth.password === password) {
		yield put(LoginMockActions.fetchLoginMockSuccess({ body: { token } }))
		localHelper.setMock('token', token)
		window.location.href = '/users'
	} else {
		yield put(LoginMockActions.fetchLoginMockFalied({ ...error }))
		yield put(
			AlertActions.fetchAlertShow({
				duration: 3000,
				message: error.message,
				open: true,
				severity: 'error'
			})
		)
	}
}
