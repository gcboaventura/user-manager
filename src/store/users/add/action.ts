import { HttpResponse, UserMock, UserMockModel } from '../../../domain'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum AddUserActionKeys {
	FETCH_ADD_USER_START = '[LOGIN] FETCH_ADD_USER_START',
	FETCH_ADD_USER_SUCCESS = '[LOGIN] FETCH_ADD_USER_SUCCESS',
	FETCH_ADD_USER_FALIED = '[LOGIN] FETCH_ADD_USER_FALIED'
}

export const AddUserActions = {
	fetchAddUser: (data: UserMock): fetchAddUserAction =>
		createAction(AddUserActionKeys.FETCH_ADD_USER_START, data),
	fetchAddUserSuccess: (Login: HttpResponse<UserMockModel>): fetchAddUserSuccessAction =>
		createAction(AddUserActionKeys.FETCH_ADD_USER_SUCCESS, Login),
	fetchAddUserFalied: (error: Error): fetchAddUserFaliedAction =>
		createAction(AddUserActionKeys.FETCH_ADD_USER_FALIED, error)
}

export type AddUserActionUnion = ActionsUnion<typeof AddUserActions>

export type fetchAddUserAction = Action<AddUserActionKeys.FETCH_ADD_USER_START, UserMock>

export type fetchAddUserSuccessAction = Action<
	AddUserActionKeys.FETCH_ADD_USER_SUCCESS,
	HttpResponse<UserMockModel>
>

export type fetchAddUserFaliedAction = Action<AddUserActionKeys.FETCH_ADD_USER_FALIED, Error>
