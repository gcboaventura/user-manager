import { Box, Snackbar } from '@mui/material'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Alert } from '../alert'
import { Props } from './types'

export const Snack: FC<Props> = ({ duration, message, severity, open, ...props }): JSX.Element => {
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
