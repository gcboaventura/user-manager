import { FC } from 'react'
import { Grid } from '@mui/material'
import { Button, Form, Search, TextInput } from '@/components'
import { Values } from './helpers/types'
import { useNavigate } from 'react-router-dom'

export const Users: FC = (): JSX.Element => {
	const navigate = useNavigate()

	return (
		<Grid container direction="row" justifyContent="space-between" alignItems="center">
			<Grid item xs={4}>
				<Form<Values>
					onSubmit={(values: Values) => {}}
					initialValues={{
						search: ''
					}}
					children={
						<>
							<TextInput name="search" placeholder="Pesquisa" icon={<Search />} />
						</>
					}
				/>
			</Grid>
			<Grid item>
				<Button
					variant="contained"
					children="Novo usuário"
					onClick={() => navigate('/users/form')}
				/>
			</Grid>
		</Grid>
	)
}
