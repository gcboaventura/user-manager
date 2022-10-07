import { LocalStorageHelper } from '../local-storage'
import { AuthHelperModels } from './types'

export class AuthHelper implements AuthHelperModels {
	isAuthenticated(): boolean {
		const localHelper = new LocalStorageHelper()

		const token = localHelper.returnMock('token')

		if (token) {
			return true
		}

		return false
	}
}
