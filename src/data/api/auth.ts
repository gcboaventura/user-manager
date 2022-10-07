import { Http } from '../config'
import { AuthUseCase, HttpResponse, LoginRequest, LoginResponse } from '@/domain'

export class AuthAPI implements AuthUseCase {
	async login(data: LoginRequest): Promise<HttpResponse<LoginResponse>> {
		const url = '/login'
		return Http.post(url, data)
	}
}
