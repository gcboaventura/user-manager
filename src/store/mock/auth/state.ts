import { Mock } from '@/domain'

export interface MockState {
	data: Mock
	isLoading: boolean
	error?: Error
}
