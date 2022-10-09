import { DeleteUserState } from './state'
import { DeleteUserActionUnion, DeleteUserActionKeys } from './action'

const initialState: DeleteUserState = {
	data: {
		body: ''
	},
	isLoading: false
}

const DeleteUserReducer = (
	state = initialState,
	action: DeleteUserActionUnion
): DeleteUserState => {
	switch (action.type) {
		case DeleteUserActionKeys.FETCH_DELETE_USER_START:
			return {
				...state,
				isLoading: true
			}
		case DeleteUserActionKeys.FETCH_DELETE_USER_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case DeleteUserActionKeys.FETCH_DELETE_USER_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default DeleteUserReducer
