import { AddUserState } from './state'
import { AddUserActionUnion, AddUserActionKeys } from './action'

const initialState: AddUserState = {
	data: {
		body: {
			business: '',
			email: '',
			id: 0,
			name: '',
			office: '',
			permissions: []
		}
	},
	isLoading: false
}

const AddUserReducer = (state = initialState, action: AddUserActionUnion): AddUserState => {
	switch (action.type) {
		case AddUserActionKeys.FETCH_ADD_USER_START:
			return {
				...state,
				isLoading: true
			}
		case AddUserActionKeys.FETCH_ADD_USER_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case AddUserActionKeys.FETCH_ADD_USER_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default AddUserReducer
