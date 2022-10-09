import { all, takeLatest } from 'redux-saga/effects'
import { LoginActionKeys, LoginMockActionKeys } from './auth'
import { fetchLoginMock } from './auth/login-mock/sagas'
import { fetchLogin } from './auth/login/sagas'
import { MockUsersActionKeys } from './mock-users/action'
import { fetchMockUsers } from './mock-users/sagas'
import { AddUserActionKeys } from './users/add/action'
import { fetchAddUser } from './users/add/sagas'
import { DeleteUserActionKeys } from './users/delete/action'
import { fetchDeleteUser } from './users/delete/sagas'
import { UpdateUserActionKeys } from './users/update/action'
import { fetchUpdateUser } from './users/update/sagas'

export function* rootSaga() {
	yield all([
		takeLatest(LoginActionKeys.FETCH_LOGIN_START, fetchLogin),
		takeLatest(LoginMockActionKeys.FETCH_LOGIN_MOCK_START, fetchLoginMock),
		takeLatest(AddUserActionKeys.FETCH_ADD_USER_START, fetchAddUser),
		takeLatest(DeleteUserActionKeys.FETCH_DELETE_USER_START, fetchDeleteUser),
		takeLatest(UpdateUserActionKeys.FETCH_UPDATE_USER_START, fetchUpdateUser),
		takeLatest(MockUsersActionKeys.FETCH_MOCK_USERS_START, fetchMockUsers)
	])
}
