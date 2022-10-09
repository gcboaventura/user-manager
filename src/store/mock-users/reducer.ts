import { MockUsersState } from './state'
import { MockUsersActionUnion, MockUsersActionKeys } from './action'
import { LocalStorageHelper } from '@/helpers'
import { UserMockArray } from '@/domain'

const localHelper = new LocalStorageHelper()

const localData = localHelper.returnMock('mock-users')

const initialState: MockUsersState = {
	data: localData ? localData : UserMockArray,
	isLoading: false
}

const MockUsersReducer = (state = initialState, action: MockUsersActionUnion): MockUsersState => {
	switch (action.type) {
		case MockUsersActionKeys.FETCH_MOCK_USERS_START:
			return {
				...state,
				isLoading: true
			}
		case MockUsersActionKeys.FETCH_MOCK_USERS_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case MockUsersActionKeys.FETCH_MOCK_USERS_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default MockUsersReducer
