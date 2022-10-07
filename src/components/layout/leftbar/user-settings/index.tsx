import { Avatar, Box, Grid } from '@mui/material'
import { FC } from 'react'
import { Props } from './types'
import * as Styled from './styled'

export const UserSettings: FC<Props> = ({ onClose }): JSX.Element => {
	return (
		<Styled.BoxWrapper padding={2}>
			<Styled.Header>
				<Styled.Involucro>123 Projetei</Styled.Involucro>
			</Styled.Header>
			<Grid container direction="row" justifyContent="center" alignItems="center">
				<Avatar
					alt="user_photo"
					sx={{ width: '100px', height: '100px' }}
					src="https://i0.wp.com/www.fecaf.com.br/wp-content/uploads/2022/04/quanto-e-o-salario-de-um-administrador.jpg?fit=1360%2C907&ssl=1"
				/>
			</Grid>
			<Box mt={1}>
				<Grid container direction="row" justifyContent="space-between">
					<Grid item xs={10}>
						<Styled.Username>João da Silva</Styled.Username>
						<Styled.Office>Gerente de projetos</Styled.Office>
						<Styled.Email>joao@123projetei.com.br</Styled.Email>
					</Grid>
					<Grid item xs={2}>
						<Grid container spacing={1} direction="row" justifyContent="flex-end">
							<Grid item>
								<Styled.IconConfig onClick={onClose} />
							</Grid>
							<Grid item>
								<Styled.Logout
									onClick={() => {
										localStorage.removeItem('token')
										window.location.href = '/'
									}}
								>
									Logout
								</Styled.Logout>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</Styled.BoxWrapper>
	)
}
