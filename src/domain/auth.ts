import { HttpResponse } from './http'

export interface LoginRequest {
	email: string
	password: string
}

export interface LoginResponse {
	token: string
}

export interface AuthUseCase {
	login(data: LoginRequest): Promise<HttpResponse<LoginResponse>>
}
