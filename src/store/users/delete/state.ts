import { HttpResponse } from '@/domain'

export interface DeleteUserState {
	data: HttpResponse<string>
	isLoading: boolean
	error?: Error
}
