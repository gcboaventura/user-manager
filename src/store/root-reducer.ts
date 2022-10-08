import { combineReducers } from 'redux'
import AlertReducer from './alert/reducer'
import AuthReucer from './auth'

export const rootReducer = combineReducers({
	auth: AuthReucer,
	alert: AlertReducer
})
