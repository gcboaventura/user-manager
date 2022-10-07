import { Avatar, Box, Grid } from '@mui/material'
import { FC } from 'react'
import { Props } from './types'
import * as Styled from './styled'

export const UserSettings: FC<Props> = ({ onClose }): JSX.Element => {
	return (
		<Styled.BoxWrapper padding={2}>
			<Styled.Header>
				<Styled.Involucro>Invólucro sistemas</Styled.Involucro>
			</Styled.Header>
			<Grid container direction="row" justifyContent="center" alignItems="center">
				<Avatar
					alt="user_photo"
					sx={{ width: '100px', height: '100px' }}
					src="https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg"
				/>
			</Grid>
			<Box mt={1}>
				<Grid container direction="row" justifyContent="space-between">
					<Grid item xs={10}>
						<Styled.Username>Guilherme Boaventura</Styled.Username>
						<Styled.Office>Gerente de projetos</Styled.Office>
						<Styled.Business>Invólucro sistemas</Styled.Business>
					</Grid>
					<Grid item xs={2}>
						<Grid container spacing={1} direction="row" justifyContent="flex-end">
							<Grid item>
								<Styled.IconConfig onClick={onClose} />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</Styled.BoxWrapper>
	)
}
