import { put } from 'redux-saga/effects'
import { fetchMockUsersAction, MockUsersActions } from './action'

export function* fetchMockUsers(action: fetchMockUsersAction) {
	yield put(MockUsersActions.fetchMockUsersSuccess([...action.payload]))
}
