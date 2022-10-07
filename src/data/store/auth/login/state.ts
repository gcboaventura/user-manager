import { HttpResponse, LoginResponse } from '@/domain'

export interface LoginState {
	data: HttpResponse<LoginResponse>
	isLoading: boolean
	error?: Error
}
