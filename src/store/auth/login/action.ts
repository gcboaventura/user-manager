import { HttpResponse, LoginRequest, LoginResponse } from '../../../domain'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum LoginActionKeys {
	FETCH_LOGIN_START = '[LOGIN] FETCH_LOGIN_START',
	FETCH_LOGIN_SUCCESS = '[LOGIN] FETCH_LOGIN_SUCCESS',
	FETCH_LOGIN_FALIED = '[LOGIN] FETCH_LOGIN_FALIED'
}

export const LoginActions = {
	fetchLogin: (data: LoginRequest): fetchLoginAction =>
		createAction(LoginActionKeys.FETCH_LOGIN_START, data),
	fetchLoginSuccess: (Login: HttpResponse<LoginResponse>): fetchLoginSuccessAction =>
		createAction(LoginActionKeys.FETCH_LOGIN_SUCCESS, Login),
	fetchLoginFalied: (error: Error): fetchLoginFaliedAction =>
		createAction(LoginActionKeys.FETCH_LOGIN_FALIED, error)
}

export type LoginActionUnion = ActionsUnion<typeof LoginActions>

export type fetchLoginAction = Action<LoginActionKeys.FETCH_LOGIN_START, LoginRequest>

export type fetchLoginSuccessAction = Action<
	LoginActionKeys.FETCH_LOGIN_SUCCESS,
	HttpResponse<LoginResponse>
>

export type fetchLoginFaliedAction = Action<LoginActionKeys.FETCH_LOGIN_FALIED, Error>
