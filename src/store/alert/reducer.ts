import { AlertActionKeys, AlertActionUnion } from './action'
import { AlertState } from './state'

const initalState: AlertState = {
	data: {
		duration: 0,
		message: '',
		open: false,
		severity: 'error'
	}
}

const AlertReducer = (state = initalState, action: AlertActionUnion): AlertState => {
	switch (action.type) {
		case AlertActionKeys.ALERT_SHOW:
			return {
				...state,
				data: action.payload
			}
		case AlertActionKeys.ALERT_HIDEN:
			return {
				...state,
				data: action.payload
			}
		default:
			return state
	}
}

export default AlertReducer
