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

export interface InsertUser {
	add(user: UserMock): UserMockModel
}

export interface DeleteUser {
	add(user: UserMock): string
}

export interface PatchUser {
	add(user: UserMock): UserMockModel
}
