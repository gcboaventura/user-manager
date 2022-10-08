import { AlertColor } from '@mui/material'

export interface PropsAlert {
	severity: AlertColor
	open: boolean
	message: string
	duration: number
}

export interface AlertState {
	data: PropsAlert
}
