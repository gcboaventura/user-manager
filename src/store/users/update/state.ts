import { HttpResponse, UserMockModel } from '@/domain'

export interface UpdateUserState {
	data: HttpResponse<UserMockModel>
	isLoading: boolean
	error?: Error
}
