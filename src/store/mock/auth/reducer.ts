import { MockState } from './state'
import { MockActionUnion, MockActionKeys } from './action'

const initialState: MockState = {
	data: {
		auth: {
			email: '',
			password: ''
		},
		users: []
	},
	isLoading: false
}

const MockReducer = (state = initialState, action: MockActionUnion): MockState => {
	switch (action.type) {
		case MockActionKeys.FETCH_MOCK_START:
			return {
				...state,
				isLoading: true
			}
		case MockActionKeys.FETCH_MOCK_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case MockActionKeys.FETCH_MOCK_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default MockReducer
