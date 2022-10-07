import { Http } from '../config'
import { HttpResponse, UserMock, UserMockModel, UserUseCases } from '@/domain'

class UsersAPI implements UserUseCases {
	async add(user: UserMock): Promise<HttpResponse<UserMockModel>> {
		const url = '/user-add'
		return Http.post(url, user)
	}
	async delete(id: number): Promise<HttpResponse<string>> {
		const url = `/user-delete/${id}`
		return Http.delete(url)
	}
	async update(user: UserMockModel): Promise<HttpResponse<UserMockModel>> {
		const url = '/user-update'
		return Http.patch(url, user)
	}
}

export default new UsersAPI()
