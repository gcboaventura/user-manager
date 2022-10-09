import { FC, useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { FormValues } from './helpers/types'
import { useNavigate, useParams } from 'react-router-dom'
import { UserMockModel } from '@/domain'
import { RootState } from '@/store/config-store'
import { FormikHelpers } from 'formik'
import { Permission, permissions } from './helpers/permissions'
import { useDispatch, useSelector } from 'react-redux'
import { AddUserActions } from '@/store/users/add/action'
import { UpdateUserActions } from '@/store/users/update/action'
import { DeleteUserActions } from '@/store/users/delete/action'
import {
	Button,
	Check,
	Form,
	Pencil,
	SimpleArrowLeft,
	SwitchComponent,
	TextInput,
	Trash
} from '@/components'

export const FormUser: FC = (): JSX.Element => {
	const [initial, setInitial] = useState<FormValues>({
		name: '',
		email: '',
		business: '',
		office: '',
		permissions: []
	})

	const [statePermissions, setStatePermissions] = useState<number[]>([])

	const { users } = useSelector((state: RootState) => ({
		users: state.mockUsers.data
	}))

	const { id } = useParams<{ id: string }>()

	const navigate = useNavigate()

	const dispatch = useDispatch()

	useEffect(() => {
		if (id) {
			handleInitialValues()
		}
	}, [id, users])

	const handleInitialValues = (): void => {
		const user = (users || []).find((x: UserMockModel) => x.id === parseInt(`${id}`))

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

	const fetchAddUser = (values: FormValues): void => {
		dispatch(AddUserActions.fetchAddUser({ ...values, permissions: statePermissions }))
	}

	const fetchUpdateUser = (values: FormValues): void => {
		dispatch(UpdateUserActions.fetchUpdateUser({ ...values, id: parseInt(`${id}`) }))
	}

	const fetchDeleteUser = (id: string): void => {
		dispatch(DeleteUserActions.fetchDeleteUser({ id: id, onSuccess: () => navigate('/users') }))
	}

	const addPermission = (value: number): void => {
		setStatePermissions([...statePermissions, value])
		setInitial({ ...initial, permissions: [...initial.permissions, value] })
	}

	const handleAction = (values: FormValues): void => {
		id ? fetchUpdateUser(values) : fetchAddUser(values)
	}

	const removePermission = (value: number): void => {
		const arr = initial.permissions
		arr.splice(arr.indexOf(value), 1)
		setStatePermissions(arr)
		setInitial({
			...initial,
			permissions: arr
		})
	}

	return (
		<Form<FormValues>
			initialValues={
				id ? initial : { name: '', email: '', business: '', office: '', permissions: [] }
			}
			onSubmit={(values: FormValues, { resetForm }) => {
				handleAction(values)
				resetForm()
			}}
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
						<Box mt={4}>
							<Grid container direction="row" spacing={2} alignItems="center">
								{permissions.map((x: Permission, index: number) => {
									const checked = initial.permissions.find((y: number) => y === x.value)
									return (
										<Grid item xs={4} key={index}>
											<SwitchComponent
												label={x.name}
												key={index}
												check={checked ? true : false}
												onChange={() =>
													checked ? removePermission(x.value) : addPermission(x.value)
												}
											/>
										</Grid>
									)
								})}
							</Grid>
						</Box>
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
						{!id && (
							<Grid item>
								<Box mt={2}>
									<Button
										children="Cadastrar usuário"
										type="submit"
										icon={<Check />}
										variant="contained"
									/>
								</Box>
							</Grid>
						)}

						{id && (
							<>
								<Grid item>
									<Box mt={2}>
										<Button
											children="Editar usuário"
											type="submit"
											icon={<Pencil />}
											variant="contained"
										/>
									</Box>
								</Grid>
								<Grid item>
									<Box mt={2}>
										<Button
											children="Excluir usuário"
											type="button"
											onClick={() => fetchDeleteUser(id)}
											icon={<Trash />}
											variant="icon"
										/>
									</Box>
								</Grid>
							</>
						)}
					</Grid>
				</Grid>
			}
		/>
	)
}
