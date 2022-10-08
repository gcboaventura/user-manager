import { createAction, ActionsUnion, Action, AlertProps } from '@/data'

export enum AlertActionKeys {
	FETCH_ALERT_SHOW = '[LOGIN] FETCH_ALERT_SHOW'
}

export const AlertActions = {
	fetchAlertShow: (data: AlertProps): fetchAlertAction =>
		createAction(AlertActionKeys.FETCH_ALERT_SHOW, data)
}

export type AlertActionUnion = ActionsUnion<typeof AlertActions>

export type fetchAlertAction = Action<AlertActionKeys.FETCH_ALERT_SHOW, AlertProps>
