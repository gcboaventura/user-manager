import { HttpResponse, UserMockModel } from '../../../domain'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum UpdateUserActionKeys {
	FETCH_UPDATE_USER_START = '[LOGIN] FETCH_UPDATE_USER_START',
	FETCH_UPDATE_USER_SUCCESS = '[LOGIN] FETCH_UPDATE_USER_SUCCESS',
	FETCH_UPDATE_USER_FALIED = '[LOGIN] FETCH_UPDATE_USER_FALIED'
}

export const UpdateUserActions = {
	fetchUpdateUser: (data: UserMockModel): fetchUpdateUserAction =>
		createAction(UpdateUserActionKeys.FETCH_UPDATE_USER_START, data),
	fetchUpdateUserSuccess: (Login: HttpResponse<UserMockModel>): fetchUpdateUserSuccessAction =>
		createAction(UpdateUserActionKeys.FETCH_UPDATE_USER_SUCCESS, Login),
	fetchUpdateUserFalied: (error: Error): fetchUpdateUserFaliedAction =>
		createAction(UpdateUserActionKeys.FETCH_UPDATE_USER_FALIED, error)
}

export type UpdateUserActionUnion = ActionsUnion<typeof UpdateUserActions>

export type fetchUpdateUserAction = Action<
	UpdateUserActionKeys.FETCH_UPDATE_USER_START,
	UserMockModel
>

export type fetchUpdateUserSuccessAction = Action<
	UpdateUserActionKeys.FETCH_UPDATE_USER_SUCCESS,
	HttpResponse<UserMockModel>
>

export type fetchUpdateUserFaliedAction = Action<
	UpdateUserActionKeys.FETCH_UPDATE_USER_FALIED,
	Error
>
