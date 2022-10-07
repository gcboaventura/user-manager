import { HttpResponse } from './http'

export interface UserMock {
	name: string
	email: string
	office: string
	business: string
	permissions: number[]
}

export interface UserMockModel extends UserMock {
	id: number
}

export interface UserUseCases {
	add(user: UserMock): Promise<HttpResponse<UserMockModel>>
	delete(id: number): Promise<HttpResponse<string>>
	update(user: UserMockModel): Promise<HttpResponse<UserMockModel>>
}
