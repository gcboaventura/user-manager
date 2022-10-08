import { FC } from 'react'
import { Alert as AlertMui } from '@mui/material'
import { Props } from './types'

export const Alert: FC<Props> = ({ severity, children, ...props }): JSX.Element => {
	return (
		<AlertMui severity={severity} {...props}>
			{children}
		</AlertMui>
	)
}
