import { UserMockModel } from '../../domain'
import { createAction, ActionsUnion, Action } from '../action-helpers'

export enum MockUsersActionKeys {
	FETCH_MOCK_USERS_START = '[LOGIN] FETCH_MOCK_USERS_START',
	FETCH_MOCK_USERS_SUCCESS = '[LOGIN] FETCH_MOCK_USERS_SUCCESS',
	FETCH_MOCK_USERS_FALIED = '[LOGIN] FETCH_MOCK_USERS_FALIED'
}

export const MockUsersActions = {
	fetchMockUsers: (data: UserMockModel[]): fetchMockUsersAction =>
		createAction(MockUsersActionKeys.FETCH_MOCK_USERS_START, data),
	fetchMockUsersSuccess: (data: UserMockModel[]): fetchMockUsersSuccessAction =>
		createAction(MockUsersActionKeys.FETCH_MOCK_USERS_SUCCESS, data),
	fetchMockUsersFalied: (error: Error): fetchMockUsersFaliedAction =>
		createAction(MockUsersActionKeys.FETCH_MOCK_USERS_FALIED, error)
}

export type MockUsersActionUnion = ActionsUnion<typeof MockUsersActions>

export type fetchMockUsersAction = Action<
	MockUsersActionKeys.FETCH_MOCK_USERS_START,
	UserMockModel[]
>

export type fetchMockUsersSuccessAction = Action<
	MockUsersActionKeys.FETCH_MOCK_USERS_SUCCESS,
	UserMockModel[]
>

export type fetchMockUsersFaliedAction = Action<MockUsersActionKeys.FETCH_MOCK_USERS_FALIED, Error>
