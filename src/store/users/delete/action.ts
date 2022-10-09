import { HttpResponse } from '../../../domain'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum DeleteUserActionKeys {
	FETCH_DELETE_USER_START = '[LOGIN] FETCH_DELETE_USER_START',
	FETCH_DELETE_USER_SUCCESS = '[LOGIN] FETCH_DELETE_USER_SUCCESS',
	FETCH_DELETE_USER_FALIED = '[LOGIN] FETCH_DELETE_USER_FALIED'
}
export interface PropsDeteleUser {
	id: string
	onSuccess?: () => void
}

export const DeleteUserActions = {
	fetchDeleteUser: (data: PropsDeteleUser): fetchDeleteUserAction =>
		createAction(DeleteUserActionKeys.FETCH_DELETE_USER_START, data),
	fetchDeleteUserSuccess: (Login: HttpResponse<string>): fetchDeleteUserSuccessAction =>
		createAction(DeleteUserActionKeys.FETCH_DELETE_USER_SUCCESS, Login),
	fetchDeleteUserFalied: (error: Error): fetchDeleteUserFaliedAction =>
		createAction(DeleteUserActionKeys.FETCH_DELETE_USER_FALIED, error)
}

export type DeleteUserActionUnion = ActionsUnion<typeof DeleteUserActions>

export type fetchDeleteUserAction = Action<
	DeleteUserActionKeys.FETCH_DELETE_USER_START,
	PropsDeteleUser
>

export type fetchDeleteUserSuccessAction = Action<
	DeleteUserActionKeys.FETCH_DELETE_USER_SUCCESS,
	HttpResponse<string>
>

export type fetchDeleteUserFaliedAction = Action<
	DeleteUserActionKeys.FETCH_DELETE_USER_FALIED,
	Error
>
