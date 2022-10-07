import { HttpResponse, LoginResponse } from '@/domain'

export interface LoginMockState {
	data: HttpResponse<LoginResponse>
	isLoading: boolean
	error?: Error
}
