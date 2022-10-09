import { UserMockModel } from '@/domain'
import { AlertActions } from '@/store/alert/action'
import { RootState } from '@/store/config-store'
import { MockUsersActions } from '@/store/mock-users/action'
import { put, select } from 'redux-saga/effects'
import { fetchUpdateUserAction, UpdateUserActions } from './action'

export function* fetchUpdateUser(action: fetchUpdateUserAction) {
	const error: Error = { message: 'Erro ao atualizar usuário', name: 'ServerError' }

	const getStateUsers = (state: RootState) => state.mockUsers.data

	const users = (yield select(getStateUsers)) as UserMockModel[]

	const currentUsers = users

	const selected = currentUsers.find((x: UserMockModel) => x.id === action.payload.id)

	if (selected) {
		const update: UserMockModel = {
			...action.payload,
			id: selected.id
		}
		const idSelected = currentUsers.findIndex((x: UserMockModel) => x.id === action.payload.id)

		const newArrUsers = currentUsers

		newArrUsers.splice(idSelected, 1)

		newArrUsers.push(update)

		yield put(MockUsersActions.fetchMockUsers([...newArrUsers]))

		const updated = users.find((x: UserMockModel) => x.id === action.payload.id)

		if (updated) {
			yield put(UpdateUserActions.fetchUpdateUserSuccess({ body: { ...updated } }))

			yield put(
				AlertActions.ShowAlert({
					duration: 3000,
					message: 'Usuário atualizado com sucesso !',
					open: true,
					severity: 'success'
				})
			)
		}
	} else {
		yield put(UpdateUserActions.fetchUpdateUserFalied({ ...error }))

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
