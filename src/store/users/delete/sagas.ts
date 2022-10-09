import { UserMockModel } from '@/domain'
import { AlertActions } from '@/store/alert/action'
import { RootState } from '@/store/config-store'
import { MockUsersActions } from '@/store/mock-users/action'
import { put, select } from 'redux-saga/effects'
import { fetchDeleteUserAction, DeleteUserActions } from './action'

export function* fetchDeleteUser(action: fetchDeleteUserAction) {
	const { id, onSuccess } = action.payload

	const error: Error = { message: 'Erro ao excluir usuário', name: 'ServerError' }

	const getStateUsers = (state: RootState) => state.mockUsers.data

	const users = (yield select(getStateUsers)) as UserMockModel[]

	const currentUsers = users

	const idDelete = currentUsers.findIndex((x: UserMockModel) => x.id === parseInt(id))

	const newArrUsers = currentUsers

	newArrUsers.splice(idDelete, 1)

	yield put(MockUsersActions.fetchMockUsers([...newArrUsers]))

	const deleted = users.find((x: UserMockModel) => x.id === parseInt(id))

	if (!deleted) {
		yield put(DeleteUserActions.fetchDeleteUserSuccess({ body: 'Excluído com sucesso !' }))

		yield put(
			AlertActions.ShowAlert({
				duration: 3000,
				message: 'Excluído com sucesso !',
				open: true,
				severity: 'success'
			})
		)

		if (onSuccess) {
			onSuccess()
		}
	} else {
		yield put(DeleteUserActions.fetchDeleteUserFalied({ ...error }))

		yield put(
			AlertActions.ShowAlert({
				duration: 3000,
				message: error.message,
				open: true,
				severity: 'error'
			})
		)
	}
}
