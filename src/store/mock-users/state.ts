import { UserMockModel } from '@/domain'

export interface MockUsersState {
	data: UserMockModel[]
	isLoading: boolean
	error?: Error
}
