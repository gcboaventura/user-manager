import { Mock } from '@/domain'
import { LocalStorageModel } from './types'

export class LocalStorageHelper implements LocalStorageModel {
	verifyMock(key: string): boolean {
		if (localStorage.getItem(key)) {
			return true
		}
		return false
	}

	returnMock(key: string): any {
		if (this.verifyMock(key)) {
			const mock = localStorage.getItem(key)
			console.log(mock)
		}
	}

	setMock(key: string, value: any): void {
		localStorage.setItem(key, JSON.stringify(value))
	}
}
