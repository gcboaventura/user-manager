import { combineReducers } from 'redux'
import AlertReducer from './alert/reducer'
import AuthReucer from './auth'
import MockUsersReducer from './mock-users/reducer'
import UsersReducer from './users'

export const rootReducer = combineReducers({
	auth: AuthReucer,
	alert: AlertReducer,
	users: UsersReducer,
	mockUsers: MockUsersReducer
})
