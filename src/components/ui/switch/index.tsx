import { FC } from 'react'
import { Props } from './types'
import { Grid } from '@mui/material'
import Switch from 'react-switch'
import * as Styled from './styled'

export const SwitchComponent: FC<Props> = ({ label, check, onChange }): JSX.Element => {
	return (
		<Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
			<Grid item>
				<Switch
					onColor="#1F8E32"
					handleDiameter={20}
					height={23}
					width={45}
					checked={check}
					onChange={onChange}
				/>
			</Grid>
			{label && (
				<Grid item>
					<Styled.Label>{label}</Styled.Label>
				</Grid>
			)}
		</Grid>
	)
}
