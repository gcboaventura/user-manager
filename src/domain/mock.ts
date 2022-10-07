import { LoginRequest } from './auth'
import { UserMockModel } from './users-mock'

export interface Mock {
	users: UserMockModel[]
	auth: LoginRequest
}

export const UserMockArray: UserMockModel[] = [
	{
		id: 0,
		name: 'João Antonio',
		business: '123Projetei',
		email: 'joao@123projetei.com.br',
		office: 'Auxiliar de engenharia',
		permissions: [1, 2, 3, 4, 5]
	},
	{
		id: 1,
		name: 'Maria Laura',
		business: '123Projetei',
		email: 'maria@123projetei.com.br',
		office: 'Analista de RH',
		permissions: [6, 8, 11, 15, 19]
	},
	{
		id: 2,
		name: 'Pedro Henrique',
		business: '123Projetei',
		email: 'pedro@123projetei.com.br',
		office: 'Gerente de projeto',
		permissions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
	},
	{
		id: 3,
		name: 'Carolina Vieira',
		business: '123Projetei',
		email: 'carolina@123projetei.com.br',
		office: 'Superintendente',
		permissions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	},
	{
		id: 4,
		name: 'Dafny Marques',
		business: '123Projetei',
		email: 'dafny@123projetei.com.br',
		office: 'Analista de marketing',
		permissions: [6, 7, 8, 9, 10, 11, 12, 13]
	},
	{
		id: 5,
		name: 'Guilherme Boaventura',
		business: '123Projetei',
		email: 'guilherme@123projetei.com.br',
		office: 'Desenvolvedor',
		permissions: [13, 14, 15, 16]
	},
	{
		id: 6,
		name: 'Marcos Costa',
		business: '123Projetei',
		email: 'marcos@123projetei.com.br',
		office: 'CEO',
		permissions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	},
	{
		id: 7,
		name: 'Bruno Ribas',
		business: '123Projetei',
		email: 'bruno@123projetei.com.br',
		office: 'CTO',
		permissions: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
	},
	{
		id: 8,
		name: 'Amanda Castro',
		business: '123Projetei',
		email: 'amanda@123projetei.com.br',
		office: 'Auxiliar financeiro',
		permissions: [10, 11, 12, 13]
	},
	{
		id: 9,
		name: 'Maria Luiza',
		business: '123Projetei',
		email: 'maria@123projetei.com.br',
		office: 'Social media',
		permissions: [6, 7, 8]
	}
]

export const AuthMock: LoginRequest = {
	email: 'admin@123projetei.com.br',
	password: 'admin123projetei'
}

export const MockLocal: Mock = {
	users: UserMockArray,
	auth: AuthMock
}
