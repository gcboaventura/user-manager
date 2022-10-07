import { combineReducers } from 'redux'
import LoginReducer from './login/reducer'

export default combineReducers({
	login: LoginReducer
})

export * from './login/action'
export * from './login/reducer'
export * from './login/state'
