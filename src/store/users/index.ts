import { combineReducers } from 'redux'
import AddUserReducer from './add/reducer'
import DeleteUserReducer from './delete/reducer'
import UpdateUserReducer from './update/reducer'

export default combineReducers({
	add: AddUserReducer,
	delete: DeleteUserReducer,
	update: UpdateUserReducer
})
