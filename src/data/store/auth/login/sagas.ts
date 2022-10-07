import { AuthAPI } from '@/data'
import { call, put } from 'redux-saga/effects'
import { fetchLoginAction, LoginActions } from './action'

export function* fetchLogin(action: fetchLoginAction) {
	const AuthApi = new AuthAPI()
	try {
		const { data } = yield call(AuthApi.login, action.payload)
		yield put(LoginActions.fetchLoginSuccess(data))
	} catch (error: unknown) {
		yield put(LoginActions.fetchLoginFalied(error as Error))
	}
}
