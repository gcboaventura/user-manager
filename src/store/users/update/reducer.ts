import { UpdateUserState } from './state'
import { UpdateUserActionUnion, UpdateUserActionKeys } from './action'

const initialState: UpdateUserState = {
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

const UpdateUserReducer = (
	state = initialState,
	action: UpdateUserActionUnion
): UpdateUserState => {
	switch (action.type) {
		case UpdateUserActionKeys.FETCH_UPDATE_USER_START:
			return {
				...state,
				isLoading: true
			}
		case UpdateUserActionKeys.FETCH_UPDATE_USER_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case UpdateUserActionKeys.FETCH_UPDATE_USER_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default UpdateUserReducer
