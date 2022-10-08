import { FC, useEffect, useState } from 'react'
import { Button, Check, Form, SimpleArrowLeft, SwitchComponent, TextInput } from '@/components'
import { Box, Grid } from '@mui/material'
import { FormValues } from './helpers/types'
import { useNavigate, useParams } from 'react-router-dom'
import { LocalStorageHelper } from '@/helpers'
import { Mock, UserMockModel } from '@/domain'
import { Permission, permissions } from './helpers/permissions'

export const FormUser: FC = (): JSX.Element => {
	const [initial, setInitial] = useState<FormValues>({
		name: '',
		email: '',
		business: '',
		office: '',
		permissions: []
	})

	const { id } = useParams<{ id: string }>()

	const navigate = useNavigate()

	useEffect(() => {
		if (id) {
			handleInitialValues()
		}
	}, [id])

	const handleInitialValues = (): void => {
		const localHelper = new LocalStorageHelper()

		const { users }: Mock = localHelper.returnMock('mock')

		const user = users.find((x: UserMockModel) => x.id === parseInt(`${id}`))

		if (user) {
			setInitial({
				business: user.business,
				email: user.email,
				name: user.name,
				office: user.office,
				permissions: user.permissions || []
			})
		}
	}

	const fetchAddUser = (values: FormValues): void => {}

	const fetchEditUser = (values: FormValues): void => {}

	const handleAction = (values: FormValues): void => {
		id ? fetchEditUser(values) : fetchAddUser(values)
	}

	const addPermission = (value: number): void => {
		setInitial({ ...initial, permissions: [...initial.permissions, value] })
	}

	const removePermission = (value: number): void => {
		const arr = initial.permissions
		arr.splice(arr.indexOf(value), 1)
		setInitial({
			...initial,
			permissions: arr
		})
	}

	return (
		<Form<FormValues>
			initialValues={initial}
			onSubmit={(values: FormValues) => handleAction(values)}
			children={
				<Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
					<Grid item xs={3}>
						<TextInput required name="name" placeholder="nome" label="Nome" />
					</Grid>
					<Grid item xs={3}>
						<TextInput required name="email" type="email" placeholder="email" label="Email" />
					</Grid>
					<Grid item xs={3}>
						<TextInput required name="office" placeholder="cargo" label="Cargo" />
					</Grid>
					<Grid item xs={3}>
						<TextInput required name="business" placeholder="empresa" label="Empresa" />
					</Grid>

					<Grid item xs={12}>
						{permissions.map((x: Permission, index: number) => {
							const checked = initial.permissions.find((y: number) => y === x.value)
							return (
								<SwitchComponent
									label={x.name}
									key={index}
									check={checked ? true : false}
									onChange={() => (checked ? removePermission(x.value) : addPermission(x.value))}
								/>
							)
						})}
					</Grid>

					<Grid container direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
						<Grid item>
							<Box mt={2}>
								<Button
									children="Voltar"
									icon={<SimpleArrowLeft />}
									onClick={() => navigate('/users')}
									variant="outline"
								/>
							</Box>
						</Grid>
						<Grid item>
							<Box mt={2}>
								{!id && (
									<Button
										children="Cadastrar usuário"
										icon={<Check />}
										type="submit"
										variant="contained"
									/>
								)}

								{id && (
									<Button
										children="Editar usuário"
										icon={<Check />}
										type="submit"
										variant="contained"
									/>
								)}
							</Box>
						</Grid>
					</Grid>
				</Grid>
			}
		/>
	)
}
