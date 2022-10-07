import { LoginMockState } from './state'
import { LoginMockActionUnion, LoginMockActionKeys } from './action'

const initialState: LoginMockState = {
	data: {
		body: {
			token: ''
		}
	},
	isLoading: false
}

const LoginReducer = (state = initialState, action: LoginMockActionUnion): LoginMockState => {
	switch (action.type) {
		case LoginMockActionKeys.FETCH_LOGIN_MOCK_START:
			return {
				...state,
				isLoading: true
			}
		case LoginMockActionKeys.FETCH_LOGIN_MOCK_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case LoginMockActionKeys.FETCH_LOGIN_MOCK_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default LoginReducer
