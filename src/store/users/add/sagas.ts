import { UserMockModel } from '@/domain'
import { AlertActions } from '@/store/alert/action'
import { RootState } from '@/store/config-store'
import { MockUsersActions } from '@/store/mock-users/action'
import { put, select } from 'redux-saga/effects'
import { fetchAddUserAction, AddUserActions } from './action'

export function* fetchAddUser(action: fetchAddUserAction) {
	const error: Error = { message: 'Erro ao cadastrar usuário.', name: 'ServerError' }

	const getStateUsers = (state: RootState) => state.mockUsers.data

	const users = (yield select(getStateUsers)) as UserMockModel[]

	const currentUsers = users

	let newId = 0

	const generateId = (): number => {
		let maior: number = 0
		currentUsers.forEach((x: UserMockModel) => {
			if (x.id > maior) {
				maior = x.id
			}
		})
		newId = maior + 1
		return newId
	}

	currentUsers.push({
		...action.payload,
		id: generateId()
	})

	yield put(MockUsersActions.fetchMockUsers([...currentUsers]))

	const register = users.find((x: UserMockModel) => x.id === newId)

	if (register) {
		yield put(AddUserActions.fetchAddUserSuccess({ body: { ...register } }))
		yield put(
			AlertActions.ShowAlert({
				duration: 3000,
				message: 'Usuário cadastrado com sucesso !',
				open: true,
				severity: 'success'
			})
		)
	} else {
		yield put(AddUserActions.fetchAddUserFalied({ ...error }))

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
