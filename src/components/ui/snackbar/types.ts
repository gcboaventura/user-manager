import { AlertColor, SnackbarProps } from '@mui/material'

export interface Props extends SnackbarProps {
	message: string
	severity: AlertColor
	duration: number
}
