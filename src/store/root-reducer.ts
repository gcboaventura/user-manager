import { combineReducers } from 'redux'
import AuthReucer from './auth'

export const rootReducer = combineReducers({
	auth: AuthReucer
})
