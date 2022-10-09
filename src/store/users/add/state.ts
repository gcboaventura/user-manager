import { HttpResponse, UserMockModel } from '@/domain'

export interface AddUserState {
	data: HttpResponse<UserMockModel>
	isLoading: boolean
	error?: Error
}
