import { all, takeLatest } from 'redux-saga/effects'
import { LoginActionKeys, LoginMockActionKeys } from './auth'
import { fetchLoginMock } from './auth/login-mock/sagas'
import { fetchLogin } from './auth/login/sagas'

export function* rootSaga() {
	yield all([
		takeLatest(LoginActionKeys.FETCH_LOGIN_START, fetchLogin),
		takeLatest(LoginMockActionKeys.FETCH_LOGIN_MOCK_START, fetchLoginMock)
	])
}
