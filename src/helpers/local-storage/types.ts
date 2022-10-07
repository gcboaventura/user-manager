import { Mock } from '@/domain'

export interface LocalStorageModel {
	verifyMock(key: string): boolean
	returnMock(key: string): any
	setMock(key: string, value: any): void
}
