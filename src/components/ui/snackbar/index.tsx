import { AlertActions } from '@/store/alert/action'
import { Box, Snackbar } from '@mui/material'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Alert } from '../alert'
import { Props } from './types'

export const Snack: FC<Props> = ({ duration, message, severity, open, ...props }): JSX.Element => {
	const dispatch = useDispatch()

	useEffect(() => {
		setTimeout(() => {
			dispatch(
				AlertActions.HidenAlert({ severity: severity, duration: 0, open: false, message: message })
			)
		}, duration)
	}, [duration])

	return (
		<Snackbar
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={open}
			autoHideDuration={duration}
			{...props}
		>
			<Box minHeight="100vh" width={'20vw'} mr={4}>
				<Alert children={message} severity={severity} sx={{ width: '100%' }} />
			</Box>
		</Snackbar>
	)
}
