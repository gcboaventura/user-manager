import { LoginState } from './state'
import { LoginActionUnion, LoginActionKeys } from './action'

const initialState: LoginState = {
	data: {
		body: {
			token: ''
		}
	},
	isLoading: false
}

const LoginReducer = (state = initialState, action: LoginActionUnion): LoginState => {
	switch (action.type) {
		case LoginActionKeys.FETCH_LOGIN_START:
			return {
				...state,
				isLoading: true
			}
		case LoginActionKeys.FETCH_LOGIN_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case LoginActionKeys.FETCH_LOGIN_FALIED:
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
