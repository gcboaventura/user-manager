import { AlertState } from './state'
import { AlertActionUnion, AlertActionKeys } from './action'

const initialState: AlertState = {
	data: {
		duration: 0,
		message: '',
		severity: 'info',
		open: false
	}
}

const AlertReducer = (state = initialState, action: AlertActionUnion): AlertState => {
	switch (action.type) {
		case AlertActionKeys.FETCH_ALERT_SHOW:
			return {
				...state,
				data: action.payload
			}
		default:
			return state
	}
}

export default AlertReducer
