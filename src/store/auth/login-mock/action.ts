import { HttpResponse, LoginRequest, LoginResponse } from '../../../domain'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum LoginMockActionKeys {
	FETCH_LOGIN_MOCK_START = '[LOGIN] FETCH_LOGIN_MOCK_START',
	FETCH_LOGIN_MOCK_SUCCESS = '[LOGIN] FETCH_LOGIN_MOCK_SUCCESS',
	FETCH_LOGIN_MOCK_FALIED = '[LOGIN] FETCH_LOGIN_MOCK_FALIED'
}

export const LoginMockActions = {
	fetchLoginMock: (data: LoginRequest): fetchLoginMockAction =>
		createAction(LoginMockActionKeys.FETCH_LOGIN_MOCK_START, data),
	fetchLoginMockSuccess: (Login: HttpResponse<LoginResponse>): fetchLoginMockSuccessAction =>
		createAction(LoginMockActionKeys.FETCH_LOGIN_MOCK_SUCCESS, Login),
	fetchLoginMockFalied: (error: Error): fetchLoginMockFaliedAction =>
		createAction(LoginMockActionKeys.FETCH_LOGIN_MOCK_FALIED, error)
}

export type LoginMockActionUnion = ActionsUnion<typeof LoginMockActions>

export type fetchLoginMockAction = Action<LoginMockActionKeys.FETCH_LOGIN_MOCK_START, LoginRequest>

export type fetchLoginMockSuccessAction = Action<
	LoginMockActionKeys.FETCH_LOGIN_MOCK_SUCCESS,
	HttpResponse<LoginResponse>
>

export type fetchLoginMockFaliedAction = Action<LoginMockActionKeys.FETCH_LOGIN_MOCK_FALIED, Error>
