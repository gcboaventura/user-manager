import { combineReducers } from 'redux'
import LoginMockReducer from './login/reducer'
import LoginReducer from './login/reducer'

export default combineReducers({
	login: LoginReducer,
	loginMock: LoginMockReducer
})

export * from './login/action'
export * from './login/reducer'
export * from './login/state'

export * from './login-mock/action'
export * from './login-mock/reducer'
export * from './login-mock/state'
