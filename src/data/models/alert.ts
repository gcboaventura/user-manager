import { AlertColor } from '@mui/material'

export interface AlertProps {
	message: string
	severity: AlertColor
	duration: number
	open: boolean
}
