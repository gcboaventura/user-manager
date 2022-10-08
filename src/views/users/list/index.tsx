import { ChangeEvent, FC, useState } from 'react'
import { Grid, Box } from '@mui/material'
import { Button, Form, Plus, Search, TableComponent, TextInput } from '@/components'
import { Values } from './helpers/types'
import { useNavigate } from 'react-router-dom'
import { Mock, UserMockModel } from '@/domain'
import { LocalStorageHelper } from '@/helpers'
import { Column } from '@/components/ui/table/types'

export const Users: FC = (): JSX.Element => {
	const [search, setSearch] = useState<string | undefined>()

	const [initial, setInitial] = useState<Values>({
		search: ''
	})

	const navigate = useNavigate()

	const localHelper = new LocalStorageHelper()

	const { users }: Mock = localHelper.returnMock('mock')

	const columns: Column[] = [
		{ key: 'name', title: 'Nome' },
		{ key: 'email', title: 'Email' },
		{ key: 'office', title: 'Cargo' },
		{ key: 'business', title: 'Empresa' }
	]

	const fileredUsers = search
		? users.filter(
				(user) =>
					user.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
					user.office.toLowerCase().includes(search.toLocaleLowerCase()) ||
					user.email.toLowerCase().includes(search.toLocaleLowerCase())
		  )
		: users

	return (
		<Grid container direction="row" justifyContent="space-between" alignItems="center">
			<Grid item xs={4}>
				<Form<Values>
					onSubmit={(values: Values) => {}}
					initialValues={initial}
					children={
						<TextInput
							name="search"
							placeholder="# nome, email, cargo"
							icon={<Search />}
							onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => setSearch(value)}
						/>
					}
				/>
			</Grid>
			<Grid item>
				<Button
					variant="contained"
					children="Novo usuário"
					icon={<Plus />}
					onClick={() => navigate('/users/form')}
				/>
			</Grid>

			<Grid item xs={12}>
				<Box mt={4}>
					<TableComponent
						items={fileredUsers}
						columns={columns}
						onClick={(row: UserMockModel) => navigate(`/users/detail/${row.id}`)}
					/>
				</Box>
			</Grid>
		</Grid>
	)
}
